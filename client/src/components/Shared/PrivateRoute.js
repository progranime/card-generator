import React from 'react'
import { Route, Redirect } from 'react-router-dom'
import store from '../../store'
import _ from 'lodash'

// to access the state of the store
const { auth } = store.getState()

const PrivateRoute = ({ component: Component, ...rest }) => (
    <Route
        {...rest}
        render={props =>
            !_.isEmpty(auth.user) ? (
                <Component {...props} />
            ) : (
                <Redirect to="/login" />
            )
        }
    />
)

export default PrivateRoute
