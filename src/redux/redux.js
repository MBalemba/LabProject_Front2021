import {combineReducers, createStore} from "redux";
import mainpageReducer from "./mainpage-reducer";
import headerReducer from "./header-reducer";


let reducers = combineReducers({
    mainPage: mainpageReducer,
    header: headerReducer,
})

let store = createStore(reducers);
window.store = store;
export default store;