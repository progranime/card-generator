import React, { Component } from 'react'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'
import { logoutUser } from '../../actions/authActions'
// load components
import Menu from './Menu'
import Overlay from './Overlay'
import Logo from './Logo'
import List from './List'

class index extends Component {
    constructor() {
        super()

        this.state = {
            menuActive: false
        }

        this.toggleMenu = this.toggleMenu.bind(this)
    }

    toggleMenu() {
        this.setState({
            menuActive: !this.state.menuActive
        })
    }

    render() {
        return (
            <header className="header">
                <div className="header__container">
                    <Menu
                        toggleMenu={this.toggleMenu}
                        menuActive={this.state.menuActive}
                        auth={this.props.auth}
                    />
                    <Overlay toggleMenu={this.toggleMenu} />
                    <Logo />
                    <List
                        toggleMenu={this.toggleMenu}
                        logoutUser={this.props.logoutUser}
                        auth={this.props.auth}
                    />
                </div>
            </header>
        )
    }
}

index.propTypes = {
    logoutUser: PropTypes.func.isRequired
}

const mapStateToProps = state => ({
    auth: state.auth
})

const mapActionsToProps = {
    logoutUser
}

export default connect(
    mapStateToProps,
    mapActionsToProps
)(index)
