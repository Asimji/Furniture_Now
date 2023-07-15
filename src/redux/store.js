import { applyMiddleware, combineReducers, legacy_createStore } from "redux";
import thunk from "redux-thunk";
import {reducer as productReducer} from "./productReducer/reducer"
import {reducer as authReducer} from "./authReducer/reducer"

const rootReducer=combineReducers({
    productReducer,
    authReducer
}) 


export const store=legacy_createStore(rootReducer,applyMiddleware(thunk))