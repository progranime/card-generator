import React from 'react'
import classnames from 'classnames'
import _ from 'lodash'
import { NavLink } from 'react-router-dom'

export default function List({ toggleMenu, logoutUser, auth }) {
    return (
        <ul
            className={classnames('header__lists', {
                'd-none': _.isEmpty(auth.user)
            })}
        >
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
            <li>Hi {auth.user.name}</li>

            <li className="logout" onClick={logoutUser}>
                <a href="/login">Logout</a>
                <img
                    src={`${window.location.origin}/images/icons/account.png`}
                    alt="account logo"
                />
            </li>
        </ul>
    )
}
