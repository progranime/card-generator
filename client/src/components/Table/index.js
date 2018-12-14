import React from 'react'

import Header from './Header'
import Body from './Body'

const Index = ({ columns, children }) => {
    return (
        <div className="table-responsive">
            <table className="table mg-table">
                <Header columns={columns} />
                <Body>{children}</Body>
            </table>
        </div>
    )
}

export default Index
