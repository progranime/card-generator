import {
    GET_ALL_CARD,
    CREATE_CARD,
    UPDATE_CARD,
    UPDATE_CARD_MESSAGE,
    UPDATE_CARD_STATUS,
    GET_SINGLE_CARD,
    REQUEST_APPROVAL,
    DELETE_CARD
} from '../actions/types'

const initialState = {
    results: [],
    result: {},
    loading: false,
    message: '',
    hasEmailSent: false
}

export default function(state = initialState, { type, payload }) {
    switch (type) {
        case GET_ALL_CARD:
            return {
                ...state,
                results: payload.results
            }
        case GET_SINGLE_CARD:
            return {
                ...state,
                result: payload.result
            }
        case CREATE_CARD:
            return {
                ...state,
                message: payload.message
            }
        case UPDATE_CARD:
            return {
                ...state,
                message: payload.message
            }
        case UPDATE_CARD_MESSAGE:
            return {
                ...state,
                message: payload.message
            }
        case UPDATE_CARD_STATUS:
            return {
                ...state,
                message: payload.message
            }
        case DELETE_CARD:
            return {
                ...state,
                message: payload.message
            }
        case REQUEST_APPROVAL:
            return {
                ...state,
                hasEmailSent: payload.hasEmailSent,
                message: payload.message
            }
        default:
            return state
    }
}
