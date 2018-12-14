import React, { Component } from 'react'
import AdminDashboard from '../../../containers/Admin/Dashboard'

class Index extends Component {
    render() {
        return (
            <div className="main-container">
                <AdminDashboard history={this.props.history} />
            </div>
        )
    }
}

export default Index
