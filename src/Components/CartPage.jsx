import { Box, Button, Center, Flex, Grid, Heading, Image, Input, Select, Text } from '@chakra-ui/react'
import React from 'react'
import f1 from "../Images/Furniture_1.png"
import Delivery from './Delivery'

const CartPage = () => {
  return (
    <Box>
      <Center>
      <Heading><span style={{color:'red'}}>Furniture_Now</span> Cart Page</Heading>
      </Center>

      <Flex p={'5vh'} gap={'2vh'}>
        <Box textAlign={'left'} h={'84vh'} >
   <Heading>Your Cart(1 item)</Heading>
<Button w={'100%'}>You Saved Rs 15,000 on This Order</Button>
<Grid templateColumns={'repeat(2,1fr)'} gap={'2vh'} border={'1px solid gray'} h={'81%'} p={'2vh'} mt={'2vh'}>
    <Box textAlign={'left'}>
        <Box  w={'50vh'} h={'40vh'}>
        <Image src={f1} w={'100%'} h={'100%'}/>
        </Box>
        <Text>Enter PIN Code for Delivery <br /> Details <Input/> </Text>
        <Button w={'100%'}>Move To WishList</Button>
    </Box>
    <Box  textAlign={'left'}>
        <Text>Lorem ipsum dolor sit amet consectetur <br /> adipisicing elit. Eligendi at veniam facilis, 
        </Text>
        <Select>
            <option value="">QTY 1</option>
            <option value="">QTY 2</option>
        </Select>
        <Flex gap={'2vh'} mt={'2vh'}>
            <Box>
                <Text>MRP </Text>
                <Text>Retail Discount</Text>
                <Text>ITEM PRICE</Text>
            </Box>
            <Box>
                <Text ml={'2vh'}>Rs 69,000</Text>
                <Text>- Rs 15,000</Text>
                <Text ml={'2vh'}>Rs 54,999</Text>
            </Box>
        </Flex>
    </Box>
</Grid>
        </Box>
        <Box mt={'12vh'}>
        <Delivery/>
        </Box>
      </Flex>
    </Box>
  )
}

export default CartPage
