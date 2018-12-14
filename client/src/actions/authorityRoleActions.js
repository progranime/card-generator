import axios from 'axios'

import { GET_ALL_AUTHORITY_ROLE } from './types'

export const getAllAuthorityRole = payload => dispatch => {
    const axiosOptions = {
        method: 'get',
        url: '/api/authorityRole/'
    }

    axios(axiosOptions).then(res => {
        dispatch({
            type: GET_ALL_AUTHORITY_ROLE,
            payload: {
                results: res.data
            }
        })
    })
}
