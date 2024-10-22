import {getBase64} from "../assets/utils/getBase64";
import {PostsAPI} from "../Api/api";

const SET_RUBRICK = 'SET_RUBRICK'
    , SET_TYPE = 'SET_TYPE'
    , SET_TITLE = 'SET_TITLE'
    , ADD_CONTENT = 'ADD_CONTENT'
    , SET_SUBTITLE = 'SET_SUBTITLE'
    , SET_TEXT = 'SET_TEXT'
    , EDIT_TEXT = 'EDIT_TEXT'
    , DELETE_CONTENT = 'DELETE_CONTENT'
    , UPDATE_CONTENT = 'UPDATE_CONTENT'
    , CLEAR_POST = 'CLEAR_POST'
    , ADD_AVA = ' ADD_AVA'
    , REQUEST_CHANGE = 'REQUEST_CHANGE',
    LOAD_OBJ_SERVER = 'LOAD_OBJ_SERVER'

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
    isRequest: '',
    isFetching: false,
    postObj: {
        avaImg: '',
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
        case ADD_AVA:
            return {
                ...state,
                postObj: {...state.postObj, avaImg: action.ava}
            }
        case SET_TEXT:
            return {
                ...state,
                postObj: {...state.postObj, content: [...state.postObj.content, action.text]}
            }
        case EDIT_TEXT:
            return {
                ...state,
                postObj: {
                    ...state.postObj, content: state.postObj.content.map(
                        (el, index) => {
                            if (index === action.index) return {tag: 'p', src: action.text};
                            return el
                        })
                }
            }
        case SET_SUBTITLE:
            return {
                ...state,
                postObj: {...state.postObj, content: [...state.postObj.content, {tag: 'h', src: action.subtitle}]}
            }
        case DELETE_CONTENT:
            let arr = state.postObj.content.map((el) => ({...el}));
            arr.splice(action.index, 1);
            return {
                ...state,
                postObj: {
                    ...state.postObj, content: arr,
                }
            }
        case UPDATE_CONTENT:
            return {
                ...state,
                postObj: {...state.postObj, content: [...action.content]}
            }
        case REQUEST_CHANGE:
            debugger;
            return {
                ...state,
                isRequest: action.bool,
            }

        case CLEAR_POST:
            return {
                ...state,
                isRequest: '',
                postObj: {
                    avaImg: '',
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
                }
            }
        case LOAD_OBJ_SERVER:
            return {
                ...state,
                postObj: {...action.data}
            }
        case 'changeIsFetching':
            return {
                ...state,
                isFetching: !state.isFetching,
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
    return {
        type: ADD_CONTENT,
        dataArr: dataArr,
    }
}

export const addAva = (dataArr) => {
    return {
        type: ADD_AVA,
        ava: dataArr[0].src,
    }
}

export const setRequest = (bool) => {
    return {
        type: REQUEST_CHANGE,
        bool: bool,
    }
}


export const getBase64toState = (e) => (dispatch) => {

    getBase64(e, dispatch, addContent);
}

export const avaThunk = (e) => (dispatch) => {
    getBase64(e, dispatch, addAva);
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
    return {
        type: EDIT_TEXT,
        index: index,
        text: text
    }
}

export const deleteContent = (index) => {
    return {
        type: DELETE_CONTENT,
        index: index,
    }

}

export const updateAllContent = (arr) => {
    return {
        type: UPDATE_CONTENT,
        content: arr,
    }
}

export const clearPostPage = () => {
    return {
        type: CLEAR_POST,
    }
}

export const ChangeIsFetching = () => {
    return {
        type: 'changeIsFetching',
    }
}

export const updatepostObj = (data) => {
    return {
        type: LOAD_OBJ_SERVER,
        data: data
    }
}


export const sendData = (obj) => (dispatch) => {
    dispatch(ChangeIsFetching());
        PostsAPI.sendPost(obj).then(response => {
                dispatch(clearPostPage());
                dispatch(setRequest('successful'));
            },
            response => {
                debugger
                dispatch(setRequest('error'))
            }
        ).finally(()=>{
            setTimeout(()=>{dispatch(ChangeIsFetching())}, 1000)
            setTimeout(() => {
                dispatch(setRequest(''))
            }, 5000)})

}

export const getPostsServer = (id) => (dispatch) => {
    dispatch(ChangeIsFetching());
    PostsAPI.getOnePost(id).then(response => {
            dispatch(updatepostObj(response.data))
        },
        () => {
            dispatch(setRequest('error'))
        }).finally(()=>{
        setTimeout(()=>{dispatch(ChangeIsFetching())}, 1000)
    })
}

export const putRequestServer = (obj) => (dispatch) => {
    dispatch(ChangeIsFetching());
    PostsAPI.putRequest(obj).then(response => {
            dispatch(setRequest('successful'))
        },
        response => {
            dispatch(setRequest('error'))
        }).finally(()=>{
        setTimeout(()=>{dispatch(ChangeIsFetching())}, 1000)
        setTimeout(() => {
            dispatch(setRequest(''))
        }, 5000)})
}

export default creatorPostReducer;