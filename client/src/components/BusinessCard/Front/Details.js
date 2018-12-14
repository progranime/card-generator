import React, { Fragment } from 'react'
import PropTypes from 'prop-types'
import { FaEnvelope, FaMobileAlt, FaPhone } from 'react-icons/fa'
import _ from 'lodash'

const Details = ({ email, cellphone, telephone, skype }) => {
    return (
        <div className="card__details">
            <img
                src={`${window.location.origin}/images/logos/music-tribe.png`}
                alt=""
                className="logo"
            />
            <ul className="list list--style-none">
                {!_.isEmpty(email) ? (
                    <li className="list__item">
                        <FaEnvelope className="icon" />
                        <span className="detail">{email}</span>
                    </li>
                ) : (
                    <Fragment />
                )}
                {!_.isEmpty(cellphone) ? (
                    <li className="list__item">
                        <FaMobileAlt className="icon" />
                        <span className="detail">{cellphone}</span>
                    </li>
                ) : (
                    <Fragment />
                )}
                {!_.isEmpty(telephone) ? (
                    <li className="list__item">
                        <FaPhone className="icon" />
                        <span className="detail">{telephone}</span>
                    </li>
                ) : (
                    <Fragment />
                )}
                {!_.isEmpty(skype) ? (
                    <li className="list__item">
                        <FaEnvelope className="icon" />
                        <span className="detail">{skype}</span>
                    </li>
                ) : (
                    <Fragment />
                )}
            </ul>
        </div>
    )
}

Details.propTypes = {
    email: PropTypes.string,
    cellphone: PropTypes.string,
    telephone: PropTypes.string,
    skype: PropTypes.string
}

export default Details
