import React, { Component } from 'react'
import PropTypes from 'prop-types'
import _ from 'lodash'
import { connect } from 'react-redux'

import { getSingleCard, updateCard } from '../../../actions/cardActions'
import {
    getAllProductDivision,
    getBrandList
} from '../../../actions/productDivisionActions'
import { getAllBrand } from '../../../actions/brandActions'
import { getAllLocation } from '../../../actions/locationActions'
import BusinessCardFront from '../../../components/BusinessCard/Front'
import BusinessCardRear from '../../../components/BusinessCard/Rear'
import BusinessCardForm from '../../../components/BusinessCard/Form'
import cardForm from '../../../scripts/validations/cardForm'

class Index extends Component {
    constructor(props) {
        super(props)

        this.state = {
            picture: '',
            pictureFile: '',
            bypassPicture: true,
            name: '',
            position: '',
            location: 1,
            locationName: '',
            productDivision: '',
            email: '',
            cellphone: '',
            telephone: '',
            skype: '',
            errors: {},
            hasUpdated: false,
            hasChangeProductDivision: false
        }

        this.defaultState = {
            picture: '',
            pictureFile: '',
            bypassPicture: false,
            name: '',
            position: '',
            location: 1,
            locationName: '',
            productDivision: 1,
            email: '',
            cellphone: '',
            telephone: '',
            skype: '',
            errors: {},
            hasUpdated: true,
            hasChangeProductDivision: false
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

        formData.id = this.props.match.params.id

        // check for validation
        let validation = cardForm.validation(formData, {
            picture: this.state.bypassPicture
        })
        if (!_.isEmpty(validation.errors)) {
            this.setState({
                errors: validation.errors
            })
        } else {
            this.props.updateCard(formData, this.props.history)
        }
    }

    handleReset = () => {
        this.setState(this.defaultState)
    }

    handleChangeImage = e => {
        // check the validity of the image
        this.setState({ bypassPicture: false })

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
            [e.target.name]: e.target.value,
            hasChangeProductDivision: true
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
        const { match } = this.props
        const id = match.params.id

        // load all brand
        this.props.getAllBrand()
        // load the product division
        this.props.getAllProductDivision()
        // get the current card data
        this.props.getSingleCard({ id })
        // load all locations
        this.props.getAllLocation()
    }

    componentWillReceiveProps(nextProps) {
        const { card } = nextProps
        const cardData = card.result

        if (this.state.hasChangeProductDivision) {
            this.setState({
                hasChangeProductDivision: false
            })
        } else {
            this.setState({
                picture: cardData.picture,
                name: cardData.name,
                position: cardData.position,
                locationId: cardData.location_id,
                locationName: cardData.location_name,
                productDivision: cardData.product_division_id,
                email: cardData.email,
                cellphone: cardData.cellphone,
                telephone: cardData.telephone,
                skype: cardData.skype
            })
        }
    }

    render() {
        const { brand, productDivision, location } = this.props

        return (
            <div className="row">
                <div className="col-20 col-md-10">
                    <BusinessCardForm
                        name={this.state.name}
                        position={this.state.position}
                        locationId={this.state.locationId}
                        productDivision={this.state.productDivision}
                        email={this.state.email}
                        cellphone={this.state.cellphone}
                        telephone={this.state.telephone}
                        skype={this.state.skype}
                        picture={this.state.picture}
                        errors={this.state.errors}
                        formType="edit"
                        productDivisions={productDivision.productDivisions}
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
                            brandLists={
                                productDivision.brandLists.brand_list_name
                            }
                            hasLabel={true}
                        />
                    </div>
                    <div className="d-flex justify-content-center">
                        <BusinessCardRear
                            brands={brand.brands}
                            hasLabel={true}
                        />
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
    getSingleCard: PropTypes.func.isRequired,
    updateCard: PropTypes.func.isRequired,
    getAllBrand: PropTypes.func.isRequired,
    getAllLocation: PropTypes.func.isRequired
}

const mapStateToProps = state => ({
    productDivision: state.productDivision,
    brand: state.brand,
    card: state.card,
    location: state.location
})

const mapDispatchToProps = {
    getAllProductDivision,
    getBrandList,
    getSingleCard,
    updateCard,
    getAllBrand,
    getAllLocation
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Index)
