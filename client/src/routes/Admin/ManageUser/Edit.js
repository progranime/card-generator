import React, { Component } from 'react'
import AdminManageUserEdit from '../../../containers/Admin/ManageUser/Edit'

class Edit extends Component {
    render() {
        return (
            <div className="main-container">
                <AdminManageUserEdit
                    match={this.props.match}
                    history={this.props.history}
                />
            </div>
        )
    }
}

export default Edit
