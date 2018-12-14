import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'

import { getAllStatus } from '../../../../actions/statusActions'
import {
    getSingleCard,
    updateCardStatus
} from '../../../../actions/cardActions'
import { getBrandList } from '../../../../actions/productDivisionActions'
import { getAllBrand } from '../../../../actions/brandActions'
import FormSelect from '../../../../components/Form/Select'
import BusinessCardFront from '../../../../components/BusinessCard/Front'
import BusinessCardRear from '../../../../components/BusinessCard/Rear'

class Index extends Component {
    constructor(props) {
        super(props)

        this.state = {
            statusId: '',
            hasLoad: false
        }
    }

    handleChange = e => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    handleSubmit = e => {
        e.preventDefault()
        const { card } = this.props

        this.props.updateCardStatus(
            {
                id: card.result.id,
                statusId: this.state.statusId,
                createBy: card.result.create_by
            },
            this.props.history
        )
    }

    componentDidMount() {
        const { match } = this.props

        // get card data
        this.props.getSingleCard({ id: match.params.id })
        // get all status
        this.props.getAllStatus()
        // load the all brand
        this.props.getAllBrand()
    }

    componentWillReceiveProps(nextProps) {
        const { card } = nextProps
        const { hasLoad } = this.state
        const cardData = card.result

        // to update the status select/dropdown
        this.setState({
            statusId: cardData.status_id
        })

        if (Object.keys(cardData).length !== 0 && !hasLoad) {
            this.props.getBrandList({
                id: cardData.product_division_id
            })

            this.setState({ hasLoad: !hasLoad })
        }
    }

    render() {
        const { card, status, productDivision, brand } = this.props
        const cardData = card.result

        return (
            <div className="row">
                <div className="col-20 col-sm-10">
                    <form onSubmit={this.handleSubmit}>
                        <FormSelect
                            label="Status"
                            name="statusId"
                            id="statusId"
                            handleChange={this.handleChange}
                            value={this.state.statusId}
                            classes="form-control text-capitalize"
                        >
                            {status.results.map(result => (
                                <option key={result.id} value={result.id}>
                                    {result.name}
                                </option>
                            ))}
                        </FormSelect>

                        <div className="form-group text-right">
                            <Link
                                to="/admin/dashboard"
                                className="btn btn--secondary mr-2"
                            >
                                Cancel
                            </Link>

                            <input
                                type="submit"
                                className="btn btn-primary"
                                value="Submit"
                            />
                        </div>
                    </form>
                </div>
                <div className="col-20 col-sm-10">
                    <div className="d-flex justify-content-center my-4">
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
    getAllStatus: PropTypes.func.isRequired,
    getSingleCard: PropTypes.func.isRequired,
    updateCardStatus: PropTypes.func.isRequired,
    getBrandList: PropTypes.func.isRequired,
    getAllBrand: PropTypes.func.isRequired,
    card: PropTypes.object.isRequired,
    status: PropTypes.object.isRequired,
    productDivision: PropTypes.object.isRequired,
    brand: PropTypes.object.isRequired
}

const mapStateToProps = state => ({
    card: state.card,
    status: state.status,
    productDivision: state.productDivision,
    brand: state.brand
})

const mapDispatchToProps = {
    getAllStatus,
    getSingleCard,
    updateCardStatus,
    getBrandList,
    getAllBrand
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Index)
