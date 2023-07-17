import { LOGIN_FAILURE, LOGIN_REQUEST, POST_LOGIN_SUCCESS, POST_REGISTER_SUCCESS } from "./actionType"

const initState={
    token:[],
    isAuth:false,
    isLoading:false,
    isError:false
}

export const reducer=(state=initState,{type,payload})=>{
    switch(type){
        case LOGIN_REQUEST:return {...state,isLoading:true};
        case LOGIN_FAILURE:return {...state,isLoading:false,isError:true};
        case POST_LOGIN_SUCCESS:return {...state,isLoading:false,isAuth:true,token:payload};
        default:return {...state}
    }
}