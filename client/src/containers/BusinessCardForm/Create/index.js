import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import _ from 'lodash'

import {
    getAllProductDivision,
    getBrandList
} from '../../../actions/productDivisionActions'
import { createCard } from '../../../actions/cardActions'
import { getAllBrand } from '../../../actions/brandActions'
import { getAllLocation } from '../../../actions/locationActions'
import BusinessCardForm from '../../../components/BusinessCard/Form'
import BusinessCardFront from '../../../components/BusinessCard/Front'
import BusinessCardRear from '../../../components/BusinessCard/Rear'
import cardForm from '../../../scripts/validations/cardForm'

class Index extends Component {
    constructor(props) {
        super(props)

        this.state = {
            picture: '',
            pictureFile: '',
            name: '',
            position: '',
            locationId: 1,
            locationName: 'Canada, Victoria',
            productDivision: 1,
            email: '',
            cellphone: '',
            telephone: '',
            skype: '',
            errors: {}
        }

        this.defaultState = {
            picture: '',
            pictureFile: '',
            name: '',
            position: '',
            locationId: 1,
            locationName: 'Canada, Victoria',
            productDivision: 1,
            email: '',
            cellphone: '',
            telephone: '',
            skype: '',
            errors: {}
        }
    }

    handleChange = e => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    handleSubmit = e => {
        e.preventDefault()
        const formData = {
            picture: this.state.pictureFile || this.state.picture,
            name: this.state.name,
            position: this.state.position,
            locationId: this.state.locationId,
            productDivision: this.state.productDivision,
            email: this.state.email,
            cellphone: this.state.cellphone,
            telephone: this.state.telephone,
            skype: this.state.skype
        }

        // check for validation
        let validation = cardForm.validation(formData)
        if (!_.isEmpty(validation.errors)) {
            this.setState({
                errors: validation.errors
            })
        } else {
            this.props.createCard(formData, this.props.history)
        }
    }

    handleReset = () => {
        this.setState(this.defaultState)
    }

    handleChangeImage = e => {
        if (e.target.files[0]) {
            this.setState({
                pictureFile: e.target.files[0]
            })
            let reader = new FileReader()
            reader.onload = e => {
                this.setState({
                    picture: e.target.result
                })
            }
            reader.readAsDataURL(e.target.files[0])
        }
    }

    handleChangeBrandList = async e => {
        await this.setState({
            [e.target.name]: e.target.value
        })

        this.props.getBrandList({
            id: this.state.productDivision
        })
    }

    handleChangeLocation = e => {
        const { location } = this.props
        let locationData = location.results.filter(result => {
            return result.id === parseInt(e.target.value)
        })

        this.setState({
            locationId: e.target.value,
            locationName: locationData[0].name
        })
    }

    // lifecycle hooks
    componentDidMount() {
        // load all brand
        this.props.getAllBrand()
        // load the product division
        this.props.getAllProductDivision()
        // initially load the brand list for CREA
        this.props.getBrandList({ id: 1 })
        // load all locations
        this.props.getAllLocation()
    }

    render() {
        const { productDivisions, brandLists } = this.props.productDivision
        const { brands } = this.props.brand
        const { location } = this.props

        return (
            <div className="row">
                <div className="col-20 col-md-10">
                    <BusinessCardForm
                        name={this.state.name}
                        position={this.state.position}
                        locationId={this.state.locationId}
                        email={this.state.email}
                        cellphone={this.state.cellphone}
                        telephone={this.state.telephone}
                        skype={this.state.skype}
                        picture={this.state.picture}
                        errors={this.state.errors}
                        formType="create"
                        productDivisions={productDivisions}
                        handleChange={this.handleChange}
                        handleSubmit={this.handleSubmit}
                        handleReset={this.handleReset}
                        handleChangeBrandList={this.handleChangeBrandList}
                        handleChangeImage={this.handleChangeImage}
                        handleChangeLocation={this.handleChangeLocation}
                        locations={location.results}
                    />
                </div>
                <div className="col-20 col-md-10 align-self-center">
                    <div className="d-flex justify-content-center my-4">
                        <BusinessCardFront
                            name={this.state.name}
                            position={this.state.position}
                            locationName={this.state.locationName}
                            email={this.state.email}
                            cellphone={this.state.cellphone}
                            telephone={this.state.telephone}
                            skype={this.state.skype}
                            picture={this.state.picture}
                            brandLists={brandLists.brand_list_name}
                            hasLabel={true}
                        />
                    </div>
                    <div className="d-flex justify-content-center">
                        <BusinessCardRear brands={brands} hasLabel={true} />
                    </div>
                </div>
            </div>
        )
    }
}

Index.propTypes = {
    productDivision: PropTypes.object.isRequired,
    brand: PropTypes.object.isRequired,
    getAllProductDivision: PropTypes.func.isRequired,
    getBrandList: PropTypes.func.isRequired,
    createCard: PropTypes.func.isRequired,
    getAllBrand: PropTypes.func.isRequired,
    getAllLocation: PropTypes.func.isRequired
}

const mapStateToProps = state => ({
    productDivision: state.productDivision,
    brand: state.brand,
    location: state.location
})

const mapDispatchToProps = {
    getAllProductDivision,
    getBrandList,
    createCard,
    getAllBrand,
    getAllLocation
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Index)
