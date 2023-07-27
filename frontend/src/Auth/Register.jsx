import {Box, Image, Button, Input, Flex, Heading} from "@chakra-ui/react"
import { useState } from "react";
import {Link, useNavigate} from "react-router-dom"

export default function Register(){

  const [user,setUser]=useState({Full_Name:"",email:"",password:"",age:0});
  const navigate=useNavigate()

  const handleSubmit=()=>{
    if(!user.Full_Name || !user.email || !user.password || !user.age){
      alert("Enter all Field")
    }
    else{
      user.age = Number(user.age)
      console.log(user)
       fetch(`${process.env.REACT_APP_URL}/user/signup`,{
        method:"POST",
        headers:{
          "Content-Type":"application/json"
        },
        body:JSON.stringify(user)
       }).then(res=>res.json()).then((res)=>{alert(res.msg);navigate("/login")}).catch(e=>console.log(e))
    }
  }

    return (<Box>
        <Heading ml={'2vh'} color={'orange.300'}>DO SIGNUP !</Heading>
         
         <Box  display="flex" justifyContent="center" alignItems="center">
         <Flex direction="column" alignItems="center" border={'1px solid gray'} w={'60vh'}>
           <Box mb={4} w={'100%'} h={'40vh'}>
             <Image
               src="https://ii1.pepperfry.com/assets/d15b5cec-89ef-428e-962d-85bf1b3681e6.jpg"
               alt="Image"
               w={'100%'}
               h='100%'
             />
           </Box>
           <Input placeholder="Enter Your Name" mb={2} onChange={(e)=>setUser({...user,Full_Name:e.target.value})}  />
           <Input placeholder="Enter Your Email" mb={2} onChange={(e)=>setUser({...user,email:e.target.value})} />
           <Input placeholder="Enter Your Password" mb={2} onChange={(e)=>setUser({...user,password:e.target.value})}/>
           <Input type="number" placeholder="Enter Your Age" mb={2} onChange={(e)=>setUser({...user,age:e.target.value})} />
           <Button w='100%' onClick={handleSubmit}>Register</Button>
           <Flex gap={'20vh'}>
         <Box >Not a User ! {"  "} <span style={{color:'blue',fontWeight:'bold',fontSize:'3vh'}}><Link to="/login" >SignIn</Link> </span> </Box>
         <Link to='/'>Home</Link>
         </Flex>
         </Flex>
       </Box>
         </Box>   
       )     
    
}