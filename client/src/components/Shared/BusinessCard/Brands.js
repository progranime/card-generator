import React from 'react'
import PropTypes from 'prop-types'

const Brands = ({ brandLists }) => {
    return (
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
    )
}

Brands.defaultProps = {
    brandLists: []
}

Brands.propTypes = {
    brandLists: PropTypes.array
}

export default Brands
