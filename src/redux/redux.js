import {combineReducers, createStore} from "redux";
import mainpageReducer from "./mainpage-reducer";


let reducers = combineReducers({
    mainPage: mainpageReducer,
})

let store = createStore(reducers);

export default store;