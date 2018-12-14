import React from 'react'

const Ribbon = ({ name, classes }) => {
    return (
        <div className={`card__ribbon ${classes}`}>
            <p>{name}</p>
        </div>
    )
}

Ribbon.defaultProps = {
    classes: 'card__ribbon--danger'
}
export default Ribbon
