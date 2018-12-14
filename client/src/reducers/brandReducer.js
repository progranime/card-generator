import { GET_ALL_BRAND } from '../actions/types'
import { loadState } from '../store/localStorage'

const initialState = {
    brands: loadState('brands') || []
}

export default function(state = initialState, { type, payload }) {
    switch (type) {
        case GET_ALL_BRAND:
            return {
                ...state,
                brands: payload.brands
            }
        default:
            return state
    }
}
