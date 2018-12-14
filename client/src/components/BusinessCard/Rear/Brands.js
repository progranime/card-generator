import React from 'react'
import PropTypes from 'prop-types'

const Details = ({ brands }) => {
    return (
        <div className="card__brands">
            <ul className="list list--style-none list--inline">
                {brands.map(brand => {
                    return (
                        <li key={brand.id}>
                            <img
                                src={`${window.location.origin}/images/logos/${
                                    brand.name
                                }.png`}
                                alt=""
                            />
                        </li>
                    )
                })}
            </ul>
        </div>
    )
}

Details.propTypes = {
    brands: PropTypes.array
}

export default Details
