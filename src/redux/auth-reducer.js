const CHANGE_AUTH = 'CHANGE_AUTH';

const initialState = {
    isAuth: false,
    key: null,
}

const authReducer = (state = initialState, action) => {
    switch (action.type) {
        case  CHANGE_AUTH:
            return {
                    ...state,
                    isAuth: true,
                    key: action.key
            }
        default:
            return state;
    }
}

export const setAuth = (key) =>{
    return {
        type:CHANGE_AUTH,
        key: key,
    }
}

export default authReducer;