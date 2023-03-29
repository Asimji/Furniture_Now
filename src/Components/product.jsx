import { useEffect, useState } from "react"
import  axios  from "axios"
import { Card, CardBody, CardFooter,Image,Stack,Heading,Divider,ButtonGroup,Button, SimpleGrid,Text, Box,Input} from '@chakra-ui/react'
import { Search2Icon } from "@chakra-ui/icons"
export default function Product(){

 const [data,setData]=useState([])
 const [query,setQuery]=useState("")


useEffect(()=>{

    axios.get(`https://json-server-2rqb.onrender.com/data`).then((res)=>{setData(res.data);console.log(res)}).catch((e)=>console.log(e))
},[])



    return (
        <Box>
     <Input type="text" placeholder="Search" w="150px" icon={<Search2Icon/>} value={query} onChange={(e)=>{setQuery(e.target.value)}} /> 
       
     <SimpleGrid columns={3} spacing={10} mt={10}>
          {data.map((item)=>{
              return (
                  <Card maxW='sm' key={item.id}> 
        <CardBody>
          <Image
            src={item.image}
            alt={item.title}
            borderRadius='lg'
          />
          <Stack mt='6' spacing='3'>
            <Heading size='md'>Model : {item.model}</Heading>
            <Text>
              {item.description}
            </Text>
            <Text color='blue.600' fontSize='2xl'>
              Price : Rs {item.price}
            </Text>
          </Stack>
        </CardBody>
        <Divider />
        <CardFooter>
          <ButtonGroup spacing='2'>
            <Button variant='solid' colorScheme='blue'>
              View More
            </Button>
            <Button variant='ghost' colorScheme='blue'>
              Add to cart
            </Button>
          </ButtonGroup>
        </CardFooter>
      </Card>
            )
          })}

                    </SimpleGrid>
                    </Box>
        )
}