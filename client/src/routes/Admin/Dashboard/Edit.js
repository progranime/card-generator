import React, { Component } from 'react'

import AdminDashboardEdit from '../../../containers/Admin/Dashboard/Edit'

class Edit extends Component {
    render() {
        return (
            <div className="main-container">
                <AdminDashboardEdit
                    match={this.props.match}
                    history={this.props.history}
                />
            </div>
        )
    }
}

export default Edit
