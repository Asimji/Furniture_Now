import { Box, Button, Center, Flex, Grid, Heading, Image, Input, Select, Text } from '@chakra-ui/react'
import React, { useEffect, useState } from 'react'
import {Link} from "react-router-dom"
import Delivery from './Delivery'
import axios from 'axios'

const CartPage = () => {

  const loginToken=JSON.parse(localStorage.getItem('loginToken'))||""
  const [data,setData]=useState([])
  const [quant,setQuant]=useState(1)
  console.log(data)

  let total=0;
  let count=data.length
  let totalQuantity=0

for(let i=0;i<data.length;i++){
  total+=(data[i].price * data[i].quantity);
  totalQuantity+=data[i].quantity
}
console.log(totalQuantity)

  useEffect(()=>{
 axios.get(`${process.env.REACT_APP_URL}/cart`,{
  headers:{
    Authorization:`Bearer ${loginToken}`
  }
 }).then(res=>setData(res.data.cart)).catch(e=>console.log(e))
  },[])

 

  const handleAdd=(id,val)=>{
    val=val+1
    fetch(`${process.env.REACT_APP_URL}/cart/update/${id}`,{
      method:'PATCH',
      headers:{
          "Content-Type":"application/json",
          Authorization:`Bearer ${loginToken}`
      },
      body:JSON.stringify({quantity:val})
  }).then(res=>res.json()).then((res)=>{console.log(res);window.location.reload()}).catch(e=>console.log(e))
  
  }
  const handleSubtract=(id,val)=>{
      val=val-1;
    
      fetch(`${process.env.REACT_APP_URL}/cart/update/${id}`,{
        method:"PATCH",
        headers:{
          "Content-Type":"application/json",
          Authorization:`Bearer ${loginToken}`
        },
        body:JSON.stringify({quantity:val})
      }).then(res=>res.json()).then((res)=>{console.log(res);window.location.reload()}).catch(e=>console.log(e))
  }

  const handleDelete=(id)=>{
    axios.delete(`${process.env.REACT_APP_URL}/cart/delete/${id}`,{
      headers:{
        Authorization:`Bearer ${loginToken}`
      }
    }).then((res)=>{alert(res.data.msg);window.location.reload()}).catch(e=>console.log(e))
  }

  return (
    <Box>
      <Flex gap={'50vh'}>
    <Link to="/product">back {"<<<"}</Link>
      <Center>
      <Heading><span style={{color:'red'}}>Furniture_Now</span> Cart Page</Heading>
      </Center>
      </Flex>

      <Flex p={'5vh'} gap={'2vh'}>
        <Box textAlign={'left'} h={'84vh'} >
         
   <Heading>Your Cart({totalQuantity} item)</Heading>
   <Flex flexDirection={'column'}>
    {data.length>0 && data.map((item,i)=>{
      return <Box key={item._id}>
      <Button w={'100%'}>You Saved Rs 15,000 on This Order</Button>
<Grid templateColumns={'repeat(2,1fr)'} gap={'2vh'} border={'1px solid gray'} h={'81%'} p={'2vh'} mt={'2vh'}>
    <Box textAlign={'left'}>
        <Box  w={'50vh'} h={'40vh'}>
        <Image src={item.image} w={'100%'} h={'100%'}/>
        </Box>
        <Flex gap={'2vh'} mt={'2vh'}>
        <Button w={'50%'}  >Move To WishList</Button>
        <Button w={'50%'} color={'red'} onClick={()=>handleDelete(item._id)}>Delete</Button>
        </Flex>
    </Box>
    <Box  textAlign={'left'}>
        <Text>{item.brand} <br /> {item.description} 
        </Text>
        <Flex gap={5} >
       <Button onClick={()=>handleAdd(item._id,item.quantity)}>+</Button>
        <Text mt={'1.5vh'}>{item.quantity}</Text>
        <Button  isDisabled={item.quantity===1 ? true : false} onClick={()=>handleSubtract(item._id,item.quantity)}>-</Button>
        </Flex>
        <Flex gap={'2vh'} mt={'2vh'}>
            <Box>
                <Text>MRP </Text>
                <Text>Retail Discount</Text>
                <Text>ITEM PRICE</Text>
            </Box>
            <Box>
                <Text ml={'2vh'}>{item.price * item.quantity}</Text>
                <Text>- Rs 15,000</Text>
                <Text ml={'2vh'}>{item.price * item.quantity - 15000}</Text>
            </Box>
        </Flex>
    </Box>
</Grid>
      </Box>
    })}
</Flex>
        </Box>
        <Box mt={'12vh'}>
        <Delivery total={total} count={count} totalQuantity={totalQuantity}/>
        </Box>
      </Flex>
    </Box>
  )
}

export default CartPage
