import * as axios from "axios";



const instance1 = axios.create({
    withCredentials: true,
    timeout: 3000,
    baseURL: 'http://localhost:5500'
})


export function getToken({login, password }){
    return instance1.post( '/login',{login: login, password: password}).then(response=>response.data.accessToken)
}