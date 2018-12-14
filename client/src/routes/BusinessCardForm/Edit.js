import React, { Component } from 'react'
import BusinessCardFormEdit from '../../containers/BusinessCardForm/Edit'

class Edit extends Component {
    render() {
        return (
            <div className="main-container">
                <BusinessCardFormEdit
                    match={this.props.match}
                    history={this.props.history}
                />
            </div>
        )
    }
}

export default Edit
