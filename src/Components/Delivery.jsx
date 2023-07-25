import { Box, Button, Center, Flex, Heading, Input, Text } from '@chakra-ui/react'
import React, { useState } from 'react'
import axios from 'axios'

const Delivery = ({total,count,totalQuantity,userId,fetchedData}) => {
  const loginToken=JSON.parse(localStorage.getItem('loginToken'))||""
  const [coupon,setCoupon]=useState(false)
console.log("userId in Delivery",userId);

  const handleDelete=()=>{
    axios.delete(`${process.env.REACT_APP_URL}/cart/deleteall/${userId}`,{
      headers:{
        Authorization:`Bearer ${loginToken}`
      }
    }).then((res)=>{alert("Your Order is Placed ! Thank you for Shopping");fetchedData()}).catch(e=>console.log(e))
  }

  return (
    <Box textAlign={'left'}>
      <p>Delivering To</p>
      <Flex justify={'center'} gap={'5vh'} mb={'3vh'}>
      <Input type="text" placeholder='FURNITURE_100' isDisabled={true} color={'red'}/> 
      <Text mt={'1vh'}> Coupon</Text>
      </Flex>
      <Button w={'100%'} onClick={()=>setCoupon(!coupon)}>{coupon ? "Coupon Applied" : "Apply Coupon"} {">>"}</Button>
      <Box border={'1px solid gray'} mt={'5vh'} p={'2vh'} mb={'5vh'}>
     <Heading mb={'2vh'}>
        
        <Center>Cart Summary</Center>
        </Heading>   
        <Flex gap={'5vh'} mt={'5vh'}>
            <Box>
            <Text >Items in Cart</Text>
            <Text>Cart Total Price</Text>
            <Text>Cart Total Discount</Text>
            <Text><span style={{fontWeight:'bold'}}>YOU PAY </span> <span style={{fontSize:'2vh'}}>(inclusive of All Taxes)</span></Text>
            </Box>
            <Box>
                <Text>{totalQuantity}</Text>
                <Text>{total}</Text>
                <Text>{coupon ? count*15000 : 0}</Text>
                <Text>{coupon ? total-count*15000 : total}</Text>
            </Box>
        </Flex>
      </Box>
<Button w={'100%'} bg={'orange'} onClick={handleDelete}>Payment</Button>
    </Box>
  )
}

export default Delivery
