import { Button } from '@chakra-ui/react'
import React from 'react'

const AdminPagination = ({count=5,handlePage}) => {
  return new Array(count).fill(-1).map((item,i)=>{
    return <Button 
   onClick={()=>handlePage(i+1)}
   key={i} >{i+1}</Button>
  })
  
}
export default AdminPagination
