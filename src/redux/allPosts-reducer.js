import {getRubrick, PostsAPI} from "../Api/api";
import {getQuery} from "../assets/utils/getQuery";
import {} from "./AllNews-reducer";


const ADD_USERS = 'ADD_USERS',
    UPDATE_IS_USE = 'UPDATE_IS_USE',
    CLEAR_USERS = 'CLEAR_USERS',
    ADD_CATEGORY = 'ADD_CATEGORY',
    CHANGE_FOLLOW_CATEGORY = 'CHANGE_FOLLOW_CATEGORY',
    CHANGE_IS_FETCHING = 'CHANGE_IS_FETCHING';
const ACTIVE_TO_DELETE = 'ACTIVE_TO_DELETE',
    CLEAR_ACTIVATE = 'CLEAR_ACTIVATE',
    CHANGE_OLD_CMS = 'CHANGE_OLD_CMS',
    CLEAR_CATEGORY_ACTIVE_STATE_CMS = "CLEAR_CATEGORY_ACTIVE_STATE_CMS",
    QUERY_CHANGE_CMS = 'QUERY_CHANGE_CMS',
    ADD_FIRST_POSTS_CMS = 'ADD_FIRST_POSTS_CMS',
    PAGE_QUANTITY_CMS = 'PAGE_QUANTITY_CMS',
    CHANGE_SEARCHSTR= 'CHANGE_SEARCHSTR';

const initialState = {
    limit: 4,
    quantityRequest: 0,
    pageQuantity: 0,
    params: {
        searchStr: '',
        query: '',
        isOld: false,
    },
    isFetching: false,
    Posts: [],
    category: [],
    activateToDeleted: {},

}

const allPostsReducer = (state = initialState, action) => {
    switch (action.type) {
        case CHANGE_SEARCHSTR:
            return{
                ...state,
               params: {...state.params, searchStr: action.str}
            }

        case CHANGE_OLD_CMS:
            return {
                ...state,
                params: {...state.params, isOld: action.bool}
            }

        case CLEAR_CATEGORY_ACTIVE_STATE_CMS:
            return {
                ...state,
                isOld: false,
                category: state.category.map(el=>{el.isFollow=false; return el})
            }
        case ADD_FIRST_POSTS_CMS:
            return{
                ...state,
                quantityRequest: 1,
                Posts: action.arr,
            }
        case PAGE_QUANTITY_CMS:
            return{
                ...state,
                pageQuantity: action.numb
            }
        case QUERY_CHANGE_CMS:
            return{
                ...state,
                params: action.params
            }
        case  ADD_USERS:
            return {
                ...state,
                quantityRequest: state.quantityRequest+1,
                Posts: [...state.Posts, ...action.arr]
            }
        case ADD_CATEGORY:
            return {
                ...state,
                category: [...action.arr]
            }
        case CHANGE_FOLLOW_CATEGORY:
            return {
                ...state,
                category: state.category.map(el => {
                    if (el.id === action.id) {
                        el.isFollow = !el.isFollow
                    }
                    return el
                })
            }
        case CLEAR_USERS:
            return {
                ...state,
                posts: []
            }
        case CLEAR_ACTIVATE:
            return{
                ...state,
                activateToDeleted: [],
            }
        case CHANGE_IS_FETCHING:
            return{
                ...state,
                isFetching: !state.isFetching
            }
        case ACTIVE_TO_DELETE:
            return {
                ...state,
                activateToDeleted: {
                    ...state.activateToDeleted,
                    [action.id]: state.activateToDeleted[action.id] !== undefined ? !state.activateToDeleted[action.id] : true
                }
            }
        default:
            return state;
    }
}





export const changeSearchStr = (str) => {
    return{
        type: CHANGE_SEARCHSTR,
        str: str
    }
}

export const changeOld =(bool) => {
    return {
        type: CHANGE_OLD_CMS,
        bool: bool
    }
}

export const  paramsChange= (query, isOld, searchStr) => {
    return {
        type: QUERY_CHANGE_CMS,
        params: {query, isOld, searchStr}
    }
}

export const  filterClearCategory =(bool) => {
    return {
        type: CLEAR_CATEGORY_ACTIVE_STATE_CMS,
    }
}

export const  addFirstPosts= (arr) => {
    return {
        type: ADD_FIRST_POSTS_CMS,
        arr: arr,
    }
}

export const setPageQuantity = (numb) => {
    return {
        type: PAGE_QUANTITY_CMS,
        numb: numb
    }
}


export const firstNeedPosts = (query, isOld=false, searchStr='') =>(dispatch)=>{

    dispatch(paramsChange(query, isOld, searchStr));
    PostsAPI.getPosts(getQuery(query, isOld,1,initialState.limit, searchStr)).then(response=>{
        let pageQuantity = Math.ceil(response.headers['x-total-count']/initialState.limit);
        dispatch(setPageQuantity(pageQuantity))
        dispatch(addFirstPosts(response.data))
    });
}

export const requestNextPosts =(params, quantityRequest)=> (dispatch)=>{

    PostsAPI.getPosts(getQuery(params.query, params.isOld,quantityRequest+1, initialState.limit, params.searchStr)).then(response=>{
        dispatch(addUsers(response.data));
    });
}



export const addUsers = (arr) => {
    return {
        type: ADD_USERS,
        arr: arr,
    }
}
export const addCategory = (arr) => {
    return {
        type: ADD_CATEGORY,
        arr: arr
    }
}

export const ClearAllPosts = () => {
    return {
        type: CLEAR_USERS,
    }
}

export const ClearAllActivateToDeleted = () => {
    return {
        type: CLEAR_ACTIVATE,
    }
}

export const ChangeFollow = (id) => {
    return {
        type: CHANGE_FOLLOW_CATEGORY,
        id: id
    }
}

export const AddElDeletedList = (id) => {

    return {
        type: ACTIVE_TO_DELETE,
        id: id

    }
}

export const ChangeIsFetching = () => {
    return {
        type: CHANGE_IS_FETCHING,
    }
}

export const thunkGetUsers = () => (dispatch) => {
    dispatch(ChangeIsFetching())
    PostsAPI.getPosts('').then(response => {
        debugger;
        dispatch(addUsers(response.data))
    }).finally(()=>{setTimeout(()=>{dispatch(ChangeIsFetching())}, 1000)})
}



export const thunkGetCategory = () => (dispatch) => {
    getRubrick().then(request => {
        dispatch(addCategory(request.data))
    })
}

export const thunkDeleteSelectedPosts = (arr) => (dispatch) => {
    dispatch(ChangeIsFetching())
    for (let i = 0; i < arr.length; i++) {
        PostsAPI.deletePost(arr[i]).then(response => {
                if (i + 1 === arr.length) {
                    dispatch(ClearAllActivateToDeleted())
                    dispatch(ClearAllPosts())
                    dispatch(firstNeedPosts(''))
                }
            },
            response => {
                debugger
            }).finally(
            () => {
                if (i + 1 === arr.length) {
                    setTimeout(()=>{dispatch(ChangeIsFetching())}, 1000)
                }
            }
        )
    }
}

export default allPostsReducer;
