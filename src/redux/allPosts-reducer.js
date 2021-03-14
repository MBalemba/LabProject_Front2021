import {getRubrick, PostsAPI} from "../Api/api";


const ADD_USERS = 'ADD_USERS',
    UPDATE_IS_USE = 'UPDATE_IS_USE',
    CLEAR_USERS = 'CLEAR_USERS',
    ADD_CATEGORY = 'ADD_CATEGORY',
    CHANGE_FOLLOW_CATEGORY = 'CHANGE_FOLLOW_CATEGORY',
    CHANGE_IS_FETCHING = 'CHANGE_IS_FETCHING';
const ACTIVE_TO_DELETE = 'ACTIVE_TO_DELETE',
    CLEAR_ACTIVATE = 'CLEAR_ACTIVATE';

const initialState = {
    isFetching: false,
    posts: [],
    category: [],
    activateToDeleted: {},

}

const allPostsReducer = (state = initialState, action) => {
    switch (action.type) {
        case  ADD_USERS:
            debugger
            return {
                ...state,
                posts: [...state.posts, ...action.arr]
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
                    dispatch(thunkGetUsers())
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
