import React, { Fragment } from 'react'
import _ from 'lodash'

const Index = ({ brands }) => {
    return (
        <Fragment>
            {!_.isEmpty(brands) ? (
                <div className="card card--rear">
                    <div className="card__container">
                        <div className="card__details">
                            <p className="title">Learn. Teach. Inspire.</p>
                        </div>
                        <div className="card__brands">
                            <ul className="list list--style-none list--inline">
                                {brands.map(brand => {
                                    return (
                                        <li key={brand.id}>
                                            <img
                                                src={`${
                                                    window.location.origin
                                                }/images/logos/${
                                                    brand.name
                                                }.png`}
                                                alt=""
                                            />
                                        </li>
                                    )
                                })}
                            </ul>
                        </div>
                    </div>
                </div>
            ) : (
                <Fragment />
            )}
        </Fragment>
    )
}

export default Index
