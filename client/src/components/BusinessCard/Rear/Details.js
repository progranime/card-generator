import React from 'react'
import PropTypes from 'prop-types'

const Details = ({ title }) => {
    return (
        <div className="card__details">
            <p className="title">{title}</p>
        </div>
    )
}

Details.defaultProps = {
    title: 'Learn. Teach. Inspire.'
}

Details.propTypes = {
    title: PropTypes.string
}

export default Details
