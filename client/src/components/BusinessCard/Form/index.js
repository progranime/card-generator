import React from 'react'
import { Link } from 'react-router-dom'

import FormInput from '../../../components/Form/Input'
import FormSelect from '../../../components/Form/Select'

const Index = ({
    handleChange,
    handleChangeBrandList,
    handleSubmit,
    productDivisions,
    handleChangeImage,
    handleReset,
    handleChangeLocation,
    name,
    position,
    locationId,
    productDivision,
    email,
    cellphone,
    telephone,
    skype,
    formType,
    errors,
    locations
}) => {
    return (
        <form className="form" onSubmit={handleSubmit}>
            <FormInput
                label="Picture"
                type="file"
                name="picture"
                id="picture"
                handleChange={handleChangeImage}
                error={errors.picture}
            />

            <FormInput
                label="Name"
                type="text"
                name="name"
                id="name"
                handleChange={handleChange}
                value={name}
                error={errors.name}
            />

            <FormInput
                label="Position"
                type="text"
                name="position"
                id="position"
                handleChange={handleChange}
                value={position}
                error={errors.position}
            />

            <FormSelect
                label="Location"
                name="locationId"
                id="locationId"
                handleChange={handleChangeLocation}
                value={locationId}
            >
                {locations.map(location => (
                    <option key={location.id} value={location.id}>
                        {location.name}
                    </option>
                ))}
            </FormSelect>

            <FormSelect
                label="Product Division"
                name="productDivision"
                id="productDivision"
                classes="form-control text-capitalize"
                handleChange={handleChangeBrandList}
                value={productDivision}
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
            </FormSelect>

            <FormInput
                label="Email"
                type="text"
                name="email"
                id="email"
                handleChange={handleChange}
                value={email}
                error={errors.email}
            />

            <FormInput
                label="Cellphone"
                type="text"
                name="cellphone"
                id="cellphone"
                handleChange={handleChange}
                value={cellphone}
                error={errors.cellphone}
            />

            <FormInput
                label="Telephone"
                type="text"
                name="telephone"
                id="telephone"
                handleChange={handleChange}
                value={telephone}
                error={errors.telephone}
            />

            <FormInput
                label="Skype"
                type="text"
                name="skype"
                id="skype"
                handleChange={handleChange}
                value={skype}
                error={errors.skype}
            />

            <div className="float-right">
                <Link to="/" className="btn btn--secondary mx-1">
                    Cancel
                </Link>
                <input
                    type="reset"
                    value="Reset"
                    className="btn btn-danger mx-1"
                    onClick={handleReset}
                />

                {formType === 'create' ? (
                    <input
                        type="submit"
                        value="Create"
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

export default Index
