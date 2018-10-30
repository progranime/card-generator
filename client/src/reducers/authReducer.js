import { loadState } from '../store/localStorage'
import config from '../config/keys'

const initialState = {
    user: loadState(config.sessionName) || {}
}

export default function(state = initialState, { type, payload }) {
    switch (type) {
        default:
            return state
    }
}
