import React, { Component, Fragment } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import _ from 'lodash'

import { getAllUserNotification } from '../../actions/notificationActions'
import { updateNotificationIsRead } from '../../actions/notificationActions'
import Notification from '../../components/Notification'
import NotificationWrapper from '../../components/Notification/Wrapper'
import Message from '../../components/Message'

class Index extends Component {
    componentDidMount() {
        this.props.getAllUserNotification()
    }

    handleReadNotification = id => {
        this.props.updateNotificationIsRead({ id, isRead: 1 })
    }

    renderNotification() {
        const { notification } = this.props

        let notifications = notification.results.map(notification => {
            let date = new Date(notification.create_date)
            let fullDate = `${date.getMonth()}-${date.getDate()}-${date.getFullYear()}`
            let fullTime = `${date.getHours()}:${date.getMinutes()}`

            return (
                <Notification
                    key={notification.id}
                    id={notification.id}
                    template={notification.template}
                    senderEmail={notification.sender_email}
                    link={notification.link}
                    isRead={notification.is_read}
                    fullDate={fullDate}
                    fullTime={fullTime}
                    handleReadNotification={this.handleReadNotification}
                />
            )
        })

        return !_.isEmpty(notification.results) ? (
            <Fragment>
                <h4>Notifications</h4>
                <hr />
                <NotificationWrapper>{notifications}</NotificationWrapper>
            </Fragment>
        ) : (
            <Message message="No Notifications Yet!" />
        )
    }

    render() {
        return <div className="main-container">{this.renderNotification()}</div>
    }
}

Index.propTypes = {
    getAllUserNotification: PropTypes.func.isRequired,
    updateNotificationIsRead: PropTypes.func.isRequired
}

const mapStateToProps = state => ({
    notification: state.notification
})

const mapDispatchToProps = {
    getAllUserNotification,
    updateNotificationIsRead
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Index)
