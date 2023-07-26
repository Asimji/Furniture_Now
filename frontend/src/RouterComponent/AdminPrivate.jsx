import React from 'react'
import AdminLogin from '../Admin/AdminLogin'

const AdminPrivate = ({children}) => {
  
    const adminToken=JSON.parse(localStorage.getItem('adminTOken')) || ""
  
    return adminToken ? children : <AdminLogin/>
}

export default AdminPrivate
