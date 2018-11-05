import React from 'react'
import PropTypes from 'prop-types'

const ImageHolder = ({ picture, name, position, location }) => {
    return (
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
    )
}

ImageHolder.defaultProps = {
    picture: '',
    name: '',
    position: '',
    location: ''
}

ImageHolder.propTypes = {
    picture: PropTypes.string,
    name: PropTypes.string,
    position: PropTypes.string,
    location: PropTypes.string
}

export default ImageHolder
