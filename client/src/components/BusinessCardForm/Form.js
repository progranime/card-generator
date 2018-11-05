import React from 'react'
import { FormInput } from '../Shared'

const Form = ({
    handleChange,
    handleSubmit,
    productDivisions,
    handleChangeImage,
    handleReset,
    name,
    position,
    location,
    productDivision,
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
            <FormInput
                label="Picture"
                type="file"
                name="picture"
                id="picture"
                handleChange={handleChangeImage}
                defaultValue={picture}
                error={errors.picture}
            />

            <FormInput
                label="Name"
                type="text"
                name="name"
                id="name"
                handleChange={handleChange.bind(this, {
                    method: ''
                })}
                defaultValue={name}
                error={errors.name}
            />

            <FormInput
                label="Position"
                type="text"
                name="position"
                id="position"
                handleChange={handleChange.bind(this, {
                    method: ''
                })}
                defaultValue={position}
                error={errors.position}
            />

            <FormInput
                label="Location"
                type="text"
                name="location"
                id="location"
                handleChange={handleChange.bind(this, {
                    method: ''
                })}
                defaultValue={location}
                error={errors.location}
            />

            <div className="form-group">
                <label htmlFor="productDivision">Product Division</label>

                <select
                    name="productDivision"
                    id="productDivision"
                    className="form-control text-uppercase"
                    onChange={handleChange.bind(this, {
                        method: 'getBrandList'
                    })}
                    defaultValue={productDivision}
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

            <FormInput
                label="Email"
                type="text"
                name="email"
                id="email"
                handleChange={handleChange.bind(this, {
                    method: ''
                })}
                defaultValue={email}
                error={errors.email}
            />

            <FormInput
                label="Cellphone"
                type="text"
                name="cellphone"
                id="cellphone"
                handleChange={handleChange.bind(this, {
                    method: ''
                })}
                defaultValue={cellphone}
            />

            <FormInput
                label="Telephone"
                type="text"
                name="telephone"
                id="telephone"
                handleChange={handleChange.bind(this, {
                    method: ''
                })}
                defaultValue={telephone}
            />

            <FormInput
                label="Skype"
                type="text"
                name="skype"
                id="skype"
                handleChange={handleChange.bind(this, {
                    method: ''
                })}
                defaultValue={skype}
            />

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
