import { useEffect, useState } from "react"
import  axios  from "axios"
import { Card, CardBody, CardFooter,Image,Stack,Heading,Divider,ButtonGroup,Button, SimpleGrid,Text, Box,Input, Center} from '@chakra-ui/react'
import { Search2Icon } from "@chakra-ui/icons"
import Pagination from "./pagination"
import { Link } from "react-router-dom"



export default function Product(){

 const [data,setData]=useState([])
 const [query,setQuery]=useState("")

 const [page,setPage]=useState(1);
 const [count,setcount]=useState("")


 
const limit=6;

useEffect(()=>{

    axios.get(`http://localhost:3000/data?_page=${page}&_limit=${limit}`,{
      page:page
    }).then((res)=>{setData(res.data);console.log(res);setcount(res.data.length)}).catch((e)=>console.log(e))
},[page])

console.log(count)

const handlePage=(page)=>{
  setPage(page)
}

    return (
        <Box>
     <Input type="text" placeholder="Search Product" w="250px" h={28} icon={<Search2Icon/>} value={query} onChange={(e)=>{setQuery(e.target.value)}} mt={10}/> 
       
     <SimpleGrid columns={3} spacing={10} mt={10}>
          {data.filter((user)=>user.type.toLowerCase().includes(query)||user.brand.toLowerCase().includes(query)).map((item)=>{
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
            <Button variant='ghost' colorScheme='blue' p={5} borderRadius="10px" border="none" cursor="pointer">
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