import { AUTH_ERROR, AUTH_REQUEST, GET_AUTH_SUCCESS, PATCH_AUTH_SUCCESS, DELETE_AUTH_SUCCESS, POST_AUTH_SUCCESS, SINGLE_PRODUCT } from "./actionType"

const initState={
   
    products:[],
    singleProduct:[],
    isLoading:false,
    isError:false
}

export const reducer=(state=initState,{type,payload})=>{
    switch(type){
        case AUTH_REQUEST:return {...state,isLoading:true};
        case AUTH_ERROR:return {...state,isLoading:false,isError:true};
        case GET_AUTH_SUCCESS:return {...state,isLoading:false,products:payload};
        case PATCH_AUTH_SUCCESS:return {...state,isLaoding:false,products:[...state.products,payload]}
        case POST_AUTH_SUCCESS:return {...state,isLaoding:false,products:[...state.products,payload]}
        case DELETE_AUTH_SUCCESS:return {...state,isLoading:false,products:payload}
        case SINGLE_PRODUCT:return {...state,isLoading:false,singleProduct:payload}
        default:return {...state}
    }
}