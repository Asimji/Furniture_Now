import axios from "axios"
import { AUTH_ERROR, AUTH_REQUEST, GET_AUTH_SUCCESS } from "./actionType"

export const getAdmin=()=>(dispatch)=>{
    dispatch({type:AUTH_REQUEST})

    axios.get(`${process.env.REACT_APP_URL}/products`).then(res=>dispatch({type:GET_AUTH_SUCCESS,payload:res.data.products})).catch(e=>dispatch({type:AUTH_ERROR}))
}