import React from 'react'
import PropTypes from 'prop-types'

const Wrapper = ({ children, classes }) => {
    return <div className={`float-action__wrapper ${classes}`}>{children}</div>
}

Wrapper.defaultProps = {
    classes: ''
}

Wrapper.propTypes = {
    children: PropTypes.node,
    classes: PropTypes.string
}

export default Wrapper
