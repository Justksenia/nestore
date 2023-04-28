import { $host, $hostAuth } from "."
import jwt_decode from "jwt-decode"


export const registration=async (email,password)=>{
    const {data}=await $host.post('api/user/registration', {email, password})
    localStorage.setItem("token", data.jwt)
    return jwt_decode(data.jwt)
}
export const login=async (email,password)=>{
    const {data}=await $host.post('api/user/login',{email,password})
    localStorage.setItem("token", data.jwt)
    return jwt_decode(data.jwt)
}

export const check = async () => {
    const {data} = await $hostAuth.get('api/user/auth' )
    localStorage.getItem('token')
    return jwt_decode(data.token)
}

export const logOut=async()=>{
    localStorage.removeItem("token")
}