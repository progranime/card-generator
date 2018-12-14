import React from 'react'
import PropTypes from 'prop-types'

const Label = ({ label }) => {
    return (
        <div className="card__label">
            <p>{label}</p>
        </div>
    )
}

Label.defaultProps = {
    label: 'Front'
}

Label.propTypes = {
    label: PropTypes.string.isRequired
}

export default Label
