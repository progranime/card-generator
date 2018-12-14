import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'

import { getAllUserNotification } from '../../actions/notificationActions'
import { updateNotificationIsRead } from '../../actions/notificationActions'
import Notification from '../../components/Notification'
import NotificationWrapper from '../../components/Notification/Wrapper'

class Index extends Component {
    componentDidMount() {
        getAllUserNotification()
    }

    handleReadNotification = id => {
        updateNotificationIsRead({ id, isRead: 1 })
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

        return <NotificationWrapper>{notifications}</NotificationWrapper>
    }

    render() {
        return (
            <div className="main-container">
                <div className="row">
                    <div className="col-20 ">
                        <h4>Notifications</h4>
                        <hr />
                        {this.renderNotification()}
                    </div>
                </div>
            </div>
        )
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
