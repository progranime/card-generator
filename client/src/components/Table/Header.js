import React from 'react'
import PropTypes from 'prop-types'

const Header = ({ columns }) => {
    return (
        <thead className="mg-table__header">
            <tr>
                {columns.map((column, index) => (
                    <th key={index}>{column}</th>
                ))}
            </tr>
        </thead>
    )
}

Header.propTypes = {
    columns: PropTypes.array.isRequired
}

export default Header
