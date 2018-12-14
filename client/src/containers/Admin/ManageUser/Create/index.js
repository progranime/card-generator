import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'

import { getAllAuthorityRole } from '../../../../actions/authorityRoleActions'
import { createAuthority } from '../../../../actions/authorityActions'
import manageUserForm from '../../../../scripts/validations/manageUserForm'
import FormInput from '../../../../components/Form/Input'
import FormSelect from '../../../../components/Form/Select'

class Index extends Component {
    constructor(props) {
        super(props)
        this.state = {
            email: '',
            role: 1,
            error: {}
        }
    }

    handleSubmit = e => {
        e.preventDefault()
        const { email, role } = this.state
        const { history } = this.props
        const formData = {
            email,
            role
        }
        let validation = manageUserForm.validation(formData)
        if (Object.keys(validation.errors).length !== 0) {
            this.setState({
                error: validation.errors
            })
        } else {
            this.props.createAuthority(formData, history)
        }
    }

    handleChange = e => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    componentDidMount() {
        this.props.getAllAuthorityRole()
    }

    componentWillReceiveProps(nextProps) {
        const { error } = nextProps
        this.setState({
            error: error
        })
    }

    render() {
        const { authorityRole } = this.props

        return (
            <div className="row">
                <div className="col-20 col-sm-10 offset-sm-5">
                    <h4>Add User</h4>
                    <form onSubmit={this.handleSubmit}>
                        <FormInput
                            label="Email"
                            name="email"
                            id="email"
                            value={this.state.email}
                            handleChange={this.handleChange}
                            error={this.state.error.email}
                        />

                        <FormSelect
                            label="Role"
                            name="role"
                            id="role"
                            classes="form-control text-capitalize"
                            handleChange={this.handleChange}
                            value={this.state.role}
                        >
                            {authorityRole.results.map(item => (
                                <option value={item.id} key={item.id}>
                                    {item.name}
                                </option>
                            ))}
                        </FormSelect>

                        <div className="form-group text-right">
                            <Link
                                to="/admin/manage-user"
                                className="btn btn--secondary mr-2"
                            >
                                Cancel
                            </Link>

                            <input
                                type="submit"
                                className="btn btn-primary"
                                value="Submit"
                            />
                        </div>
                    </form>
                </div>
            </div>
        )
    }
}

Index.propTypes = {
    getAllAuthorityRole: PropTypes.func.isRequired,
    createAuthority: PropTypes.func.isRequired,
    authorityRole: PropTypes.object.isRequired,
    error: PropTypes.object.isRequired
}

const mapStateToProps = state => ({
    authorityRole: state.authorityRole,
    error: state.error
})

const mapDispatchToProps = {
    getAllAuthorityRole,
    createAuthority
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Index)
