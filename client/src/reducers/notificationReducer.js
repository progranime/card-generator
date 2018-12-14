import {
    GET_ALL_USER_NOTIFICATION,
    CREATE_NOTIFICATION,
    UPDATE_NOTIFICATION_IS_READ
} from '../actions/types'

const initialState = {
    results: []
}

export default function(state = initialState, { type, payload }) {
    switch (type) {
        case GET_ALL_USER_NOTIFICATION:
            return {
                ...state,
                results: payload.results
            }
        case CREATE_NOTIFICATION:
            return {
                ...state
            }
        case UPDATE_NOTIFICATION_IS_READ:
            return {
                ...state,
                results: payload.results
            }
        default:
            return state
    }
}
