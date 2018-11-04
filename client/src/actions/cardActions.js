import axios from 'axios'
import _ from 'lodash'

export const getCard = payload => dispatch => {
    let cardId = ''
    if (payload) {
        cardId = payload.id || ''
    }

    const axiosOptions = {
        method: 'get',
        url: `/api/card/${cardId}`
    }

    axios(axiosOptions).then(res => {
        dispatch({
            type: 'GET_CARD',
            payload: {
                results: res.data
            }
        })
    })
}

// create card
export const createCard = payload => dispatch => {
    console.log(payload)
    const formData = new FormData()

    Object.entries(payload).map(data => {
        formData.append(data[0], data[1])
    })

    const axiosOptions = {
        method: 'post',
        url: '/api/card',
        data: formData,
        headers: { 'content-Type': 'multipart/form-data' }
    }

    axios(axiosOptions).then(res => {
        console.log(res)

        /* if (_.isEmpty(res.data)) {
            dispatch({
                type: 'CREATE_CARD',
                payload: {}
            })
        }

        dispatch({
            type: 'GET_ERROR',
            payload: {
                errors: res.data
            }
        }) */
    })
}
