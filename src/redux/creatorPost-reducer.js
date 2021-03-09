import {getBase64} from "../assets/utils/getBase64";

const SET_RUBRICK = 'SET_RUBRICK';
const SET_TYPE = 'SET_TYPE';
const SET_TITLE = 'SET_TITLE';
const ADD_CONTENT = 'ADD_CONTENT';


const data = new Date();
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
            return{
                ...state,
                postObj: {...state.postObj, title: action.title}
            }
        case ADD_CONTENT:
            debugger
            return{
                ...state,
                postObj: {...state.postObj, content: [...state.postObj.content, ...action.dataArr ] }
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

export const getBase64toState = (e)=> (dispatch) =>{
    debugger
    getBase64(e,dispatch,addContent);

}

export default creatorPostReducer;