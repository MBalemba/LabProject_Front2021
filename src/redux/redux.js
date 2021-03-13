import {applyMiddleware, combineReducers, createStore} from "redux";
import mainpageReducer from "./mainpage-reducer";
import headerReducer from "./header-reducer";
import authReducer from "./auth-reducer";
import creatorPostReducer from "./creatorPost-reducer";
import thunkMiddleware from "redux-thunk"
import mainPageReducer from "./allPosts-reducer";
import allPostsReducer from "./allPosts-reducer";


let reducers = combineReducers({
    mainPage: mainpageReducer,
    header: headerReducer,
    auth: authReducer,
    creatorPost: creatorPostReducer,
    allPosts: allPostsReducer,
})

let store = createStore(reducers, applyMiddleware(thunkMiddleware));
window.store = store;
export default store;