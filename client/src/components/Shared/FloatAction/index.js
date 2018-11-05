import React from 'react'
import { FaPlus } from 'react-icons/fa'
import { Link } from 'react-router-dom'
import PropTypes from 'prop-types'

const Index = ({ path }) => {
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

Index.defaultProps = {
    path: ''
}

Index.propTypes = {
    path: PropTypes.string
}

export default Index
