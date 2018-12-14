import {
    GET_ALL_AUTHORITY,
    GET_SINGLE_AUTHORITY,
    GET_ALL_AUTHORITY_BY_ROLE_ID,
    CREATE_AUTHORITY,
    DELETE_AUTHORITY,
    UPDATE_AUTHORITY,
    UPDATE_AUTHORITY_MESSAGE
} from '../actions/types'

const initialState = {
    results: [],
    result: {},
    message: '',
    admin: []
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
        case GET_ALL_AUTHORITY_BY_ROLE_ID:
            return {
                ...state,
                admin: payload.admin
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
