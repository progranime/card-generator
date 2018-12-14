import React, { Component } from 'react'
import AdminManageUserCreate from '../../../containers/Admin/ManageUser/Create'

class Create extends Component {
    render() {
        return (
            <div className="main-container">
                <AdminManageUserCreate
                    match={this.props.match}
                    history={this.props.history}
                />
            </div>
        )
    }
}

export default Create
