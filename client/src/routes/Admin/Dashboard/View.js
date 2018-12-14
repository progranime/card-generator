import React, { Component } from 'react'
import AdminDashboardView from '../../../containers/Admin/Dashboard/View'

class View extends Component {
    render() {
        return (
            <div className="main-container">
                <AdminDashboardView
                    match={this.props.match}
                    history={this.props.history}
                />
            </div>
        )
    }
}

export default View
