import { GET_CARD } from '../actions/types'

const initialState = {
    results: [],
    loading: false
}

export default function(state = initialState, { type, payload }) {
    switch (type) {
        case GET_CARD:
            return {
                ...state,
                results: payload.results
            }
        default:
            return state
    }
}
