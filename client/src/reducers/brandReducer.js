import { GET_BRAND } from '../actions/types'

const initialState = {
    brands: []
}

export default function(state = initialState, { type, payload }) {
    switch (type) {
        case GET_BRAND:
            return {
                ...state,
                brands: payload.brands
            }
        default:
            return state
    }
}
