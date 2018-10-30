import axios from 'axios'

export const getProductDivision = payload => dispatch => {
    const axiosOptions = {
        method: 'get',
        url: '/api/productDivision'
    }

    axios(axiosOptions).then(res => {
        dispatch({
            type: 'GET_PRODUCT_DIVISION',
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
            type: 'GET_BRAND_LIST',
            payload: {
                brandLists: res.data
            }
        })
    })
}
