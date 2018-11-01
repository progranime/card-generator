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
    const axiosOptions = {
        method: 'post',
        url: '/api/card',
        data: payload
    }

    axios(axiosOptions).then(res => {
        if (!_.isEmpty(res.data.errors)) {
            dispatch({
                type: 'GET_ERROR',
                payload: {
                    errors: res.data.errors
                }
            })
        } else {
            dispatch({
                type: 'CREATE_CARD',
                payload: {}
            })
        }
    })
}
