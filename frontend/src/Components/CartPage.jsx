import { Box, Button, Center, Flex, Grid, Heading, Image, Input, Select, Text } from '@chakra-ui/react'
import React, { useEffect, useState } from 'react'
import {Link} from "react-router-dom"
import Delivery from './Delivery'
import axios from 'axios'

const CartPage = () => {

  const loginToken=JSON.parse(localStorage.getItem('loginToken'))||""
  const [data,setData]=useState([])
  const [quant,setQuant]=useState(1)


  let total=0;
  let count=data.length
  let totalQuantity=0
  let userId

for(let i=0;i<data.length;i++){
  total+=(data[i].price * data[i].quantity);
  totalQuantity+=data[i].quantity
  userId=data[i].userId
}


const fetchedData=()=>{
  axios.get(`${process.env.REACT_APP_URL}/cart`,{
    headers:{
      Authorization:`Bearer ${loginToken}`
    }
   }).then(res=>setData(res.data.cart)).catch(e=>console.log(e))
}

  useEffect(()=>{
 fetchedData()
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
  }).then(res=>res.json()).then((res)=>{fetchedData()}).catch(e=>console.log(e))
  
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
      }).then(res=>res.json()).then((res)=>{fetchedData()}).catch(e=>console.log(e))
  }

  const handleDelete=(id)=>{
    axios.delete(`${process.env.REACT_APP_URL}/cart/delete/${id}`,{
      headers:{
        Authorization:`Bearer ${loginToken}`
      }
    }).then((res)=>{alert(res.data.msg);fetchedData()}).catch(e=>console.log(e))
  }

  return (
    <Box>
      <Flex gap={{lg:'50vh',base:0}} direction={{base:'column',lg:'row'}}>
    <span> <Link to="/">Home</Link> / <Link to='/product'>Product</Link>  </span>
      
      <Heading fontSize={{lg:'5vh',base:'2vh'}} textAlign={{base:'left',lg:'center'}}><span style={{color:'red'}}>Furniture_Now</span> Cart Page</Heading>
      
      </Flex>

      <Flex p={{lg:'5vh',base:0}} gap={'2vh'} direction={{base:'column',lg:'row'}}>
        <Box textAlign={'left'}  >
         
  {data.length>0 &&  <Heading>Your Cart({totalQuantity} item)</Heading>}
   <Flex flexDirection={'column'}>
    {data.length ? data.map((item,i)=>{
      return <Box key={item._id}>
      <Button w={'100%'}>You Saved Rs 15,000 on This Order</Button>
<Grid templateColumns={{lg:'repeat(2,1fr)',base:'repeat(1,1fr)'}} gap={'2vh'} border={'1px solid gray'} p={{lg:'2vh',base:0}} mt={'2vh'}>
    <Box textAlign={'left'}>
        <Box >
        <Image src={item.image} />
        </Box>
        <Flex gap={'2vh'} mt={'2vh'}>
        <Button   >Move To WishList</Button>
        <Button  color={'red'} onClick={()=>handleDelete(item._id)}>Delete</Button>
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
                <Text ml={{lg:'2vh',base:0}}>{item.price * item.quantity}</Text>
                <Text>- Rs 15,000</Text>
                <Text ml={{lg:'2vh',base:0}}>{item.price * item.quantity - 15000}</Text>
            </Box>
        </Flex>
    </Box>
</Grid>
      </Box>
    }) : <h1>Your Cart is Empty ! <br/> Visit {" >>"} <span style={{color:'blue',textDecoration:'underline'}} > <Link to="/product">Product</Link> </span></h1>}
</Flex>
        </Box>
        <Box mt={{lg:'10vh',base:0}}>
        <Delivery total={total} count={count} totalQuantity={totalQuantity} userId={userId} fetchedData={fetchedData}/>
        </Box>
      </Flex>
    </Box>
  )
}

export default CartPage
