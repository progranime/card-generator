import axios from 'axios'
import store from '../store'

import { createNotification } from './notificationActions'
import {
    GET_ALL_CARD,
    GET_SINGLE_CARD,
    CREATE_CARD,
    UPDATE_CARD,
    UPDATE_CARD_MESSAGE,
    UPDATE_CARD_STATUS,
    DELETE_CARD,
    REQUEST_APPROVAL
} from './types'

export const getAllCard = payload => dispatch => {
    const { auth } = store.getState()
    let url = '',
        searchQuery = ''

    try {
        searchQuery = payload.searchQuery || ''
    } catch (e) {
        // console.log(e)
    }

    url = `/api/card/?createBy=${auth.user.id}&searchQuery=${searchQuery}`

    const axiosOptions = {
        method: 'get',
        url: url
    }

    axios(axiosOptions).then(res => {
        dispatch({
            type: GET_ALL_CARD,
            payload: {
                results: res.data
            }
        })
    })
}

export const getSingleCard = payload => dispatch => {
    const id = payload.id

    const axiosOptions = {
        method: 'get',
        url: `/api/card/${id}`
    }

    axios(axiosOptions).then(res => {
        dispatch({
            type: GET_SINGLE_CARD,
            payload: {
                result: res.data
            }
        })
    })
}

export const createCard = (payload, history) => dispatch => {
    const { auth } = store.getState()
    const formData = new FormData()

    payload.createBy = auth.user.id

    Object.entries(payload).map(data => formData.append(data[0], data[1]))

    const axiosOptions = {
        method: 'post',
        url: '/api/card/',
        data: formData,
        headers: { 'content-Type': 'multipart/form-data' }
    }

    axios(axiosOptions).then(res => {
        dispatch({
            type: CREATE_CARD,
            payload: {
                message: 'Business Card Created Successfully ...'
            }
        })

        history.push('/')
    })
}

export const updateCard = (payload, history) => dispatch => {
    const formData = new FormData()
    const { auth } = store.getState()

    payload.updateBy = auth.user.id

    Object.entries(payload).map(data => formData.append(data[0], data[1]))

    const axiosOptions = {
        method: 'put',
        url: `/api/card/${payload.id}`,
        data: formData,
        headers: { 'content-Type': 'multipart/form-data' }
    }

    axios(axiosOptions).then(res => {
        dispatch({
            type: UPDATE_CARD,
            payload: {
                message: 'Business Card Updated Successfully  ...'
            }
        })

        history.push('/')
    })
}

export const updateCardMessage = payload => dispatch => {
    dispatch({
        type: UPDATE_CARD_MESSAGE,
        payload: {
            message: payload.message
        }
    })
}

export const updateCardStatus = (payload, history) => dispatch => {
    const { id } = payload
    const { auth } = store.getState()

    payload.updateBy = auth.user.id

    const axiosOptions = {
        method: 'put',
        url: `/api/card/${id}/update/status`,
        data: payload
    }

    axios(axiosOptions).then(res => {
        dispatch({
            type: UPDATE_CARD_STATUS,
            payload: {
                message: 'Business Card Status Updated Successfully ...'
            }
        })

        // add notification for updating the business card status
        createNotification({
            senderEmail: auth.user.id,
            recipientEmail: payload.createBy,
            link: `/card/${id}/view`,
            notificationTypeId: 1
        })

        history.push('/admin/dashboard')
    })
}

export const deleteCard = (payload, history, redirect = '/') => dispatch => {
    const { auth } = store.getState()

    payload.deleteBy = auth.user.id

    const axiosOptions = {
        method: 'delete',
        url: `/api/card/`,
        data: payload
    }

    axios(axiosOptions).then(res => {
        dispatch({
            type: DELETE_CARD,
            payload: {
                message: 'Business Card Deleted Successfully ...'
            }
        })

        history.push(redirect)
    })
}

export const requestApproval = payload => dispatch => {
    const { auth } = store.getState()

    const axiosOptions = {
        method: 'post',
        url: '/api/card/requestApproval',
        data: payload
    }

    axios(axiosOptions).then(res => {
        dispatch({
            type: REQUEST_APPROVAL,
            payload: {
                hasEmailSent: true,
                message: 'Email has been sent!'
            }
        })

        // add notification for asking for approval
        createNotification({
            senderEmail: auth.user.id,
            recipientEmail: payload.recipientEmail,
            link: `admin/dashboard/${payload.id}/edit`,
            notificationTypeId: 3
        })
    })
}
