import React from 'react'
import PropTypes from 'prop-types'

const Body = ({ children }) => {
    return <tbody className="mg-table__body">{children}</tbody>
}

Body.propTypes = {
    children: PropTypes.node.isRequired
}

export default Body
