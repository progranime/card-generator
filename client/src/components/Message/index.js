import React from 'react'
import PropTypes from 'prop-types'

const Index = ({ message, classes }) => {
    return (
        <div className={`message ${classes}`}>
            <h4>{message}</h4>
        </div>
    )
}

Index.defaultProps = {
    message: 'Your message here ...',
    classes: 'message--not-found'
}

Index.propTypes = {
    message: PropTypes.string.isRequired,
    classes: PropTypes.string
}

export default Index
