import axios from "axios"
import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import {
Button,Center,Divider,Text,Heading,Stack,Image,CardBody,Card,Box
} from "@chakra-ui/react"



export default function SinglePage(){

    
    const {id}=useParams()
    const [user,setuser]=useState("")

    useEffect(()=>{
        axios.get(`http://localhost:3000/data/${id}`).then((res)=>setuser(res.data)).catch((e)=>console.log(e))
    },[id])



    return  <Box mt={30}>
  
                 <Card maxW='sm'  m={5}> 
       <CardBody>
         <Image
           src={user.image}
           alt={user.title}
           borderRadius='lg'
         />
         <Stack mt='6' spacing='3'>
           <Heading size='md'> {user.brand}</Heading>
           <Text>
             {user.description}
           </Text>
           <Text color='blue.600' fontSize='2xl'>
             Price : Rs {user.price}
           </Text>
         </Stack>
       </CardBody>
       <Divider />
       <Center mt={5}>

      <Button variant='ghost' colorScheme='blue' p={5} borderRadius="10px" border="none" cursor="pointer">
             Add to cart
           </Button>
       
      
       </Center>
     </Card>
           

                
                   </Box>
}