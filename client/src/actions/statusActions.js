import axios from 'axios'

import { GET_ALL_STATUS } from './types'

export const getAllStatus = payload => dispatch => {
    const axiosOptions = {
        method: 'get',
        url: '/api/status/'
    }

    axios(axiosOptions).then(res => {
        dispatch({
            type: GET_ALL_STATUS,
            payload: {
                results: res.data
            }
        })
    })
}
