
import {Box, Image, Button, Input, Flex, Heading} from "@chakra-ui/react"
import { useState } from "react";
import { useDispatch } from "react-redux";
import { postLogin } from "../redux/loginReducer/action";
import {Link, useNavigate} from "react-router-dom"


export default function Login(){
  const navigate=useNavigate()

    const [user,setUser]=useState({email:"",password:""});
   const dispatch=useDispatch()
   const handleClick=()=>{
    if(!user.email || !user.password){
      alert("Please Fillup all field")
    }
    else{
      dispatch(postLogin(user))
      navigate("/")
    }
   }

    return ( <Box>
        <Heading ml={'2vh'} color={'orange.300'}>Welcome User !</Heading>
         
         <Box  display="flex" justifyContent="center" alignItems="center">
         <Flex direction="column"alignItems="center" border={'1px solid gray'} p='3vh' w={'60vh'}>
           <Box mb={4} w={'100%'}>
             <Image
               src="https://hometown.gumlet.io/media/product/36/5453/20057/1.jpg?mode=fill&w=273&h=273&dpr=1.0"
               alt="Image"
               w='100%'
             />
           </Box>
           <Input placeholder="Enter Your Email" mb={2} onChange={(e)=>setUser({...user,email:e.target.value})} />
           <Input placeholder="Enter Your Password" mb={2} onChange={(e)=>setUser({...user,password:e.target.value})} />
           <Button w='100%' onClick={handleClick} >Sign In</Button>
           <Flex gap={'20vh'}>
         <Box >Not a User ! {"  "} <span style={{color:'red',fontWeight:'bold', fontSize:'3vh'}}> <Link to="/register" >Signup</Link> </span> </Box>
         <Link to='/'>Home</Link>
         </Flex>
         </Flex>
        
       </Box>
         </Box>)
}