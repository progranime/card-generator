import { GET_ALL_LOCATION } from '../actions/types'

const initialState = {
    results: []
}

export default function(state = initialState, { type, payload }) {
    switch (type) {
        case GET_ALL_LOCATION:
            return {
                ...state,
                results: payload.results
            }
        default:
            return state
    }
}
