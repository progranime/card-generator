import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'
import classnames from 'classnames'
import { FaPen, FaInfo, FaEye } from 'react-icons/fa'

const Controls = ({ hasControl, id }) => {
    return (
        <div
            className={classnames('card__controls', {
                'd-none': !hasControl
            })}
        >
            <Link to={`/card/${id}/edit`}>
                <FaPen className="control" />
            </Link>

            <FaInfo className="control" />
            <Link to={`/card/${id}/view`}>
                <FaEye className="control" />
            </Link>
        </div>
    )
}

Controls.defaultProps = {
    hasControl: false,
    id: 1
}

Controls.propTypes = {
    hasControl: PropTypes.bool,
    id: PropTypes.number
}

export default Controls
