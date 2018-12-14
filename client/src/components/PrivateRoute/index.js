import React from 'react'
import { Route, Redirect } from 'react-router-dom'
import store from '../../store'
import _ from 'lodash'

import NotFound from '../NotFound'
// to access the state of the store
const { auth } = store.getState()

const PrivateRoute = ({ component: Component, ...rest }) => (
    <Route
        {...rest}
        render={props =>
            !_.isEmpty(auth.user) ? (
                rest.authorize.indexOf(auth.user.role) !== -1 ? (
                    <Component {...props} />
                ) : (
                    <NotFound />
                )
            ) : (
                <Redirect to="/login" />
            )
        }
    />
)

PrivateRoute.defaultProps = {
    authorize: ['normal', 'admin', 'printer']
}

export default PrivateRoute
