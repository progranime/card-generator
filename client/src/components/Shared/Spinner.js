import React, { Fragment } from 'react'

const Spinner = ({ loading }) => {
    return (
        <Fragment>
            {loading && (
                <div className="text-center">
                    <img
                        src="images/icons/spinner.gif"
                        style={{ width: '50px' }}
                        alt="loading"
                    />{' '}
                    Loading ...
                </div>
            )}
        </Fragment>
    )
}

export default Spinner
