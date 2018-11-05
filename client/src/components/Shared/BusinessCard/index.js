import React from 'react'
import _ from 'lodash'

import Controls from './Controls'
import ImageHolder from './ImageHolder'
import Details from './Details'
import Brands from './Brands'

const Index = ({
    id,
    picture,
    name,
    position,
    location,
    email,
    cellphone,
    telephone,
    skype,
    brandLists,
    hasControl
}) => {
    return (
        <div className="card">
            <div className="card__container">
                <Controls hasControl={hasControl} id={id} />

                <ImageHolder
                    picture={picture}
                    name={name}
                    position={position}
                    location={location}
                />

                <Details
                    email={email}
                    cellphone={cellphone}
                    telephone={telephone}
                    skype={skype}
                />

                <Brands brandLists={brandLists} />
            </div>
        </div>
    )
}

export default Index
