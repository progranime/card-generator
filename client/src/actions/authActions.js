import axios from 'axios'
import _ from 'lodash'

import config from '../config/keys'
import { saveState } from '../store/localStorage'

// login user
export const login = payload => dispatch => {
    const axiosOptions = {
        method: 'post',
        url: 'http://10.124.8.92:8080/dbusinesscard/rest/user/card',
        data: { name: payload.email, pwd: payload.password },
        headers: {
            Accept: 'application/json',
            'Content-Type': 'application/json',
            'X-DreamFactory-Application-Name': 'mg-dbc-app'
        }
    }

    axios(axiosOptions)
        .then(res => {
            console.log(res)
            // check if user exist
            if (!_.isEmpty(res.data.id)) {
                // create session for the user using express
                // send the user info to backend
                let userData = {
                    uniqueId: res.data.uniqueId,
                    id: res.data.id,
                    name: res.data.name,
                    jobTitle: res.data.jobTitle,
                    location: res.data.location
                }

                // add user data to localStorage
                saveState(config.sessionName, userData)

                // redirect the user to home page
                window.location.href = '/'
            } else {
                // redirect the user to login
                dispatch({
                    type: 'GET_LOGIN_ERROR',
                    payload: {
                        login: `User does not exists!`
                    }
                })
            }
        })
        .catch(err => console.log(err))
}

// Logout user
export const logoutUser = () => dispatch => {
    // remove the localStorage
    localStorage.removeItem(config.sessionName)
    // redirect the user to login page
    window.location.href = '/login'
}
