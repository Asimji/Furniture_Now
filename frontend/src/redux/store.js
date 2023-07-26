import { applyMiddleware, combineReducers, legacy_createStore } from "redux";
import thunk from "redux-thunk";
import {reducer as productReducer} from "./productReducer/reducer"
import {reducer as authReducer} from "./authReducer/reducer"
import {reducer as loginReducer} from "./loginReducer/reducer"

const rootReducer=combineReducers({
    productReducer,
    authReducer,
    loginReducer
}) 


export const store=legacy_createStore(rootReducer,applyMiddleware(thunk))