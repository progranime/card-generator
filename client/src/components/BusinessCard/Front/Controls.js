import React from 'react'
import PropTypes from 'prop-types'
import { FaEdit, FaEye } from 'react-icons/fa'
import classnames from 'classnames'
import { Link } from 'react-router-dom'

const Controls = ({ id, hasControl, handleToggleModal }) => {
    return (
        <div
            className={classnames('card__controls', {
                'd-none': !hasControl
            })}
        >
            <Link to={`/card/${id}/edit`}>
                <FaEdit className="control" />
            </Link>

            {/* <FaInfoCircle
                className="control"
                onClick={handleToggleModal.bind(this, { id, type: 'detail' })}
            /> */}

            <Link to={`/card/${id}/view`}>
                <FaEye className="control" />
            </Link>
        </div>
    )
}

Controls.defaultProps = {
    id: 0,
    hasControl: false,
    handleToggleModal: () => {}
}

Controls.propTypes = {
    id: PropTypes.number,
    hasControl: PropTypes.bool,
    handleToggleModal: PropTypes.func
}

export default Controls
