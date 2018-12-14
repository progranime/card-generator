import React, { Component } from 'react'
import AdminManageUser from '../../../containers/Admin/ManageUser'

class Index extends Component {
    render() {
        return (
            <div className="main-container">
                <AdminManageUser
                    match={this.props.match}
                    history={this.props.history}
                />
            </div>
        )
    }
}

export default Index
