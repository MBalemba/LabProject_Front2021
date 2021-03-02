const CHANGE_AUTH = 'CHANGE_AUTH';

const initialState = {
    isAuth: false,
    key: null,
}

const authReducer = (state = initialState, action) => {
    switch (action.type) {
        case  CHANGE_AUTH:
            return {

                }
        default:
            return state;
    }
}

export const setAuth = (key) =>{
    return {
        type:CHANGE_AUTH,
        flag: true,
        key: key,
    }
}

export default authReducer;