import axios from 'axios'
import _ from 'lodash'

import config from '../config/keys'
import { saveState } from '../store/localStorage'
import { GET_ERROR } from './types'

// login user
export const login = payload => dispatch => {
    const axiosOptions = {
        method: 'post',
        url: 'https://dreamfactory.music-group.com/rest/mg-dbc/rest/user/card',
        data: { name: payload.email, pwd: payload.password },
        headers: {
            Accept: 'application/json',
            'Content-Type': 'application/json',
            'X-DreamFactory-Application-Name': 'mg-dbc-app'
        }
    }

    axios(axiosOptions)
        .then(res => {
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
                isAdmin(userData)

                // redirect the user to home page
                window.location.href = '/'
            } else {
                // redirect the user to login
                dispatch({
                    type: GET_ERROR,
                    payload: {
                        errors: {
                            login: `User does not exists!`
                        }
                    }
                })
            }
        })
        .catch(err => console.log(err))
}

// Logout user
export const logoutUser = () => dispatch => {
    // remove the localStorage
    localStorage.clear()
    // redirect the user to login page
    window.location.href = '/login'
}

export const isAdmin = payload => {
    // check if the login user is admin or not
    const axiosOptions = {
        method: 'get',
        url: `/api/authority/${payload.id}/getByEmail`
    }

    axios(axiosOptions).then(res => {
        // if the role is undefined set it to normal as its default role
        try {
            payload.role = res.data[0].authority_role
        } catch (e) {
            payload.role = 'normal'
        }

        // add user data to localStorage
        saveState(config.sessionName, payload)
    })
}
