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
                    <li>
                        <FaEnvelope className="icon" />
                        {email}
                    </li>
                ) : (
                    <Fragment />
                )}
                {!_.isEmpty(cellphone) ? (
                    <li>
                        <FaMobileAlt className="icon" />
                        {cellphone}
                    </li>
                ) : (
                    <Fragment />
                )}
                {!_.isEmpty(telephone) ? (
                    <li>
                        <FaPhone className="icon" />
                        {telephone}
                    </li>
                ) : (
                    <Fragment />
                )}
                {!_.isEmpty(skype) ? (
                    <li>
                        <FaEnvelope className="icon" />
                        {skype}
                    </li>
                ) : (
                    <Fragment />
                )}
            </ul>
        </div>
    )
}

Details.defaultProps = {
    email: '',
    cellphone: '',
    telephone: '',
    skype: ''
}

Details.propTypes = {
    email: PropTypes.string,
    cellphone: PropTypes.string,
    telephone: PropTypes.string,
    skype: PropTypes.string
}

export default Details
