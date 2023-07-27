import React from 'react'
import Login from '../Auth/Login'

const LoginPrivate = ({children}) => {
   
    let store=JSON.parse(localStorage.getItem('loginToken'))||''
    

    return store ? children : <Login/>
}

export default LoginPrivate
