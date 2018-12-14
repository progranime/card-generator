import React, { Component, Fragment } from 'react'
import PropTypes from 'prop-types'
import classnames from 'classnames'
import { FaTimes } from 'react-icons/fa'

class Index extends Component {
    constructor(props) {
        super(props)
        this.closeNotification = this.closeNotification.bind(this)
    }

    closeNotification() {
        document.querySelector('.flash-message').classList.remove('active')
        clearInterval(this.interval)
    }

    componentWillReceiveProps(nextProps) {
        const self = this.props
        if (nextProps.show === true) {
            this.interval = setTimeout(() => {
                self.handleState({
                    show: false
                })
            }, self.duration)
        }
    }

    componentWillUnmount() {
        clearInterval(this.interval)
    }

    render() {
        const { classes, message, show } = this.props

        return (
            <Fragment>
                <div
                    className={classnames(`flash-message ${classes}`, {
                        active: show
                    })}
                >
                    <FaTimes
                        onClick={this.closeNotification}
                        className="icon float-right"
                    />
                    <p className="flash-message__heading">Notification</p>
                    <p className="flash-message__message">{message}</p>
                </div>
            </Fragment>
        )
    }
}

Index.propTypes = {
    message: PropTypes.string.isRequired
}

Index.defaultProps = {
    classes: 'flash-message--success',
    message: 'Notification ...',
    show: false,
    duration: 1500
}

export default Index
