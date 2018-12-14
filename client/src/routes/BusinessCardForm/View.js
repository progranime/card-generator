import React, { Component } from 'react'
import BusinessCardFormView from '../../containers/BusinessCardForm/View'

class View extends Component {
    render() {
        return (
            <div className="main-container">
                <BusinessCardFormView
                    match={this.props.match}
                    history={this.props.history}
                />
            </div>
        )
    }
}

export default View
