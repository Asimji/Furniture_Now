
import {Box, Image, Button, Input, Flex, Heading} from "@chakra-ui/react"
import { useState } from "react";
import { useDispatch } from "react-redux";
import { postLogin } from "../redux/loginReducer/action";


export default function Login(){

    const [user,setUser]=useState({email:"",password:""});
   const dispatch=useDispatch()
   const handleClick=()=>{
      console.log(user);
      dispatch(postLogin(user))
   }

    return ( <Box>
        <Heading ml={'2vh'} color={'orange.300'}>Welcome User !</Heading>
         
         <Box height="90vh" display="flex" justifyContent="center" alignItems="center">
         <Flex direction="column" alignItems="center" border={'1px solid gray'} p='3vh' w={'60vh'}>
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
         </Flex>
       </Box>
         </Box>)
}