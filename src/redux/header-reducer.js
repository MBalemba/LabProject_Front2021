import {getRubrick, PostsAPI} from "../Api/api";

const SET_FOLLOW = 'SET_FOLLOW';
const GET_CATEGORY = 'GET_CATEGORY';
const CHANGE_OLD = 'CHANGE_OLD';
const CLEAR_CATEGORY_ACTIVE_STATE = 'CLEAR_CATEGORY_ACTIVE_STATE';
const initialState = {
    isOld: false,
    category: [

]
}


const headerReducer = (state = initialState, action) => {
    switch (action.type) {
        case  SET_FOLLOW:
            return {
                ...state,
                navbar: state.category.map((el)=>{if(el.pathName === action.obj.pathName) return action.obj; return el; })
            }
        case GET_CATEGORY:
            return {
                ...state,
                category: action.arr
            }
        case CHANGE_OLD:
            return {
                ...state,
                isOld: action.bool
            }
        case CLEAR_CATEGORY_ACTIVE_STATE:
            return {
                ...state,
                isOld: false,
                category: state.category.map(el=>{el.isFollow=false; return el})
            }
        default:
            return state;
    }
}

const addCategory = (arr) => {
    return {
        type: GET_CATEGORY,
        arr: arr
    }
}

export const changeOld =(bool) => {
    return {
        type: CHANGE_OLD,
        bool: bool
    }
}

export const  filterClearCategory =(bool) => {
    return {
        type: CLEAR_CATEGORY_ACTIVE_STATE,
    }
}

export const getCategory = () =>(dispatch)=>{
    getRubrick().then(response=>{dispatch(addCategory(response.data))});
}

export const changeFollow = (obj) =>{
    return {
        type: SET_FOLLOW,
        obj: obj,
    }
}



export default headerReducer;
