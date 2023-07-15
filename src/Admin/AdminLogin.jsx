import { useState } from "react"
import { Link, useNavigate } from "react-router-dom";
import {Box, Image, Button, Input, Flex, Heading, Text} from "@chakra-ui/react"
import axios from "axios";


export default function AdminLogin(){
  const [admin,setAdmin]=useState({email:"",password:""})

  const handleSubmit=()=>{
    console.log(admin)
    axios.post(`${process.env.REACT_APP_URL}/login`,admin).then((res)=>{console.log(res);localStorage.setItem("adminTOken",JSON.stringify(res.data.token));alert(res.data.msg);window.location.reload()}).catch(e=>console.log(e))
  }

  return   <Box>
 <Heading ml={'2vh'} color={'orange.300'}>Welcome Admin !</Heading>
  
  <Box height="90vh" display="flex" justifyContent="center" alignItems="center">
  <Flex direction="column" alignItems="center" border={'1px solid gray'} p='3vh' w={'60vh'}>
    <Box mb={4} w={'100%'}>
      <Image
        src="https://hometown.gumlet.io/media/product/36/5453/20057/1.jpg?mode=fill&w=273&h=273&dpr=1.0"
        alt="Image"
        w='100%'
      />
    </Box>
    <Input placeholder="Enter Your Email" mb={2} onChange={(e)=>setAdmin({...admin,email:e.target.value})} />
    <Input placeholder="Enter Your Password" mb={2}  onChange={(e)=>setAdmin({...admin,password:e.target.value})} />
    <Button w='100%' onClick={handleSubmit}>Sign In</Button>
  </Flex>
</Box>
  </Box>
}