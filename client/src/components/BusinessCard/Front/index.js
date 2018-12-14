import React from 'react'
import classnames from 'classnames'

import Controls from './Controls'
import ImageHolder from './ImageHolder'
import Details from './Details'
import Brands from './Brands'
import Outline from './Outline'
import Ribbon from './Ribbon'
import Label from './Label'

const Index = ({
    id,
    picture,
    name,
    position,
    locationName,
    email,
    cellphone,
    telephone,
    skype,
    brandLists,
    hasControl,
    hasOutline,
    hasOverflow,
    hasLabel,
    handleToggleModal,
    status
}) => {
    let ribbonClass = ''
    if (status === 'pending') ribbonClass = 'card__ribbon--danger'
    else if (status === 'closed') ribbonClass = 'card__ribbon--success'
    else ribbonClass = 'card__ribbon--warning'

    return (
        <div
            className={classnames('card', {
                'card--overflow': hasOverflow
            })}
        >
            <div className="card__container">
                {hasLabel && <Label />}

                <Controls
                    id={id}
                    hasControl={hasControl}
                    handleToggleModal={handleToggleModal}
                />

                <ImageHolder
                    picture={picture}
                    name={name}
                    position={position}
                    locationName={locationName}
                />

                <Details
                    email={email}
                    cellphone={cellphone}
                    telephone={telephone}
                    skype={skype}
                />

                <Brands brandLists={brandLists} />

                {hasOutline && <Outline />}

                {status && <Ribbon name={status} classes={ribbonClass} />}
            </div>
        </div>
    )
}

Index.defaultProps = {
    hasControl: false,
    hasOutline: false,
    hasOverflow: false,
    hasLabel: false
}

export default Index
