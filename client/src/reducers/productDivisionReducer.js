import { GET_ALL_PRODUCT_DIVISION, GET_BRAND_LIST } from '../actions/types'

const initialState = {
    productDivisions: [],
    brandLists: []
}

export default function(state = initialState, { type, payload }) {
    switch (type) {
        case GET_ALL_PRODUCT_DIVISION:
            return {
                ...state,
                productDivisions: payload.productDivisions
            }
        case GET_BRAND_LIST:
            return {
                ...state,
                brandLists: payload.brandLists
            }
        default:
            return state
    }
}
