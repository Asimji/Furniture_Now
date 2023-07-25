import React, { useEffect, useState } from 'react'
import AdminNavbar from "./AdminNavbar"
import Sidebar from './Sidebar'
import { Box, Table, Thead, Tbody, Tr, Th, Td, useBreakpointValue,Flex, Button, Image } from "@chakra-ui/react";
import {useDispatch, useSelector} from "react-redux"
import {deleteProduct, getAdmin} from "../redux/authReducer/action.js"
import { Link } from 'react-router-dom';
import AdminPagination from './AdminPagination';
const Dashboard = () => {
  const tableSize = useBreakpointValue({ base: "sm", md: "md", lg: "lg" });

  const store=useSelector(store=>store.authReducer.products)
  const dispatch=useDispatch();
  const [page,setPage]=useState(1)
  const limit=6
console.log(store)
  useEffect(()=>{
dispatch(getAdmin(page,limit))
  },[page,limit])

const handleDelete=(id)=>{
  dispatch(deleteProduct(id))
}
const handlePage=(val)=>{
  setPage(val)
}

console.log(page)
  return (
    <>
      <Box>  
      <AdminNavbar/>
      </Box>
      <Flex >
      <Sidebar/>

      <Box overflowX="auto">
      <Table variant="simple" size={tableSize}>
        <Thead>
          <Tr>
            <Th>S.No</Th>
            <Th>Brand</Th>
            <Th>Image</Th>
            <Th>Description</Th>
            <Th>Price</Th>
            <Th>Type</Th>
            <Th>Quantity</Th>
            <Th>
              <Link>Create</Link>
            </Th>
            
          </Tr>
        </Thead>
        <Tbody>
        {store?.map((item,i)=>{
          return <Tr key={item._id}>
            <Td>{i+1}</Td>
            <Td>{item.brand}</Td>
            <Td>
              <Image src={item.image}/>
            </Td>
            <Td>{item.description}</Td>
            <Td>{item.price}</Td>
            <Td>{item.type}</Td>
            <Td>{item.quantity}</Td>
            <Td color='green'><Link to={`/edit/${item._id}`}> Edit </Link></Td>
            <Td color='red'><Button onClick={()=>{handleDelete(item._id)}} > Delete </Button></Td>
          </Tr>
        })}
          
        </Tbody>
      </Table>
    </Box>
      </Flex>
    <Flex float={'right'} gap={'2vh'} m={'0 2vh 2vh 0'}>
  <AdminPagination handlePage={handlePage}/>
    </Flex>

    </>
  )
}

export default Dashboard
