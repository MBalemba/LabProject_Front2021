import {getRubrick, PostsAPI} from "../Api/api";



const ADD_USERS = 'ADD_USERS',
    UPDATE_IS_USE = 'UPDATE_IS_USE',
    CLEAR_USERS = 'CLEAR_USERS',
    ADD_CATEGORY ='ADD_CATEGORY',
    CHANGE_FOLLOW_CATEGORY= 'CHANGE_FOLLOW_CATEGORY';


const initialState = {
    posts: [

    ],
    category: [],

}

const allPostsReducer = (state = initialState, action) => {
    switch (action.type) {
        case  ADD_USERS:
            debugger
            return{
                ...state,
                posts: [...state.posts, ...action.arr]
            }
        case ADD_CATEGORY:
            return{
                ...state,
                category: [...action.arr]
            }
        case CHANGE_FOLLOW_CATEGORY:
            return {
                ...state,
                category: state.category.map(el=>{if(el.id===action.id){el.isFollow=!el.isFollow} return el})
            }
        case CLEAR_USERS:
            return{
                ...state,
                posts: []
            }
        default:
            return state;
    }
}

export const addUsers = (arr)=>{
    return{
        type: ADD_USERS,
        arr: arr,
    }
}
export const addCategory=(arr)=>{
    return{
        type: ADD_CATEGORY,
        arr: arr
    }

}

export const ClearAllUsers =() =>{
        return{
            type: CLEAR_USERS,
        }
}

export const ChangeFollow =(id)=>{
    return{
        type: CHANGE_FOLLOW_CATEGORY,
        id: id
    }
}

export const thunkGetUsers = () => (dispatch)=>{
    PostsAPI.getPosts('').then(response=>{debugger;dispatch(addUsers(response.data))})
}

export const thunkGetCategory = ()=>(dispatch) =>{
    getRubrick().then(request=>{dispatch(addCategory(request.data))})
}

export default allPostsReducer;
