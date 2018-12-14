import React, { Component, Fragment } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import {
    FaSave,
    FaEdit,
    FaEnvelope,
    FaTrash,
    FaArrowLeft
} from 'react-icons/fa'

import {
    getAllProductDivision,
    getBrandList
} from '../../../actions/productDivisionActions'
import {
    getSingleCard,
    requestApproval,
    deleteCard
} from '../../../actions/cardActions'
import { getAllBrand } from '../../../actions/brandActions'
import Spinner from '../../../components/Spinner'
import BusinessCardFront from '../../../components/BusinessCard/Front'
import BusinessCardRear from '../../../components/BusinessCard/Rear'
import FloatAction from '../../../components/FloatAction'
import FloatActionWrapper from '../../../components/FloatAction/Wrapper'
import BusinessCardFrontWrapper from '../../../components/BusinessCard/Front/Wrapper'
import BusinessCardRearWrapper from '../../../components/BusinessCard/Rear/Wrapper'
import FlashMessage from '../../../components/FlashMessage'
import ModalConfirmation from '../../../components/Modal/Confirmation'
import pdfCreator from '../../../scripts/pdfCreator'

class Index extends Component {
    constructor(props) {
        super(props)
        this.state = {
            hasLoad: false,
            requestApprovalLoading: false,
            show: false,
            showConfirmationModal: false,
            hasEmailSent: false
        }
    }

    savePdf = () => {
        const { card } = this.props

        pdfCreator.save({
            target: '#pdfBusinessCardViewer',
            filename: `${card.result.name}-Business_Card.pdf`
        })
    }

    requestApproval = () => {
        const { card, match } = this.props

        // send email to get an approval
        this.props.requestApproval({
            id: match.params.id,
            createBy: card.result.create_by
        })

        this.setState(prevState => {
            return {
                requestApprovalLoading: !prevState.requestApprovalLoading
            }
        })
    }

    handleState = state => {
        this.setState(state)
    }

    deleteCard = () => {
        const { match, history } = this.props
        this.props.deleteCard({ id: match.params.id }, history)
    }

    handleToggleModal = data => {
        if (data.type === 'confirmation') {
            this.setState(prevState => {
                return {
                    showConfirmationModal: !prevState.showConfirmationModal
                }
            })
        }

        if (data.confirm) {
            this.deleteCard()
        }
    }

    componentDidMount() {
        const { match } = this.props
        // load the all brand
        this.props.getAllBrand()

        this.props.getSingleCard({
            id: match.params.id
        })
    }

    componentWillReceiveProps(nextProps) {
        const { hasLoad, hasEmailSent } = this.state
        const { card } = nextProps
        const cardData = card.result

        if (Object.keys(cardData).length !== 0 && !hasLoad) {
            this.props.getBrandList({
                id: cardData.product_division_id
            })

            this.setState({ hasLoad: !hasLoad })
        }

        if (card.hasEmailSent && !hasEmailSent) {
            this.setState({
                hasEmailSent: !hasEmailSent,
                requestApprovalLoading: !this.state.requestApprovalLoading,
                show: !this.state.show
            })
        }
    }

    render() {
        const { card, brand, productDivision, match } = this.props
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
                                    locationName={cardData.location_name}
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
                    <FloatAction handleClick={this.requestApproval}>
                        {!this.state.requestApprovalLoading ? (
                            <FaEnvelope />
                        ) : (
                            <Spinner
                                loading={this.state.requestApprovalLoading}
                                type={2}
                                message=""
                                classes="spinner__item--sm"
                            />
                        )}
                    </FloatAction>

                    <FloatAction to={`/card/${match.params.id}/edit`}>
                        <FaEdit />
                    </FloatAction>

                    <FloatAction handleClick={this.savePdf}>
                        <FaSave />
                    </FloatAction>

                    <FloatAction
                        handleClick={this.handleToggleModal.bind(this, {
                            type: 'confirmation'
                        })}
                    >
                        <FaTrash />
                    </FloatAction>
                </FloatActionWrapper>

                <FloatActionWrapper classes="float-action__wrapper--left">
                    <FloatAction to="/" classes="float-action--secondary">
                        <FaArrowLeft />
                    </FloatAction>
                </FloatActionWrapper>

                <ModalConfirmation
                    isOpen={this.state.showConfirmationModal}
                    handleToggleModal={this.handleToggleModal}
                />

                {card && (
                    <FlashMessage
                        message={card.message}
                        show={this.state.show}
                        handleState={this.handleState}
                        duration={3000}
                    />
                )}
            </div>
        )
    }
}

Index.propTypes = {
    card: PropTypes.object.isRequired,
    getSingleCard: PropTypes.func.isRequired,
    requestApproval: PropTypes.func.isRequired,
    deleteCard: PropTypes.func.isRequired,
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
    requestApproval,
    deleteCard,
    getAllProductDivision,
    getBrandList,
    getAllBrand
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Index)
