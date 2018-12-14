import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'

const FloatAction = ({ to, handleClick, classes, children }) => {
    return (
        <div className={`float-action active ${classes}`}>
            <div className="float-action__container">
                <Link to={to} onClick={handleClick}>
                    {children}
                </Link>
            </div>
        </div>
    )
}

FloatAction.defaultProps = {
    to: '#',
    classes: ''
}

FloatAction.propTypes = {
    to: PropTypes.string.isRequired,
    handleClick: PropTypes.func,
    classes: PropTypes.string,
    children: PropTypes.node.isRequired
}

export default FloatAction
