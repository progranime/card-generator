import axios from 'axios'

import { GET_ALL_PRODUCT_DIVISION, GET_BRAND_LIST } from './types'

export const getAllProductDivision = payload => dispatch => {
    const axiosOptions = {
        method: 'get',
        url: '/api/productDivision'
    }

    axios(axiosOptions).then(res => {
        dispatch({
            type: GET_ALL_PRODUCT_DIVISION,
            payload: {
                productDivisions: res.data
            }
        })
    })
}

export const getBrandList = payload => dispatch => {
    const { id } = payload

    const axiosOptions = {
        method: 'get',
        url: `/api/productDivision/getBrandList/${id}`
    }

    axios(axiosOptions).then(res => {
        dispatch({
            type: GET_BRAND_LIST,
            payload: {
                brandLists: res.data
            }
        })
    })
}
