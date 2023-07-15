import React, { useEffect } from 'react'
import AdminNavbar from "./AdminNavbar"
import Sidebar from './Sidebar'
import { Box, Table, Thead, Tbody, Tr, Th, Td, useBreakpointValue,Flex, Button, Image } from "@chakra-ui/react";
import {useDispatch, useSelector} from "react-redux"
import {getAdmin} from "../redux/authReducer/action.js"
const Dashboard = () => {
  const tableSize = useBreakpointValue({ base: "sm", md: "md", lg: "lg" });

  const store=useSelector(store=>store.authReducer.products)
  const dispatch=useDispatch();

  useEffect(()=>{
dispatch(getAdmin())
  },[])

  return (
    <>
      <Box>  
      <AdminNavbar/>
      </Box>
      <Flex >
      <Sidebar/>

      <Box overflowX="auto" border='2px solid red'>
      <Table variant="simple" size={tableSize}>
        <Thead>
          <Tr>
            <Th>S.No</Th>
            <Th>Brand</Th>
            <Th>Image</Th>
            <Th>Description</Th>
            <Th>Price</Th>
            <Th>Type</Th>
            
          </Tr>
        </Thead>
        <Tbody>
        {store.length>0 && store.map((item,i)=>{
          return <Tr key={item._id}>
            <Td>{i+1}</Td>
            <Td>{item.brand}</Td>
            <Td>
              <Image src={item.image}/>
            </Td>
            <Td>{item.description}</Td>
            <Td>{item.price}</Td>
            <Td>{item.type}</Td>
            <Td><Button> Edit </Button></Td>
            <Td><Button> Delete </Button></Td>


          </Tr>
        })}
          
        </Tbody>
      </Table>
    </Box>
      </Flex>
  

    </>
  )
}

export default Dashboard
