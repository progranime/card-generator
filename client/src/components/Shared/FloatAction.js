import React from 'react'
import { FaPlus } from 'react-icons/fa'
import { Link } from 'react-router-dom'

const FloatAction = ({ path }) => {
    return (
        <div className="float-action active">
            <div className="float-action__container">
                <Link to={path}>
                    <FaPlus className="plus" />
                </Link>
            </div>
        </div>
    )
}

FloatAction.defaultProps = {
    path: '/card/create'
}

export default FloatAction
