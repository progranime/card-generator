import React, { Fragment } from 'react'
import _ from 'lodash'

import Details from './Details'
import Brands from './Brands'
import Footer from './Footer'
import Outline from './Outline'
import Label from './Label'

const Index = ({ brands, hasOutline, hasLabel }) => {
    return (
        <Fragment>
            {!_.isEmpty(brands) ? (
                <div className="card card--rear">
                    <div className="card__container">
                        {hasLabel && <Label />}
                        <Details />
                        <Brands brands={brands} />
                        <Footer>
                            <a
                                href="http://www.musictribe.com/"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="link"
                            >
                                musictribe.com
                            </a>
                        </Footer>

                        {hasOutline && <Outline />}
                    </div>
                </div>
            ) : (
                <Fragment />
            )}
        </Fragment>
    )
}

Index.defaultProps = {
    brands: [],
    hasOutline: false
}

export default Index
