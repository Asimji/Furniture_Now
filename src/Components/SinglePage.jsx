import axios from "axios"
import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import {
Button,Text,Heading,Image,Box,SimpleGrid
} from "@chakra-ui/react"
import "./SinglePage.css"


export default function SinglePage(){

    
    const {id}=useParams()
    const [user,setuser]=useState("")

    useEffect(()=>{
        axios.get(`http://localhost:3000/data/${id}`).then((res)=>setuser(res.data)).catch((e)=>console.log(e))
    },[id])



    return  <Box mt={100}>
  
                 <SimpleGrid columns={2}  className="card"> 
      

      <Box >
         <Image
           src={user.image}
           alt={user.title}
           borderRadius='lg'
           w="600px"
           />
           </Box>

        
           <Box >
           <Heading size='md'> {user.brand}</Heading>
           <Text>{user.type}</Text>
           <Text>
             {user.description}
           </Text>
           <Text color='blue.600' fontSize='2xl'>
             Price : Rs {user.price}
           </Text>
           <Text>Select Size </Text>
           <SimpleGrid columns={5} gap={10} pl={30} >
            <Button w="80px" borderRadius="100px">XXL</Button>
            <Button w="80px" borderRadius="100px">XL</Button>
            <Button w="80px" borderRadius="100px">Large</Button>
            <Button w="80px" borderRadius="100px">Medium</Button>
            <Button w="80px" borderRadius="100px">Small</Button>
           </SimpleGrid>
           <SimpleGrid columns={2} gap={10} mt={10} pl={20} pr={20}>
        <Button variant='ghost' colorScheme='blue' p={5} borderRadius="10px" border="none" cursor="pointer"
        onClick={()=>{alert("Product Added Successfully")}}>
        ADD TO CART  </Button>
        <Button borderRadius="10px"  border="none" cursor="pointer">WISHLIST</Button>
           </SimpleGrid>

           <div style={{marginTop:"10px"}}>
               <div style={{textAlign:"left",marginLeft:"10px",padding:"5px"}} >
              
               <Text class="fa fa-bicycle" style={{fontSize:"18px"}}> Delivery Option </Text>
                </div>
        
                <div style={{textAlign:"left",marginLeft:"10px",padding:"10px",border:"none"}} >
                    <button class="fa fa-car" style={{fontSize:"18px",color:"red"}}> 211016 ✓ &nbsp;    Change</button>
                </div>
                <div style={{textAlign:"left",marginLeft:"10px",padding:"5px"}} >
        
                    <Text class="fa fa-rocket" style={{fontSize:"18px"}}> Get it by Wed, Mar 01</Text>
                </div>
                <div style={{textAlign:"left",marginLeft:"10px",padding:"5px"}} >
                 <Text class="fa fa-book" style={{fontSize:"18px"}}> Pay on delivery available</Text>
                </div>
                 <Text style={{fontSize:"18px",textAlign:"left",marginLeft:"10px"}}>Easy 14 days return & exchange available  <span id="uni"> <a href="./">More Info</a></span></Text>
               
                 <Text style={{paddingLeft: "10px"}}>100% Original Product</Text>
               </div>
            
           </Box>
       
      
       
     </SimpleGrid>
           

                
                   </Box>
}