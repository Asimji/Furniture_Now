import { Box, Button, Flex, Input } from '@chakra-ui/react'
import React, { useState } from 'react'
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom'
import { addProduct } from '../redux/authReducer/action';

const AddProduct = () => {
    const [data,setData]=useState({brand:"",description:"",image:"",price:0,type:"",qunatity:1});
    const dispatch=useDispatch()

    const handleChange=(e)=>{
  const {name,value}=e.target
  setData((prev)=>{
    return {...prev,[name]:value}
  })
    }

    const handleSubmit=()=>{
        console.log(data)
        dispatch(addProduct(data))
    }

  return (
    <Box>
      <Link to="/admin">Home {">>>"}</Link>
      <Box display={'flex'} justifyContent={'center'} alignContent={'center'}>
        <Flex alignContent={'center'}  border={'2px solid gray'} flexDirection={'column'} p={'10vh'} w={'100vh'} gap={'5vh'}>
            <Input placeholder='Enter Brand' name='brand' onChange={handleChange} />
            <Input placeholder='Enter Description' name='description'  onChange={handleChange}/>
            <Input placeholder='Enter Image URL' name='image'  onChange={handleChange}/>
            <Input type='number' placeholder='Enter Price' name='price'  onChange={handleChange}/>
            <Input  placeholder='Enter Type' name='type'  onChange={handleChange}/>
            <Input type='number' placeholder='Enter Quantity' name='qunatity'  onChange={handleChange}/>
           
            <Button onClick={handleSubmit}>Create</Button>
        </Flex>

      </Box>
    </Box>
  )
}

export default AddProduct
