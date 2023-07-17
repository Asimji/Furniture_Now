import { Box, Button, Center, Flex, Heading, Input, Text } from '@chakra-ui/react'
import React, { useState } from 'react'

const Delivery = ({total,count,totalQuantity}) => {
  const [coupon,setCoupon]=useState(false)
  return (
    <Box textAlign={'left'}>
      <p>Delivering To</p>
      <Flex justify={'center'} gap={'5vh'} mb={'3vh'}>
      <Input type="text" placeholder='ENTER PIN code' /> 
      <Text mt={'1vh'}> Locate</Text>
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
<Button w={'100%'} bg={'orange'}>Payment</Button>
    </Box>
  )
}

export default Delivery
