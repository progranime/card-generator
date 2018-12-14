import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'

import { login } from '../../actions/authActions'
import Spinner from '../../components/Spinner'
import FormInput from '../../components/Form/Input'

class Index extends Component {
    constructor() {
        super()
        this.state = {
            email: '',
            password: '',
            errorLoading: false
        }
    }

    handleChange = e => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    handleSubmit = e => {
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

    componentDidMount() {
        const { auth } = this.props

        // if its already login redirect it to home page
        if (auth.user.id) window.location.href = '/'
    }

    componentWillReceiveProps(nextProps) {
        const { error } = nextProps
        this.setState({
            errorLoading: error.loading
        })
    }

    render() {
        const { error } = this.props
        return (
            <div className="form form--login">
                <form onSubmit={this.handleSubmit}>
                    <FormInput
                        label="Email"
                        type="text"
                        id="email"
                        name="email"
                        value={this.state.email}
                        handleChange={this.handleChange}
                    />

                    <FormInput
                        label="Password"
                        type="password"
                        id="password"
                        name="password"
                        value={this.state.password}
                        handleChange={this.handleChange}
                        error={error.login}
                    />

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

const mapDispatchToProps = {
    login
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Index)
