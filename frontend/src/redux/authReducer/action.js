import axios from "axios"
import { AUTH_ERROR, AUTH_REQUEST, DELETE_AUTH_SUCCESS, GET_AUTH_SUCCESS, PATCH_AUTH_SUCCESS, POST_AUTH_SUCCESS } from "./actionType"

const adminToken=JSON.parse(localStorage.getItem('adminTOken')) || ""



export const getAdmin=(page,limit)=>(dispatch)=>{
    dispatch({type:AUTH_REQUEST})

    axios.get(`${process.env.REACT_APP_URL}/product/products?page=${page}&limit=${limit}`).then(res=>dispatch({type:GET_AUTH_SUCCESS,payload:res.data.products})).catch(e=>dispatch({type:AUTH_ERROR}))
}

export const editAdmin=(id,edit)=>(dispatch)=>{
     dispatch({type:AUTH_REQUEST})

     fetch(`${process.env.REACT_APP_URL}/product/update/${id}`,{
        method:"PATCH",
        headers:{
            "Content-Type":"application/json",
            Authorization:`Bearer ${adminToken}`
        },
        body:JSON.stringify(edit)
     }).then(res=>res.json()).then((res)=>{dispatch({type:PATCH_AUTH_SUCCESS,payload:res});alert(res.msg)}).catch(e=>dispatch({type:AUTH_ERROR}))
  
}

export const addProduct=(data)=>(dispatch)=>{
    dispatch({type:AUTH_REQUEST})
    fetch(`${process.env.REACT_APP_URL}/product/add}`,{
        method:"POST",
        headers:{
            "Content-Type":"application/json",
            Authorization:`Bearer ${adminToken}`
        },
        body:JSON.stringify(data)
     }).then(res=>res.json()).then((res)=>{dispatch({type:POST_AUTH_SUCCESS,payload:res.products});alert(res.msg)}).catch(e=>dispatch({type:AUTH_ERROR}))

    }

    export const deleteProduct=(id)=>(dispatch)=>{
        dispatch({type:AUTH_REQUEST})

        axios.delete(`${process.env.REACT_APP_URL}/product/delete/${id}`,{
            headers:{
                Authorization:`Bearer ${adminToken}`
            }, 
        }).then((res)=>{dispatch({type:DELETE_AUTH_SUCCESS});alert(res.data.msg);window.location.reload()}).catch(e=>dispatch({type:AUTH_ERROR}))
    }
