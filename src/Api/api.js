import * as axios from "axios";



const instance1 = axios.create({
    withCredentials: true,
    baseURL: 'http://localhost:5500'
})


export function getToken({login, password }){
    debugger
    return instance1.post( '/login',{ "login": login,
                "password": password},
     )
}