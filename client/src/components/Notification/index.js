import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'
import classnames from 'classnames'

const Index = ({
    id,
    template,
    senderEmail,
    link,
    isRead,
    fullDate,
    fullTime,
    handleReadNotification
}) => {
    let templateStr = template
    templateStr = template.replace('$sender_email', senderEmail)
    return (
        <li
            className={classnames('notification__item', {
                active: !isRead
            })}
        >
            <Link
                to={link}
                target="_blank"
                className="notification__item-link"
                onClick={handleReadNotification.bind(this, id)}
            />
            <div className="notification__thumbnail">
                <img
                    src={`${
                        window.location.origin
                    }/images/assets/default-avatar.jpg`}
                    alt=""
                />
            </div>

            <div className="notification__details">
                <p>{templateStr}</p>
                <p>{`${fullTime} ${fullDate}`}</p>
            </div>
        </li>
    )
}

Index.defaultProps = {
    link: '#',
    isRead: 0
}

Index.propTypes = {
    id: PropTypes.number,
    template: PropTypes.string.isRequired,
    senderEmail: PropTypes.string,
    link: PropTypes.string,
    isRead: PropTypes.number,
    fullDate: PropTypes.string,
    fullTime: PropTypes.string,
    handleReadNotification: PropTypes.func
}

export default Index
