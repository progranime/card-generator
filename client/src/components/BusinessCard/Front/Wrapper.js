import React from 'react'
import PropTypes from 'prop-types'
import classnames from 'classnames'

const Wrapper = ({ hasOutline, children }) => {
    return (
        <div
            className={classnames('card__wrapper', {
                'card__wrapper--outline': hasOutline
            })}
        >
            {children}
        </div>
    )
}

Wrapper.defaultProps = {
    hasOutline: false
}

Wrapper.propTypes = {
    children: PropTypes.node.isRequired
}

export default Wrapper
