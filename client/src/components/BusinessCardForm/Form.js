import React from 'react'

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
    formType
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
                    required
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
                    required
                />
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
                    required
                />
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
                    required
                />
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
                    type="email"
                    name="email"
                    id="email"
                    className="form-control"
                    onChange={handleChange.bind(this, {
                        method: ''
                    })}
                    defaultValue={email}
                    required
                />
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
                    type="email"
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
