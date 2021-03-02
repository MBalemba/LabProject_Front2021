import {combineReducers, createStore} from "redux";
import mainpageReducer from "./mainpage-reducer";
import headerReducer from "./header-reducer";
import authReducer from "./auth-reducer";


let reducers = combineReducers({
    mainPage: mainpageReducer,
    header: headerReducer,
    auth: authReducer,
})

let store = createStore(reducers);
window.store = store;
export default store;