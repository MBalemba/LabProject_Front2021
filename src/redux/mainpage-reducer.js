import {PostsAPI} from "../Api/api"
import defImg from './../assets/image/firstpage/default.jpg';

const UPDATE_NEW_MESSAGE_BODY = 'UPDATE-NEW-MESSAGE-BODY';
const UPDATE_IS_USE = 'UPDATE_IS_USE';
const ADD_POSTS = 'ADD_POSTS';

const defaultVal = {
    id: 'default',
    avaImg: defImg,
    title: "Ведутся технические работы, извините",
    type: {
        rusName: "default",
        pathName: "default",
    }
}

    const initialState = {
        Posts: [],
    }

    const mainpageReducer = (state = initialState, action) => {

        switch (action.type) {
            case ADD_POSTS:
                return{
                    ...state,
                    Posts: action.arr
                }

            default:
                return state;
        }

        return state;
    }




    export const thunkGetPosts = () => (dispatch) => {
        PostsAPI.getPosts('?_page=1&_limit=5').then(response => {
            let arr = response.data;
            for (let i = 0; i < 5; i++) {
                if (arr[i] === undefined) {
                    arr.push(defaultVal)
                }
            }
            dispatch(addPosts(arr))

        })
    }

    export const addPosts =(arr) =>{
    return {
        type: ADD_POSTS,
        arr: arr,
    }
    }


export default mainpageReducer;
