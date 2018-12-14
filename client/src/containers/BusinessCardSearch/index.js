import React, { Component } from 'react'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'
import _ from 'lodash'
import { FaPlus } from 'react-icons/fa'

import Spinner from '../../components/Spinner'
import FormInput from '../../components/Form/Input'
import FloatAction from '../../components/FloatAction'
import FloatActionWrapper from '../../components/FloatAction/Wrapper'
import Message from '../../components/Message'
import FlashMessage from '../../components/FlashMessage'
import BusinessCardFront from '../../components/BusinessCard/Front'
import BusinessCardFrontWrapper from '../../components/BusinessCard/Front/Wrapper'
import BusinessCardFrontModal from '../../components/BusinessCard/Front/ModalDetails'
import {
    getAllCard,
    getSingleCard,
    updateCardMessage
} from '../../actions/cardActions'

class Index extends Component {
    constructor(props) {
        super(props)
        this.state = {
            loading: false,
            show: false,
            searchQuery: '',
            showModalDetails: false
        }
    }

    handleState = state => {
        this.setState(state)
    }

    handleSearch = e => {
        e.preventDefault()
        this.props.getAllCard({
            searchQuery: this.state.searchQuery
        })

        this.setState(state => {
            return {
                loading: !state.loading
            }
        })
    }

    handleChange = e => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    handleToggleModal = data => {
        if (data.type === 'detail') {
            if (data.id !== undefined) {
                this.props.getSingleCard({ id: data.id })
            }

            this.setState({
                showModalDetails: !this.state.showModalDetails
            })
        }
    }

    renderBusinessCard() {
        const { card } = this.props

        return card.results.map(result => (
            <BusinessCardFront
                key={result.id}
                id={result.id}
                picture={result.picture}
                name={result.name}
                position={result.position}
                locationName={result.location_name}
                email={result.email}
                cellphone={result.cellphone}
                telephone={result.telephone}
                skype={result.skype}
                brandLists={result.brand_list}
                hasControl={true}
                hasOverflow={true}
                handleToggleModal={this.handleToggleModal}
                status={result.status_name}
            />
        ))
    }

    // lifecycle hooks
    componentDidMount() {
        this.setState({
            loading: true
        })
        // get the list of the cards
        this.props.getAllCard()
    }

    componentWillReceiveProps(nextProps) {
        const { card } = nextProps

        if (card.message !== '') {
            this.setState({
                show: true
            })
        }

        this.setState({
            loading: card.loading
        })
    }

    componentWillUnmount() {
        this.props.updateCardMessage({ message: '' })
    }

    render() {
        const { card } = this.props

        return (
            <div className="main-container">
                <form className="row" onSubmit={this.handleSearch}>
                    <div className="col-sm-10 offset-sm-5">
                        <h4 className="text-center">Business Card Generator</h4>
                        <FormInput
                            type="search"
                            name="searchQuery"
                            className="form-control"
                            placeholder="Search business card ..."
                            value={this.state.searchQuery}
                            handleChange={this.handleChange}
                        />
                    </div>
                </form>

                <Spinner loading={this.state.loading} />

                {!_.isEmpty(card.results) ? (
                    <BusinessCardFrontWrapper>
                        {this.renderBusinessCard()}
                    </BusinessCardFrontWrapper>
                ) : (
                    <Message message="No results have been found!" />
                )}

                <FloatActionWrapper>
                    <FloatAction to="/card/create">
                        <FaPlus className="plus" />
                    </FloatAction>
                </FloatActionWrapper>

                {card && (
                    <FlashMessage
                        message={card.message}
                        show={this.state.show}
                        handleState={this.handleState}
                        duration={3000}
                    />
                )}

                <BusinessCardFrontModal
                    isOpen={this.state.showModalDetails}
                    handleToggleModal={this.handleToggleModal}
                    result={card.result}
                />
            </div>
        )
    }
}

Index.propTypes = {
    getAllCard: PropTypes.func.isRequired,
    getSingleCard: PropTypes.func.isRequired,
    updateCardMessage: PropTypes.func.isRequired
}

const mapStateToProps = state => ({
    card: state.card
})

const mapDispatchToProps = {
    getAllCard,
    getSingleCard,
    updateCardMessage
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Index)
