import { combineReducers } from 'redux'
import authReducer from './authReducer'
import errorReducer from './errorReducer'
import productDivisionReducer from './productDivisionReducer'
import cardReducer from './cardReducer'
import brandReducer from './brandReducer'

export default combineReducers({
    auth: authReducer,
    error: errorReducer,
    productDivision: productDivisionReducer,
    card: cardReducer,
    brand: brandReducer
})
