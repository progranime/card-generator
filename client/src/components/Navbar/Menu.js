import React from 'react'
import classnames from 'classnames'
import _ from 'lodash'

export default function Menu({ menuActive, toggleMenu, auth }) {
    return (
        <div
            className={classnames('header__menu', {
                active: menuActive,
                'd-none': _.isEmpty(auth.user)
            })}
            onClick={toggleMenu}
        >
            <span />
            <span />
            <span />
        </div>
    )
}
