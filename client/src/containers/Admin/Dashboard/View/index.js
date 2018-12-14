import React, { Component, Fragment } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { FaSave, FaArrowLeft } from 'react-icons/fa'

import {
    getAllProductDivision,
    getBrandList
} from '../../../../actions/productDivisionActions'
import { getSingleCard } from '../../../../actions/cardActions'
import { getAllBrand } from '../../../../actions/brandActions'
import BusinessCardFront from '../../../../components/BusinessCard/Front'
import BusinessCardRear from '../../../../components/BusinessCard/Rear'
import FloatAction from '../../../../components/FloatAction'
import FloatActionWrapper from '../../../../components/FloatAction/Wrapper'
import BusinessCardFrontWrapper from '../../../../components/BusinessCard/Front/Wrapper'
import BusinessCardRearWrapper from '../../../../components/BusinessCard/Rear/Wrapper'
import pdfCreator from '../../../../scripts/pdfCreator'

class Index extends Component {
    savePdf = () => {
        const { card } = this.props

        pdfCreator.save({
            target: '#pdfBusinessCardViewer',
            filename: `${card.result.name}-Business_Card.pdf`
        })
    }

    componentDidMount() {
        const { match } = this.props

        // load the all brand
        this.props.getAllBrand()
        // get specific card
        this.props.getSingleCard({
            id: match.params.id
        })
    }

    componentWillReceiveProps(nextProps) {
        const { card } = nextProps
        const cardData = card.result

        if (Object.keys(cardData).length !== 0) {
            this.props.getBrandList({
                id: cardData.product_division_id
            })
        }
    }

    render() {
        const { card, brand, productDivision } = this.props
        const cardData = card.result

        return (
            <div className="pdf">
                <div className="pdf__container" id="pdfBusinessCardViewer">
                    {cardData && (
                        <Fragment>
                            <BusinessCardFrontWrapper hasOutline={true}>
                                <BusinessCardFront
                                    name={cardData.name}
                                    position={cardData.position}
                                    location={cardData.location}
                                    email={cardData.email}
                                    cellphone={cardData.cellphone}
                                    telephone={cardData.telephone}
                                    skype={cardData.skype}
                                    picture={cardData.picture}
                                    brandLists={
                                        productDivision.brandLists
                                            .brand_list_name
                                    }
                                    hasOutline={true}
                                />
                            </BusinessCardFrontWrapper>

                            <BusinessCardRearWrapper hasOutline={true}>
                                <BusinessCardRear
                                    brands={brand.brands}
                                    hasOutline={true}
                                />
                            </BusinessCardRearWrapper>
                        </Fragment>
                    )}
                </div>

                <FloatActionWrapper>
                    <FloatAction handleClick={this.savePdf}>
                        <FaSave />
                    </FloatAction>
                </FloatActionWrapper>

                <FloatActionWrapper classes="float-action__wrapper--left">
                    <FloatAction
                        to="/admin/dashboard"
                        classes="float-action--secondary"
                    >
                        <FaArrowLeft />
                    </FloatAction>
                </FloatActionWrapper>
            </div>
        )
    }
}

Index.propTypes = {
    card: PropTypes.object.isRequired,
    getSingleCard: PropTypes.func.isRequired,
    getAllProductDivision: PropTypes.func.isRequired,
    getBrandList: PropTypes.func.isRequired,
    getAllBrand: PropTypes.func.isRequired
}

const mapStateToProps = state => ({
    productDivision: state.productDivision,
    brand: state.brand,
    card: state.card
})

const mapDispatchToProps = {
    getSingleCard,
    getAllProductDivision,
    getBrandList,
    getAllBrand
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Index)
