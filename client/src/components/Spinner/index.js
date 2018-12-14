import React, { Fragment } from 'react'

const Index = ({ loading, message, styling, type, classes }) => {
    let spinnerPath =
        type === 1 ? `/images/icons/spinner.gif` : `/images/icons/spinner2.gif`
    return (
        <Fragment>
            {loading && (
                <div className="spinner" style={styling}>
                    <img
                        src={`${window.location.origin}${spinnerPath}`}
                        alt="loading"
                        className={`spinner__item ${classes}`}
                    />{' '}
                    {message}
                </div>
            )}
        </Fragment>
    )
}

Index.defaultProps = {
    loading: false,
    message: 'Loading ...',
    styling: {},
    type: 1,
    classes: ''
}

export default Index
