import {PostsAPI} from "../Api/api";
import {getQuery} from "../assets/utils/getQuery";
import {act} from "@testing-library/react";
const ADD_FIRST_POSTS = 'ADD_FIRST_POSTS',
    ADD_NEXT_POST = 'ADD_NEXT_POST',
    RESET_QUANTITY_REQUEST = 'RESET_QUANTITY_REQUEST',
    PAGE_QUANTITY = 'PAGE_QUANTITY',
    QUERY_CHANGE = 'QUERY_CHANGE',
    CHANGE_FETCHING = 'CHANGE_FETCHING',
    CHANGE_SEARCHSTRL = 'CHANGE_SEARCHSTRL';

const initialState = {
    isFetchingPosts: false,
    params: {
        searchStr: '',
        query: '',
        isOld: false,
    },
    limit: 4,
    quantityRequest: 0,
    pageQuantity: 0,
    Posts: [

    ]
}

const AllNewsReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_FIRST_POSTS:
            return{
                ...state,
                quantityRequest: 1,
                Posts: action.arr,

            }
        case ADD_NEXT_POST:
            return{
                ...state,
                quantityRequest: state.quantityRequest+1,
                Posts: [...state.Posts, ...action.arr]
            }
        case QUERY_CHANGE:
            return{
                ...state,
                params: action.params
            }
        case RESET_QUANTITY_REQUEST:
            return{
                ...state,
                quantityRequest: 0,
            }
        case PAGE_QUANTITY:
            return{
                ...state,
                pageQuantity: action.numb
            }
        case CHANGE_FETCHING:
            return{
                ...state,
                isFetchingPosts: !state.isFetchingPosts
            }
        case CHANGE_SEARCHSTRL:
            return{
                    ...state,
                    params: {...state.params, searchStr: action.str}
            }
        default:
            return state;
    }
}


export const changeSearchStr = (str) => {
    return{
        type: CHANGE_SEARCHSTRL,
        str: str
    }
}

export const  addFirstPosts= (arr) => {
    return {
        type: ADD_FIRST_POSTS,
        arr: arr,
    }
}
export const  changeFetching= () => {
    return {
        type: CHANGE_FETCHING,
    }
}


export const addNextPost = (arr)=>{
    return {
        type: ADD_NEXT_POST,
        arr: arr,
    }
}

export const  paramsChange= (query, isOld, searchStr) => {
    return {
        type: QUERY_CHANGE,
        params: {query, isOld, searchStr}
    }
}
export const setPageQuantity = (numb) => {
    return {
        type: PAGE_QUANTITY,
        numb: numb
    }
}

 export const changeQuantityRequest = ()=>{
     return {
         type: RESET_QUANTITY_REQUEST,
     }
}

export const firstNeedPosts = (query, isOld=false, searchStr='') =>(dispatch)=>{
    dispatch(paramsChange(query, isOld, searchStr));
    dispatch(changeFetching());
    PostsAPI.getPosts(getQuery(query, isOld,1,initialState.limit, searchStr)).then(response=>{
        dispatch(changeFetching());
        let pageQuantity = Math.ceil(response.headers['x-total-count']/initialState.limit);
        dispatch(setPageQuantity(pageQuantity))
        dispatch(addFirstPosts(response.data))
    });
}

export const requestNextPosts =(params, quantityRequest)=> (dispatch)=>{
    dispatch(changeFetching());
    PostsAPI.getPosts(getQuery(params.query, params.isOld,quantityRequest+1, initialState.limit, params.searchStr)).then(response=>{
        dispatch(addNextPost(response.data));
        dispatch(changeFetching());
    });
}

export default AllNewsReducer;