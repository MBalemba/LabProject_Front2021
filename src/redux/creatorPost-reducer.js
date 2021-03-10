import {getBase64} from "../assets/utils/getBase64";
import {act} from "@testing-library/react";

const SET_RUBRICK = 'SET_RUBRICK'
    , SET_TYPE = 'SET_TYPE'
    , SET_TITLE = 'SET_TITLE'
    , ADD_CONTENT = 'ADD_CONTENT'
    , SET_SUBTITLE = 'SET_SUBTITLE'
    , SET_TEXT = 'SET_TEXT'
    , EDIT_TEXT = 'EDIT_TEXT'
    , DELETE_CONTENT = 'DELETE_CONTENT'
    , UPDATE_CONTENT = 'UPDATE_CONTENT';

const  data = new Date();
const arrMonth = [
    'Январь',
    'Февраль',
    'Март',
    'Апрель',
    'Май',
    'Июнь',
    'Июль',
    'Август',
    'Сентябрь',
    'Ноябрь',
    'Декабрь',
]

const initialState = {
    postObj: {
        title: '',
        data: {
            day: data.getDate(),
            month: arrMonth[data.getMonth() - 1],
            year: data.getFullYear(),
        },
        type: {
            rusName: "Спорт",
            pathName: "sport",
        },
        content: [],
        link: [],
    },
    rubrick: {}

}

const creatorPostReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_RUBRICK:
            return {
                ...state,
                rubrick: action.obj,
            }
        case SET_TYPE:
            return {
                ...state,
                postObj: {...state.postObj, type: action.rubrick}
            }
        case SET_TITLE:
            return {
                ...state,
                postObj: {...state.postObj, title: action.title}
            }
        case ADD_CONTENT:
            return {
                ...state,
                postObj: {...state.postObj, content: [...state.postObj.content, ...action.dataArr]}
            }
        case SET_TEXT:
            return{
                ...state,
                postObj: {...state.postObj, content: [...state.postObj.content, action.text]}
            }
        case EDIT_TEXT:
            return{
                ...state,
                postObj: {...state.postObj, content: state.postObj.content.map(
                    (el,index) =>
                    {if(index === action.index) return {tag: 'p', src: action.text}; return el})
            }}
        case SET_SUBTITLE:
            return{
                ...state,
                postObj: {...state.postObj, content: [...state.postObj.content, {tag: 'h', src: action.subtitle}]}
            }
        case DELETE_CONTENT:
            let arr = state.postObj.content.map((el)=>({...el}));
            arr.splice(action.index,1);
                return {
                    ...state,
                    postObj: {
                        ...state.postObj, content: arr,
                    }
                }
        case UPDATE_CONTENT:
            debugger
            return{
                ...state,
                postObj: {...state.postObj, content: [...action.content]}
            }
        default:
            return state;
    }
}




export const setRubrick = (obj) => {
    return {
        type: SET_RUBRICK,
        obj: obj
    }
}

export const setType = (type) => {
    return {
        type: SET_TYPE,
        rubrick: type
    }
}

export const setTitle = (title) => {
    return {
        type: SET_TITLE,
        title: title
    }
}

export const addContent = (dataArr) => {
    debugger
    return {
        type: ADD_CONTENT,
        dataArr: dataArr,
    }
}

export const getBase64toState = (e) => (dispatch) => {
    debugger
    getBase64(e, dispatch, addContent);
}

export const AddSubtitle = (subtitle) => {
    return {
        type: SET_SUBTITLE,
        subtitle: subtitle
    }
}

export const AddText = (text) => {
    return {
        type: SET_TEXT,
        text: {tag: 'p', src: text}
    }
}

export const editText = (text, index) => {
    return{
        type: EDIT_TEXT,
        index: index,
        text: text
    }
}

export const deleteContent = (index) => {
    return{
        type: DELETE_CONTENT,
        index: index,
    }

}

export const updateAllContent = (arr) =>{
    return{
        type: UPDATE_CONTENT,
        content: arr,
    }
}

export default creatorPostReducer;