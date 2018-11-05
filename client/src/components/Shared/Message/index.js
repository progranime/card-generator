import React from 'react'
import PropTypes from 'prop-types'

const Index = ({ message }) => {
    return <div className="text-center">{message}</div>
}

Index.defaultProps = {
    message: 'Message ...'
}

Index.propTypes = {
    message: PropTypes.string
}

export default Index
