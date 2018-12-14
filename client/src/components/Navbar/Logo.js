import React from 'react'

export default () => {
    return (
        <div className="header__logo">
            <a href="/">
                <img
                    src={`${
                        window.location.origin
                    }/images/logos/music-tribe.png`}
                    alt="App logo"
                />
            </a>
        </div>
    )
}
