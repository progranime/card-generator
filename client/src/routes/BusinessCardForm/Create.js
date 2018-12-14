import React, { Component } from 'react'
import BusinessCardFormCreate from '../../containers/BusinessCardForm/Create'

class Create extends Component {
    render() {
        return (
            <div className="main-container">
                <BusinessCardFormCreate history={this.props.history} />
            </div>
        )
    }
}

export default Create
