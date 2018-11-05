import React, { Fragment } from 'react'
import classnames from 'classnames'

const Index = ({
    label,
    type,
    name,
    id,
    handleChange,
    defaultValue,
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
                    defaultValue={defaultValue}
                />
            </div>
            <div
                className={classnames('invalid-feedback', {
                    'd-block': error
                })}
            >
                <p>{error}</p>
            </div>
        </Fragment>
    )
}

Index.defaultProps = {
    label: '',
    type: 'input',
    name: '',
    id: ''
}
export default Index
