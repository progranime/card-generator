import axios from 'axios'
import store from '../store'

import {
    GET_ALL_USER_NOTIFICATION,
    CREATE_NOTIFICATION,
    UPDATE_NOTIFICATION_IS_READ
} from './types'

export const getAllUserNotification = () => dispatch => {
    const { auth } = store.getState()

    const axiosOptions = {
        method: 'get',
        url: `/api/notification/email/${auth.user.id}`
    }

    axios(axiosOptions).then(res => {
        dispatch({
            type: GET_ALL_USER_NOTIFICATION,
            payload: {
                results: res.data
            }
        })
    })
}

export const createNotification = payload => {
    const axiosOptions = {
        method: 'post',
        url: `/api/notification/`,
        data: payload
    }

    // only create notification if receiver and sender of the notification is not the same
    if (payload.senderEmail !== payload.recipientEmail) {
        axios(axiosOptions).then(res => {
            store.dispatch({
                type: CREATE_NOTIFICATION,
                payload: {}
            })
        })
    }
}

export const updateNotificationIsRead = payload => dispatch => {
    const axiosOptions = {
        method: 'put',
        url: `/api/notification/`,
        data: payload
    }

    // change the is_read property to 1 to annotate that the notification is read
    let newNotification = store.getState().notification.results.map(result => {
        if (result.id === payload.id) {
            return {
                ...result,
                is_read: 1
            }
        }
        return result
    })

    axios(axiosOptions).then(res => {
        dispatch({
            type: UPDATE_NOTIFICATION_IS_READ,
            payload: {
                results: newNotification
            }
        })
    })
}
