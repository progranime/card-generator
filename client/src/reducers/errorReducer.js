import { GET_ERROR } from '../actions/types'

const initialState = {
    loading: false
}

export default function(state = initialState, { type, payload }) {
    switch (type) {
        case GET_ERROR:
            return {
                ...state,
                ...payload.errors
            }
        default:
            return state
    }
}
