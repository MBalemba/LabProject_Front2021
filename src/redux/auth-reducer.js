const CHANGE_AUTH = 'CHANGE_AUTH';

const initialState = {
    isAuth: sessionStorage.getItem('isAuth')?sessionStorage.getItem('isAuth'):false,
    key: null,
}

const authReducer = (state = initialState, action) => {
    switch (action.type) {
        case  CHANGE_AUTH:
            if(sessionStorage.getItem('isAuth')===null){
                sessionStorage.setItem('isAuth', true);
            };
            if(sessionStorage.getItem('key')===null){
                sessionStorage.setItem('key', action.key)
        }
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