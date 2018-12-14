import axios from 'axios'

import { GET_ALL_BRAND } from './types'

export const getAllBrand = payload => dispatch => {
    const axiosOptions = {
        method: 'get',
        url: '/api/brand'
    }

    axios(axiosOptions).then(res => {
        dispatch({
            type: GET_ALL_BRAND,
            payload: {
                brands: res.data
            }
        })
    })
}
