import axios from "axios"
import { AUTH_ERROR, AUTH_REQUEST, GET_AUTH_SUCCESS, SINGLE_PRODUCT, PATCH_AUTH_SUCCESS } from "./actionType"

const adminToken=JSON.parse(localStorage.getItem('adminTOken')) || ""

console.log(adminToken)

export const getAdmin=()=>(dispatch)=>{
    dispatch({type:AUTH_REQUEST})

    axios.get(`${process.env.REACT_APP_URL}/products`).then(res=>dispatch({type:GET_AUTH_SUCCESS,payload:res.data.products})).catch(e=>dispatch({type:AUTH_ERROR}))
}
export const getSingleProduct=(id)=>(dispatch)=>{
    dispatch({type:AUTH_REQUEST})
    axios.get(`${process.env.REACT_APP_URL}/products/${id}`).then((res)=>{console.log(res);dispatch({type:SINGLE_PRODUCT,payload:res.data.product})}).catch(e=>dispatch({type:AUTH_ERROR}))
}

export const editAdmin=(id,edit)=>(dispatch)=>{
     dispatch({type:AUTH_REQUEST})

     fetch(`${process.env.REACT_APP_URL}/update/${id}`,{
        method:"PATCH",
        headers:{
            "Content-Type":"application/json",
            Authorization:`Bearer ${adminToken}`
        },
        body:JSON.stringify(edit)
     }).then(res=>res.json()).then((res)=>{console.log(res);alert(res.msg)}).catch(e=>dispatch({type:AUTH_ERROR}))
  
}