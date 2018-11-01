import React, { Component } from 'react'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'

import { BusinessCard, FloatAction } from '../components/Shared'
import { getCard } from '../actions/cardActions'

class Home extends Component {
    componentDidMount() {
        // get the list of the cards
        this.props.getCard()
    }

    render() {
        const { results } = this.props.card
        const cards = results.map(result => {
            return (
                <BusinessCard
                    key={result.id}
                    id={result.id}
                    picture={result.picture}
                    name={result.name}
                    position={result.position}
                    location={result.location}
                    email={result.email}
                    cellphone={result.cellphone}
                    telephone={result.telephone}
                    skype={result.skype}
                    brandLists={result.brand_list}
                    hasControl={true}
                />
            )
        })
        return (
            <div className="main-container">
                <div className="card__wrapper">{cards}</div>
                <FloatAction />
            </div>
        )
    }
}

Home.propTypes = {
    getCard: PropTypes.func.isRequired
}

const mapStateToProps = state => ({
    card: state.card
})

const mapStateToActions = {
    getCard
}

export default connect(
    mapStateToProps,
    mapStateToActions
)(Home)
