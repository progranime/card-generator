import React from 'react'
import PropTypes from 'prop-types'

const Index = ({ label, name, id, classes, handleChange, value, children }) => {
    return (
        <div className="form-group">
            <label htmlFor={id}>{label}</label>
            <select
                name={name}
                id={id}
                className={classes}
                onChange={handleChange}
                value={value}
            >
                {children}
            </select>
        </div>
    )
}

Index.defaultProps = {
    classes: 'form-control'
}

Index.propTypes = {
    label: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    id: PropTypes.string.isRequired,
    classes: PropTypes.string,
    handleChange: PropTypes.func.isRequired
}

export default Index
