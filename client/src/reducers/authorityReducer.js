import {
    GET_ALL_AUTHORITY,
    DELETE_AUTHORITY,
    GET_SINGLE_AUTHORITY,
    UPDATE_AUTHORITY,
    UPDATE_AUTHORITY_MESSAGE,
    CREATE_AUTHORITY
} from '../actions/types'

const initialState = {
    results: [],
    result: {},
    message: ''
}

export default function(state = initialState, { type, payload }) {
    switch (type) {
        case GET_ALL_AUTHORITY:
            return {
                ...state,
                results: payload.results
            }
        case GET_SINGLE_AUTHORITY:
            return {
                ...state,
                result: payload.result
            }
        case CREATE_AUTHORITY:
            return {
                ...state,
                message: payload.message
            }
        case DELETE_AUTHORITY:
            return {
                ...state,
                message: payload.message
            }
        case UPDATE_AUTHORITY:
            return {
                ...state,
                message: payload.message
            }
        case UPDATE_AUTHORITY_MESSAGE:
            return {
                ...state,
                message: payload.message
            }
        default:
            return state
    }
}
