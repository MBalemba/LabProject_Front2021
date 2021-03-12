import * as axios from "axios";



const instance1 = axios.create({
    withCredentials: true,
    timeout: 10000,
    baseURL: 'http://localhost:5500',

})


export function getToken({login, password }){
    return instance1.post( '/login',{login: login, password: password}).then(response=>response.data.accessToken)
}

export function getRubrick(){
    return instance1.get('/rubrick')
}

export const editAPI= {

    sendPost(obj) {
    obj = {...obj};
        return instance1.post(`/Posts`,{...obj},{
            headers: {
                'Authorization':'Bearer '+sessionStorage.getItem('key')
            }
        })
    }
}