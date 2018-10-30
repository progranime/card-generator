import React from 'react'
import { Link } from 'react-router-dom'

export default () => {
    return (
        <div className="header__logo">
            <Link to="/">
                <img
                    src={`${
                        window.location.origin
                    }/images/logos/music-tribe.png`}
                    alt="App logo"
                />
            </Link>
        </div>
    )
}
