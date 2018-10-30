import axios from 'axios'

export const getBrand = payload => dispatch => {
    const axiosOptions = {
        method: 'get',
        url: '/api/brand'
    }

    axios(axiosOptions).then(res => {
        dispatch({
            type: 'GET_BRAND',
            payload: {
                brands: res.data
            }
        })
    })
}
