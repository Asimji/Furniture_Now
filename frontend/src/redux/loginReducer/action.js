import { LOGIN_FAILURE, LOGIN_REQUEST } from "./actionType"

const loginToken=JSON.parse(localStorage.getItem('loginToken'))||""


export const postLogin=(user)=>(dispatch)=>{
    dispatch({type:LOGIN_REQUEST})

    fetch(`${process.env.REACT_APP_URL}/user/login`,{
        method:'POST',
        headers:{
            "Content-Type":"application/json",
            Authorization:`Bearer ${loginToken}`
        },
        body:JSON.stringify(user)
    }).then(res=>res.json()).then((res)=>{res.token ? localStorage.setItem('loginToken',JSON.stringify(res.token)) : localStorage.setItem('loginToken',JSON.stringify(""));alert(res.msg)}).catch(e=>dispatch({type:LOGIN_FAILURE}))
}