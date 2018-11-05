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

export const createCard = (payload, history) => dispatch => {
    const formData = new FormData()

    Object.entries(payload).map(data => formData.append(data[0], data[1]))

    const axiosOptions = {
        method: 'post',
        url: '/api/card',
        data: formData,
        headers: { 'content-Type': 'multipart/form-data' }
    }

    axios(axiosOptions).then(res => {
        console.log(res.data)
        if (res.data) {
            // if there is no error return to home page
            history.push('/')
        }
    })
}

export const updateCard = (payload, history) => dispatch => {
    console.log('update the card', payload)
    const formData = new FormData()

    Object.entries(payload).map(data => formData.append(data[0], data[1]))

    const axiosOptions = {
        method: 'put',
        url: `/api/card/${payload.id}`,
        data: formData,
        headers: { 'content-Type': 'multipart/form-data' }
    }

    axios(axiosOptions).then(res => {
        console.log(res.data)
        if (res.data) {
            // if there is no error return to home page
            history.push('/')
        }
    })
}
