import { useContext, useEffect, useState } from "react"
import  axios  from "axios"
import { Card, CardBody, CardFooter,Image,Stack,Heading,Divider,ButtonGroup,Button, SimpleGrid,Text, Box, Center} from '@chakra-ui/react'

import Pagination from "./pagination"
import { Link } from "react-router-dom"
import { SearchContext } from "../Context/SearchContext"
import "./product.css"



export default function Product(){

 const [data,setData]=useState([])
 

 const [page,setPage]=useState(1);
 const [count,setcount]=useState("")
 const [SelValue,setSelValue]=useState("")

 const value=useContext(SearchContext)


 
 

const handleSelect=(e)=>{
  setSelValue(e.target.value)
  console.log(SelValue)
}

const handleAdd=()=>{
  alert("Product Added Successfully")
}
 
const limit=6;

useEffect(()=>{
  if(SelValue===""){
  ( axios.get(`http://localhost:3000/data?_page=${page}&_limit=${limit}`,{
      page:page,

    }).then((res)=>{setData(res.data);setcount(res.data.length)}).catch((e)=>console.log(e)))
  }
else {
(
    axios.get(`http://localhost:3000/data?_page=${page}&_limit=${limit}&type=${SelValue}`,{
      page:page,

    }).then((res)=>{setData(res.data);console.log(res);setcount(res.data.length)}).catch((e)=>console.log(e))
  )
}
   
}, [page,SelValue])

console.log(count)

const handlePage=(page)=>{
  setPage(page)
}

    return (
        <Box mt={90} >

    <div style={{float:"left",marginLeft:"85px",width:"200px"}}>

     <select onChange={handleSelect} style={{width:"100%"}}>
      <option value="">Filter By Category</option>
      <option value="dining">Dining Set</option>
      <option value="bed">Bed</option>
      <option value="sofa">Sofa</option>
      <option value="chair">Chair</option>
      </select> 
    </div>
 
      <br />
       
     <SimpleGrid columns={3} spacing={10} mt={10} className="card1">
          {data.filter((user)=>user.type.toLowerCase().includes(value.query)||user.brand.toLowerCase().includes(value.query)).map((item)=>{
              return (
                  <Card maxW='sm' key={item.id} m={5}> 
        <CardBody>
          <Image
            src={item.image}
            alt={item.title}
            borderRadius='lg'
          />
          <Stack mt='6' spacing='3'>
            <Heading size='md'> {item.brand}</Heading>
            <Text>
              {item.description}
            </Text>
            <Text color='blue.600' fontSize='2xl'>
              Price : Rs {item.price}
            </Text>
          </Stack>
        </CardBody>
        <Divider />
        <Center mt={5}>

        <CardFooter>
          <ButtonGroup spacing='50'  >
            <Link to={`/product/${item.id}`}>
            <Button variant='solid' colorScheme='blue' p={5} borderRadius="10px" border="none" cursor="pointer" 
            >
              View More
            </Button>
              </Link>
            <Button variant='ghost' colorScheme='blue' p={5} borderRadius="10px" border="none" cursor="pointer" 
             onClick={handleAdd}>
              Add to cart
            </Button>
          </ButtonGroup>
        </CardFooter>
        </Center>
      </Card>
            )
          })}

                    </SimpleGrid>
                    <Pagination handlePage={handlePage} current_page={page} count={count}/>
                    </Box>
        )
}