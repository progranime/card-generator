import React, { Fragment } from 'react'

const Index = ({ loading, message, styling }) => {
    return (
        <Fragment>
            {loading && (
                <div className="text-center" style={styling}>
                    <img
                        src={`${
                            window.location.origin
                        }/images/icons/spinner.gif`}
                        style={{ width: '50px' }}
                        alt="loading"
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
    styling: {}
}

export default Index
