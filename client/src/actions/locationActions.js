import axios from 'axios'

import { GET_ALL_LOCATION } from './types'

export const getAllLocation = payload => dispatch => {
    const axiosOptions = {
        method: 'get',
        url: `/api/location/`
    }

    axios(axiosOptions).then(res => {
        dispatch({
            type: GET_ALL_LOCATION,
            payload: {
                results: res.data
            }
        })
    })
}
