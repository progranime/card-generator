import axios from 'axios'

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
        url: '/api/card/store',
        data: payload
    }

    axios(axiosOptions).then(res => {
        dispatch({
            type: 'CREATE_CARD',
            payload: {}
        })
    })
}
