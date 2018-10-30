import React, { Fragment } from 'react'
import {
    FaEnvelope,
    FaMobileAlt,
    FaPhone,
    FaPen,
    FaInfo,
    FaEye
} from 'react-icons/fa'
import _ from 'lodash'
import classnames from 'classnames'
import { Link } from 'react-router-dom'

const Index = ({
    id,
    picture,
    name,
    position,
    location,
    email,
    cellphone,
    telephone,
    skype,
    brandLists,
    hasControl
}) => {
    return (
        <div className="card">
            <div className="card__container">
                <div
                    className={classnames('card__controls', {
                        'd-none': !hasControl
                    })}
                >
                    <Link to={`/card/${id}/edit`}>
                        <FaPen className="control" />
                    </Link>

                    <FaInfo className="control" />
                    <FaEye className="control" />
                </div>
                <div className="card__image-holder">
                    <img
                        src={
                            picture
                                ? picture
                                : `${
                                      window.location.origin
                                  }/images/assets/default-avatar.jpg`
                        }
                        alt=""
                        className="default-pic"
                    />
                    <p className="title">{name}</p>
                    <p className="subtitle">
                        {position} {location ? `, ${location}` : ''}
                    </p>
                </div>
                <div className="card__details">
                    <img
                        src={`${
                            window.location.origin
                        }/images/logos/music-tribe.png`}
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
                <div className="card__brands">
                    <ul className="list list--style-none list--inline">
                        {brandLists &&
                            brandLists.split(',').map((brandList, index) => {
                                return (
                                    <li key={index}>
                                        <img
                                            src={`${
                                                window.location.origin
                                            }/images/logos/${brandList}.png`}
                                            alt=""
                                        />
                                    </li>
                                )
                            })}
                    </ul>
                </div>
            </div>
        </div>
    )
}

Index.defaultProps = {
    hasControl: false
}

export default Index
