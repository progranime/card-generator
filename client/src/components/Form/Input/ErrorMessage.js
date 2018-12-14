import React, { Fragment } from 'react'
import classnames from 'classnames'

const ErrorMessage = ({ error }) => {
    return (
        <Fragment>
            {error && (
                <div
                    className={classnames('invalid-feedback', {
                        'd-block': error
                    })}
                >
                    <p>{error}</p>
                </div>
            )}
        </Fragment>
    )
}

export default ErrorMessage
