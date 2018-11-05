import React, { Component } from 'react'
import BusinessCardForm from '../../components/BusinessCardForm'

class Create extends Component {
    render() {
        return (
            <div className="main-container">
                <BusinessCardForm
                    formType="create"
                    history={this.props.history}
                />
            </div>
        )
    }
}

export default Create
