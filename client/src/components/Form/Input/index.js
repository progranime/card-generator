import React, { Fragment } from 'react'
import PropTypes from 'prop-types'
import ErrorMessage from './ErrorMessage'

const Index = ({
    label,
    type,
    name,
    id,
    placeholder,
    handleChange,
    value,
    error
}) => {
    return (
        <Fragment>
            <div className="form-group">
                <label htmlFor={id}>{label}</label>
                <input
                    type={type}
                    name={name}
                    id={id}
                    className="form-control"
                    onChange={handleChange}
                    value={value}
                    placeholder={placeholder}
                />
            </div>
            <ErrorMessage error={error} />
        </Fragment>
    )
}

Index.defaultProps = {
    type: 'text',
    value: '',
    placeholder: ''
}

Index.propTypes = {
    label: PropTypes.string,
    type: PropTypes.string,
    name: PropTypes.string,
    id: PropTypes.string,
    placeholder: PropTypes.string,
    handleChange: PropTypes.func.isRequired,
    value: PropTypes.string || PropTypes.number
}

export default Index
