import { GET_PRODUCT_SUCCESS, PRODUCT_FAILURE, PRODUCT_REQUEST } from "./actionType"
import axios from 'axios'

export const getProducts=(params)=>(dispatch)=>{
    dispatch({type:PRODUCT_REQUEST})
    axios.get(`${process.env.REACT_APP_URL}/product/products`,params).then((res)=>{dispatch({type:GET_PRODUCT_SUCCESS,payload:res.data.products})}).catch((e)=>dispatch({type:PRODUCT_FAILURE}))
    
    
}
