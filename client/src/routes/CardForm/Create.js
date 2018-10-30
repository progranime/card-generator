import React, { Component } from 'react'
import BusinessCardForm from '../../components/BusinessCardForm'

class Create extends Component {
    render() {
        return (
            <div className="main-container">
                <BusinessCardForm formType="create" />
            </div>
        )
    }
}

export default Create
