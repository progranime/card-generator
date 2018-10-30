import { GET_LOGIN_ERROR } from '../actions/types'

const initialState = {
    login: '',
    loading: false
}

export default function(state = initialState, { type, payload }) {
    switch (type) {
        case GET_LOGIN_ERROR:
            return {
                ...state,
                login: payload.login
            }
        default:
            return state
    }
}
