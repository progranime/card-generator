import React, { Fragment } from 'react'
import classnames from 'classnames'
import _ from 'lodash'
import { NavLink } from 'react-router-dom'
import toggleClass from '../../scripts/toggleClass'

const authorizePrimary = ['admin']
const authorizeSecondary = ['printer']

export default function List({ toggleMenu, logoutUser, auth }) {
    return (
        <ul
            className={classnames('header__lists', {
                'd-none': _.isEmpty(auth.user)
            })}
        >
            <li
                className="header__dropdown-control"
                onClick={() =>
                    toggleClass.toggle({
                        target: '.header__dropdown',
                        classes: 'active'
                    })
                }
            >
                Hi {auth.user.name}
                <span className="caret caret--down" />
                <img
                    src={`${window.location.origin}/images/icons/account.png`}
                    alt="account logo"
                />
                <ul className="header__dropdown">
                    <li>
                        <NavLink
                            exact
                            activeClassName="active"
                            to="/"
                            onClick={toggleMenu}
                        >
                            Home
                        </NavLink>
                    </li>
                    {authorizePrimary.indexOf(auth.user.role) !== -1 && (
                        <Fragment>
                            <li>
                                <NavLink
                                    exact
                                    to="/admin/dashboard"
                                    onClick={toggleMenu}
                                >
                                    Dashboard
                                </NavLink>
                            </li>
                            <li>
                                <NavLink
                                    exact
                                    to="/admin/manage-user"
                                    onClick={toggleMenu}
                                >
                                    Manage User
                                </NavLink>
                            </li>
                        </Fragment>
                    )}

                    {authorizeSecondary.indexOf(auth.user.role) !== -1 && (
                        <li>
                            <NavLink
                                exact
                                to="/admin/dashboard"
                                onClick={toggleMenu}
                            >
                                Dashboard
                            </NavLink>
                        </li>
                    )}

                    <li>
                        <NavLink exact to="/notification" onClick={toggleMenu}>
                            Notification
                        </NavLink>
                    </li>

                    <li className="logout" onClick={logoutUser}>
                        <a href="/login">Logout</a>
                    </li>
                </ul>
            </li>
        </ul>
    )
}
