import {Box, Image, Button, Input, Flex, Heading} from "@chakra-ui/react"
import {Link} from "react-router-dom"

export default function Register(){

  

    return (<Box>
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
           <Input placeholder="Enter Your Email" mb={2}  />
           <Input placeholder="Enter Your Password" mb={2} />
           <Button w='100%' >Register</Button>
           <div style={{float:"left"}}>Already a User !! {"  "} <Link to="/login">SignIn</Link> </div>
         </Flex>
       </Box>
         </Box>   
       )     
    
}