import axios from "axios"
import { useEffect, useState } from "react"
import { Link, useParams } from "react-router-dom"
import {
Button,Text,Heading,Image,Box,SimpleGrid
} from "@chakra-ui/react"

import Footer from "../Footer/Footer"
import NewNavbar from "./NewNavbar"


export default function SinglePage(){

  const loginToken=JSON.parse(localStorage.getItem("loginToken")) ||""
    const {_id}=useParams()
    const [user,setuser]=useState("")

    useEffect(()=>{
        axios.get(`${process.env.REACT_APP_URL}/product/products/${_id}`).then((res)=>{setuser(res.data.product)}).catch((e)=>console.log(e))
    },[_id])

    const handleClick=(id)=>{
      fetch(`${process.env.REACT_APP_URL}/cart/create`,{
        method:'POST',
        headers:{
            "Content-Type":"application/json",
            Authorization:`Bearer ${loginToken}`
        },
        body:JSON.stringify(user)
    }).then(res=>res.json()).then((res)=>{alert(res.msg)}).catch(e=>console.log(e))
    }


    return  <Box >
  <NewNavbar/>
                 <SimpleGrid columns={{lg:2,base:1}}  className="card"> 
      

      <Box ml={{lg:'10vh'}}>
         <Image
           src={user.image}
           alt={user.title}
           borderRadius='lg'
           w="80vh"
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
           <SimpleGrid columns={{lg:5,base:3}} gap={10} pl={{lg:30}} >
            <Button w="80px" borderRadius="100px">XXL</Button>
            <Button w="80px" borderRadius="100px">XL</Button>
            <Button w="80px" borderRadius="100px">Large</Button>
            <Button w="80px" borderRadius="100px">Medium</Button>
            <Button w="80px" borderRadius="100px">Small</Button>
           </SimpleGrid>
           <SimpleGrid columns={2} gap={10} mt={10} pl={{lg:20}} pr={{lg:20}}>
        <Button variant='ghost' colorScheme='blue' p={5} borderRadius="10px" border="none" cursor="pointer"
          onClick={()=>handleClick(user._id)}>
        ADD TO CART  </Button>
        <Button borderRadius="10px"  border="none" cursor="pointer">
          <Link to="/cart">Payment</Link>
        </Button>
           </SimpleGrid>

           <div style={{marginTop:"10px"}}>
               <div style={{textAlign:"left",marginLeft:"10px",padding:"5px"}} >
              
               <Text className="fa fa-bicycle" style={{fontSize:"18px"}}> Delivery Option </Text>
                </div>
        
                <div style={{textAlign:"left",marginLeft:"10px",padding:"10px",border:"none"}} >
                    <button className="fa fa-car" style={{fontSize:"18px",color:"red"}}> 211016 ✓ &nbsp;    Change</button>
                </div>
                <div style={{textAlign:"left",marginLeft:"10px",padding:"5px"}} >
        
                    <Text className="fa fa-rocket" style={{fontSize:"18px"}}> Get it by Wed, Mar 01</Text>
                </div>
                <div style={{textAlign:"left",marginLeft:"10px",padding:"5px"}} >
                 <Text className="fa fa-book" style={{fontSize:"18px"}}> Pay on delivery available</Text>
                </div>
                 <Text style={{fontSize:"18px",textAlign:"left",marginLeft:"10px"}}>Easy 14 days return & exchange available  <span id="uni"> <a href="./">More Info</a></span></Text>
               
                 <Text style={{paddingLeft: "10px"}}>100% Original Product</Text>
               </div>
            
           </Box>
       
      
       
     </SimpleGrid>
           

             <Footer/>   
                   </Box>
}