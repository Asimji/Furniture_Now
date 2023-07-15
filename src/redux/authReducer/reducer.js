import { AUTH_ERROR, AUTH_REQUEST, GET_AUTH_SUCCESS } from "./actionType"

const initState={
   
    products:[],
    isLoading:false,
    isError:false
}

export const reducer=(state=initState,{type,payload})=>{
    switch(type){
        case AUTH_REQUEST:return {...state,isLoading:true};
        case AUTH_ERROR:return {...state,isLoading:false,isError:true};
        case GET_AUTH_SUCCESS:return {...state,isLoading:false,products:payload}
        default:return {...state}
    }
}