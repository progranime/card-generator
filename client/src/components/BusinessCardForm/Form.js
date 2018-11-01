import React from 'react'
import classnames from 'classnames'
import _ from 'lodash'

const Form = ({
    handleChange,
    handleSubmit,
    productDivisions,
    handleChangeImage,
    handleReset,
    name,
    position,
    location,
    email,
    cellphone,
    telephone,
    skype,
    brandLists,
    picture,
    formType,
    errors
}) => {
    return (
        <form className="form" onSubmit={handleSubmit}>
            <div className="form-group">
                <label htmlFor="name">Picture</label>
                <input
                    type="file"
                    name="picture"
                    id="picture"
                    className="form-control"
                    onChange={handleChangeImage}
                    defaultValue={picture}
                />
            </div>
            <div className="form-group">
                <label htmlFor="name">Name</label>
                <input
                    type="text"
                    name="name"
                    id="name"
                    className="form-control"
                    onChange={handleChange.bind(this, {
                        method: ''
                    })}
                    defaultValue={name}
                />
            </div>
            <div
                className={classnames('invalid-feedback', {
                    'd-block': errors.name
                })}
            >
                <p>{errors.name}</p>
            </div>
            <div className="form-group">
                <label htmlFor="name">Position</label>
                <input
                    type="text"
                    name="position"
                    id="position"
                    className="form-control"
                    onChange={handleChange.bind(this, {
                        method: ''
                    })}
                    defaultValue={position}
                />
            </div>
            <div
                className={classnames('invalid-feedback', {
                    'd-block': errors.position
                })}
            >
                <p>{errors.position}</p>
            </div>
            <div className="form-group">
                <label htmlFor="location">Location</label>
                <input
                    type="text"
                    name="location"
                    id="location"
                    className="form-control"
                    onChange={handleChange.bind(this, {
                        method: ''
                    })}
                    defaultValue={location}
                />
            </div>
            <div
                className={classnames('invalid-feedback', {
                    'd-block': errors.location
                })}
            >
                <p>{errors.location}</p>
            </div>
            <div className="form-group">
                <label htmlFor="productDivision">Product Division</label>
                <select
                    name="productDivision"
                    id="productDivision"
                    className="form-control text-uppercase"
                    onChange={handleChange.bind(this, {
                        method: 'getBrandList'
                    })}
                >
                    {productDivisions.map(productDivision => {
                        return (
                            <option
                                value={productDivision.brand_list_id}
                                key={productDivision.id}
                            >
                                {productDivision.name}
                            </option>
                        )
                    })}
                </select>
            </div>
            <div className="form-group">
                <label htmlFor="email">Email</label>
                <input
                    type="text"
                    name="email"
                    id="email"
                    className="form-control"
                    onChange={handleChange.bind(this, {
                        method: ''
                    })}
                    defaultValue={email}
                />
            </div>
            <div
                className={classnames('invalid-feedback', {
                    'd-block': !_.isEmpty(errors.email)
                })}
            >
                <p>{errors.email}</p>
            </div>
            <div className="form-group">
                <label htmlFor="cellphone">Cellphone</label>
                <input
                    type="text"
                    name="cellphone"
                    id="cellphone"
                    className="form-control"
                    onChange={handleChange.bind(this, {
                        method: ''
                    })}
                    defaultValue={cellphone}
                />
            </div>
            <div className="form-group">
                <label htmlFor="telephone">Telephone</label>
                <input
                    type="text"
                    name="telephone"
                    id="telephone"
                    className="form-control"
                    onChange={handleChange.bind(this, {
                        method: ''
                    })}
                    defaultValue={telephone}
                />
            </div>
            <div className="form-group">
                <label htmlFor="skype">Skype</label>
                <input
                    type="text"
                    name="skype"
                    id="skype"
                    className="form-control"
                    onChange={handleChange.bind(this, {
                        method: ''
                    })}
                    defaultValue={skype}
                />
            </div>
            <div className="float-right">
                <input
                    type="reset"
                    value="Reset"
                    className="btn btn-danger mx-1"
                    onClick={handleReset}
                />

                {formType === 'create' ? (
                    <input
                        type="submit"
                        value="Submit"
                        className="btn btn-primary ml-1"
                    />
                ) : (
                    <input
                        type="submit"
                        value="Update"
                        className="btn btn-primary ml-1"
                    />
                )}
            </div>
        </form>
    )
}

export default Form
