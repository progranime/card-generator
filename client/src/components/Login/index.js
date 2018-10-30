import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import classnames from 'classnames'
import _ from 'lodash'

import { login } from '../../actions/authActions'
import { Spinner } from '../Shared'

class Index extends Component {
    constructor() {
        super()
        this.state = {
            email: '',
            password: '',
            errorLoading: false
        }

        this.handleChange = this.handleChange.bind(this)
        this.handleSubmit = this.handleSubmit.bind(this)
    }

    handleChange(e) {
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    handleSubmit(e) {
        e.preventDefault()

        const userData = {
            email: this.state.email,
            password: this.state.password
        }

        // start loading
        this.setState({
            errorLoading: true
        })

        // dispatch an action
        this.props.login(userData)
    }

    componentWillReceiveProps(nextProps) {
        const { error } = nextProps
        this.setState({
            errorLoading: error.loading
        })
    }

    render() {
        return (
            <div className="form form--login">
                <form onSubmit={this.handleSubmit}>
                    <div className="form-group">
                        <label htmlFor="email">Email</label>
                        <input
                            type="text"
                            className="form-control"
                            id="email"
                            name="email"
                            onChange={this.handleChange}
                            autoComplete="email"
                        />
                    </div>

                    <div className="form-group">
                        <label htmlFor="password">Password</label>
                        <input
                            type="password"
                            className="form-control"
                            id="password"
                            name="password"
                            onChange={this.handleChange}
                            autoComplete="current-password"
                        />
                    </div>

                    <div className="form-group">
                        <div
                            className={classnames('invalid-feedback', {
                                'd-block': !_.isEmpty(this.props.error.login)
                            })}
                        >
                            {this.props.error.login}
                        </div>
                    </div>

                    <Spinner loading={this.state.errorLoading} />

                    <input
                        type="submit"
                        className="btn btn-primary btn btn-block mt-4"
                        value="Submit"
                    />
                </form>
            </div>
        )
    }
}

Index.propTypes = {
    auth: PropTypes.object.isRequired,
    error: PropTypes.object.isRequired,
    login: PropTypes.func.isRequired
}

const mapStateToProps = state => ({
    auth: state.auth,
    error: state.error
})

const mapStateToActions = {
    login
}

export default connect(
    mapStateToProps,
    mapStateToActions
)(Index)
