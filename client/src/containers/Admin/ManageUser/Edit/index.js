import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'

import { getAllAuthorityRole } from '../../../../actions/authorityRoleActions'
import {
    getSingleAuthority,
    updateAuthority
} from '../../../../actions/authorityActions'
import manageUserForm from '../../../../scripts/validations/manageUserForm'
import FormInput from '../../../../components/Form/Input'
import FormSelect from '../../../../components/Form/Select'

class Index extends Component {
    constructor(props) {
        super(props)
        this.state = {
            email: '',
            role: '',
            error: {}
        }
    }

    handleChange = e => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    handleSubmit = e => {
        e.preventDefault()
        const { match, history } = this.props
        const { email, role } = this.state

        const formData = {
            id: match.params.id,
            email,
            role
        }

        let validation = manageUserForm.validation(formData)
        if (Object.keys(validation.errors).length !== 0) {
            this.setState({
                error: validation.errors
            })
        } else {
            this.props.updateAuthority(formData, history)
        }
    }

    // lifecycle hooks
    componentDidMount() {
        const { match } = this.props
        // get specific user
        this.props.getSingleAuthority({
            id: match.params.id
        })

        this.props.getAllAuthorityRole()
    }

    componentWillReceiveProps(nextProps) {
        const { authority } = nextProps

        // if the email already exist dont update the state to default
        this.setState({
            email: authority.result.email,
            role: authority.result.authority_role_id
        })
    }

    render() {
        const { authorityRole } = this.props

        return (
            <div className="row">
                <div className="col-20 col-sm-10 offset-sm-5">
                    <h4>Edit User</h4>
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
    authorityRole: PropTypes.object.isRequired,
    getAllAuthorityRole: PropTypes.func.isRequired,
    getSingleAuthority: PropTypes.func.isRequired,
    updateAuthority: PropTypes.func.isRequired,
    error: PropTypes.object.isRequired
}

const mapStateToProps = state => ({
    authorityRole: state.authorityRole,
    authority: state.authority,
    error: state.error
})

const mapDispatchToProps = {
    getAllAuthorityRole,
    getSingleAuthority,
    updateAuthority
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Index)
