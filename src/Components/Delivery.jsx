import { Box, Button, Center, Flex, Heading, Input, Text } from '@chakra-ui/react'
import React from 'react'

const Delivery = () => {
  return (
    <Box textAlign={'left'}>
      <p>Delivering To</p>
      <Flex justify={'center'} gap={'5vh'} mb={'3vh'}>
      <Input type="text" placeholder='ENTER PIN code' /> 
      <Text mt={'1vh'}> Locate</Text>
      </Flex>
      <Text><span style={{color:'red'}}>LOGIN NOW</span> to add address & Avail offers <span style={{fontWeight:'bold'}}>(Required)</span></Text>
      <Button w={'100%'}>Apply Coupon {">>"}</Button>
      <Box border={'1px solid gray'} mt={'5vh'} p={'2vh'} mb={'5vh'}>
     <Heading mb={'2vh'}>
        
        <Center>Cart Summary</Center>
        </Heading>   
        <Flex gap={'5vh'} mt={'5vh'}>
            <Box>
            <Text >Items in Cart</Text>
            <Text>Cart Total Price</Text>
            <Text><span style={{fontWeight:'bold'}}>YOU PAY </span> <span style={{fontSize:'2vh'}}>(inclusive of All Taxes)</span></Text>
            </Box>
            <Box>
                <Text>1</Text>
                <Text>Rs 54,999</Text>
                <Text>Rs 54,999</Text>
            </Box>
        </Flex>
      </Box>
<Button w={'100%'} bg={'orange'}>Login To Proceed</Button>
    </Box>
  )
}

export default Delivery
