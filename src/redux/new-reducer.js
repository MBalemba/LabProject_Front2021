import {PostsAPI} from "../Api/api";
const ADD_POST = 'ADD_POST';

const initialState = {
    Post: {}
}

const newReducer = (state = initialState, action) => {

    switch (action.type) {
        case ADD_POST:
            return{
                ...state,
                Post: action.obj
            }
        default:
            return state;
    }

    return state;
}


const AddPost = (obj)=>{
    return{
        type: ADD_POST,
        obj: obj
    }
}

export const thunkGetPost = (id) => (dispatch) => {
        PostsAPI.getOnePost(id).then(response=>{dispatch(AddPost(response.data))},
            response=>{})
}



export default newReducer;
