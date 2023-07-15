import { GET_PRODUCT_SUCCESS, PRODUCT_FAILURE, PRODUCT_REQUEST } from "./actionType"


const initState={
    products:[],
    isLoading:false,
    isError:false
}

export const reducer=(state=initState,{type,payload})=>{
    switch(type){
        case PRODUCT_REQUEST:return {...state,isLoading:true};
        case PRODUCT_FAILURE:return {...state,isError:true,isLoading:false};
        case GET_PRODUCT_SUCCESS:return {...state,isLoading:false,products:payload}
        default:return {...state}
    }
}