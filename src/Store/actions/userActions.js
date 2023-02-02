export const loginInfo =(payload) =>{
    return {
        type:"LOGIN_INFO",
        payload:payload
    }}
export const meInfo =(payload) =>{
    return{
        type:"ME",
        payload:payload
    }}
export const order =(payload) =>{
    return{
        type:"ORDER",
        payload:payload
    }}
export const setIsLoggedIn =(payload) =>{
    return{
        type:"setIsLoggedIn",
        payload:payload
}}
