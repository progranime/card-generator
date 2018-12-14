import { combineReducers } from 'redux'
import authReducer from './authReducer'
import errorReducer from './errorReducer'
import productDivisionReducer from './productDivisionReducer'
import cardReducer from './cardReducer'
import brandReducer from './brandReducer'
import statusReducer from './statusReducer'
import authorityReducer from './authorityReducer'
import authorityRoleReducer from './authorityRoleReducer'
import locationReducer from './locationReducer'
import notificationReducer from './notificationReducer'

export default combineReducers({
    auth: authReducer,
    error: errorReducer,
    productDivision: productDivisionReducer,
    card: cardReducer,
    brand: brandReducer,
    status: statusReducer,
    authority: authorityReducer,
    authorityRole: authorityRoleReducer,
    location: locationReducer,
    notification: notificationReducer
})
