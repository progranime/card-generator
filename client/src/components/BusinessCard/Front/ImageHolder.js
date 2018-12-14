import React from 'react'
import PropTypes from 'prop-types'

const ImageHolder = ({ picture, name, position, locationName }) => {
    let pictureUrl = picture
        ? picture
        : `${window.location.origin}/images/assets/default-avatar.jpg`

    return (
        <div className="card__image-holder">
            <div
                className="default-pic"
                style={{ backgroundImage: `url(${pictureUrl})` }}
            />
            <p className="title">{name}</p>
            <p className="subtitle">
                {position} {locationName ? `, ${locationName}` : ''}
            </p>
        </div>
    )
}

ImageHolder.propTypes = {
    picture: PropTypes.string,
    name: PropTypes.string,
    position: PropTypes.string,
    locationName: PropTypes.string
}

export default ImageHolder
