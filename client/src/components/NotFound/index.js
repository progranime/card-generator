import React from 'react'
import { Link } from 'react-router-dom'

const Index = () => {
    return (
        <div className="main-container">
            <div className="not-found-container">
                <h1 className="heading">404</h1>
                <h3 className="subheading">Page not found</h3>
                <p className="description">
                    The page you are looking for was moved, removed, renamed or
                    might never existed!
                </p>
                <Link to="/" className="btn btn-block btn--standard">
                    Go Home Page
                </Link>
            </div>
        </div>
    )
}

export default Index
