import {applyMiddleware, combineReducers, createStore} from "redux";
import mainpageReducer from "./mainpage-reducer";
import headerReducer from "./header-reducer";
import authReducer from "./auth-reducer";
import creatorPostReducer from "./creatorPost-reducer";
import thunkMiddleware from "redux-thunk"


let reducers = combineReducers({
    mainPage: mainpageReducer,
    header: headerReducer,
    auth: authReducer,
    creatorPost: creatorPostReducer,
})

let store = createStore(reducers, applyMiddleware(thunkMiddleware));
window.store = store;
export default store;