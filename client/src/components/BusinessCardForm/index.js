import React, { Component } from 'react'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'

import {
    getProductDivision,
    getBrandList
} from '../../actions/productDivisionActions'
import { getBrand } from '../../actions/brandActions'
import { getCard, createCard } from '../../actions/cardActions'
import { BusinessCard, BusinessCardRear } from '../Shared'
import Form from './Form'

class Index extends Component {
    constructor() {
        super()
        this.state = {
            picture: '',
            pictureHolder: '',
            name: '',
            position: '',
            location: '',
            productDivision: 1,
            email: '',
            cellphone: '',
            telephone: '',
            skype: ''
        }

        this.baseState = {
            picture: '',
            pictureHolder: '',
            name: '',
            position: '',
            location: '',
            productDivision: 1,
            email: '',
            cellphone: '',
            telephone: '',
            skype: ''
        }

        this.handleChange = this.handleChange.bind(this)
        this.handleSubmit = this.handleSubmit.bind(this)
        this.getBrandList = this.getBrandList.bind(this)
        this.handleChangeImage = this.handleChangeImage.bind(this)
        this.handleReset = this.handleReset.bind(this)
    }

    async handleChange(data, e) {
        await this.setState({
            [e.target.name]: e.target.value
        })

        if (data.method === 'getBrandList') {
            this.getBrandList()
        }
    }

    handleSubmit(e) {
        e.preventDefault()
        const formData = {
            picture: this.state.pictureHolder,
            name: this.state.name,
            position: this.state.position,
            location: this.state.location,
            productDivision: this.state.productDivision,
            email: this.state.email,
            cellphone: this.state.cellphone,
            telephone: this.state.telephone,
            skype: this.state.skype
        }

        // create card
        this.props.createCard(formData)
    }

    handleChangeImage(e) {
        if (e.target.files[0]) {
            this.setState({
                pictureHolder: e.target.files[0]
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

    handleReset() {
        this.setState(this.baseState)
    }

    getBrandList() {
        this.props.getBrandList({
            id: this.state.productDivision
        })
    }

    componentDidMount() {
        // check what type of form either create/edit
        const { formType, match } = this.props
        const id = formType === 'create' ? '' : match.params.id

        // load the product division
        this.props.getProductDivision()
        // initially load the brand list for CREA
        this.props.getBrandList({ id: 1 })
        // load the all brand
        this.props.getBrand()

        if (formType === 'edit') {
            // get the current card data
            this.props.getCard({
                id
            })
        }
    }

    componentWillReceiveProps(nextProps) {
        const { card, formType } = nextProps
        const cardData = card.results[0]
        // update the state if the form is for edit
        if (cardData && formType === 'edit') {
            this.setState({
                picture: cardData.picture,
                name: cardData.name,
                position: cardData.position,
                location: cardData.location,
                productDivision: cardData.product_division_id,
                email: cardData.email,
                cellphone: cardData.cellphone,
                telephone: cardData.telephone,
                skype: cardData.skype
            })
        }
    }

    render() {
        const { productDivisions, brandLists } = this.props.productDivision
        const { brands } = this.props.brand

        return (
            <div className="row">
                <div className="col-20 col-md-10">
                    <Form
                        handleChange={this.handleChange}
                        handleSubmit={this.handleSubmit}
                        productDivisions={productDivisions}
                        getBrandList={this.getBrandList}
                        handleChangeImage={this.handleChangeImage}
                        handleReset={this.handleReset}
                        {...this.state}
                        brandLists={brandLists.brand_list_name}
                        formType={this.props.formType}
                        errors={this.props.error.card}
                    />
                </div>
                <div className="col-20 col-md-10 align-self-center">
                    <div className="d-flex justify-content-center my-4">
                        <BusinessCard
                            {...this.state}
                            brandLists={brandLists.brand_list_name}
                        />
                    </div>
                    <div className="d-flex justify-content-center">
                        <BusinessCardRear brands={brands} />
                    </div>
                </div>
            </div>
        )
    }
}

Index.propTypes = {
    productDivision: PropTypes.object.isRequired,
    getProductDivision: PropTypes.func.isRequired,
    getBrandList: PropTypes.func.isRequired,
    getBrand: PropTypes.func.isRequired,
    getCard: PropTypes.func.isRequired,
    createCard: PropTypes.func.isRequired
}

const mapStateToProps = state => ({
    productDivision: state.productDivision,
    brand: state.brand,
    card: state.card,
    error: state.error
})

const mapStateToActions = {
    getProductDivision,
    getBrandList,
    getBrand,
    getCard,
    createCard
}

export default connect(
    mapStateToProps,
    mapStateToActions
)(Index)
