import { GET_ALL_STATUS } from '../actions/types'

const initialState = {
    results: []
}

export default function(state = initialState, { type, payload }) {
    switch (type) {
        case GET_ALL_STATUS:
            return {
                ...state,
                results: payload.results
            }
        default:
            return state
    }
}
