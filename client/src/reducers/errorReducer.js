import { GET_LOGIN_ERROR, GET_ERROR } from '../actions/types'

const initialState = {
    login: {},
    card: {},
    loading: false
}

export default function(state = initialState, { type, payload }) {
    switch (type) {
        case GET_LOGIN_ERROR:
            return {
                ...state,
                login: payload.login
            }
        case GET_ERROR:
            return {
                ...state,
                card: payload.errors
            }
        default:
            return state
    }
}
