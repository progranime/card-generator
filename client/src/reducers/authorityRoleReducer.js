import { GET_ALL_AUTHORITY_ROLE } from '../actions/types'

const initalState = {
    results: [],
    result: {}
}

export default function(state = initalState, { type, payload }) {
    switch (type) {
        case GET_ALL_AUTHORITY_ROLE:
            return {
                ...state,
                results: payload.results
            }
        default:
            return state
    }
}
