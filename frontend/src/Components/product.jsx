import { memo, useContext, useEffect, useState } from "react"
import { Card, CardBody, CardFooter,Image,Stack,Heading,Divider,ButtonGroup,Button, SimpleGrid,Text, Box, Center, Flex} from '@chakra-ui/react'

import Pagination from "./pagination"
import { Link, useLocation, useSearchParams } from "react-router-dom"
import { SearchContext } from "../Context/SearchContext"
import { useDispatch, useSelector } from "react-redux"
import { getProducts } from "../redux/productReducer/action"
import Sidebar from "./Sidebar"
import Footer from "../Footer/Footer"
import NewNavbar from "./NewNavbar"



const Product=()=>{

  const loginToken=JSON.parse(localStorage.getItem("loginToken")) ||""
  
  
  const [searchParams,setSearchParams]=useSearchParams()
  const location=useLocation()  
  const store=useSelector(store=>store.productReducer.products)

  const dispatch=useDispatch()
  
  const initPage=searchParams.get('page')

  const [page,setPage]=useState(initPage||1);
  const value=useContext(SearchContext)
 
 
 const obj={
  params:{
      page:searchParams.get('page'),
      limit:searchParams.get('limit'),
      type:searchParams.getAll('type'),
      sortBy:searchParams.get('order') && 'price',
      sortOrder:searchParams.get('order') 
  }
}



 
const limit=6;
const count=Math.ceil(24/limit)



useEffect(()=>{
dispatch(getProducts(obj)) 



}, [location.search])

const handlePage=(page)=>{
  setPage(page)
}

const handleClick=(id)=>{
  let newData=store.filter((item,i)=>{
    return item._id===id
  })

  fetch(`${process.env.REACT_APP_URL}/cart/create`,{
    method:'POST',
    headers:{
        "Content-Type":"application/json",
        Authorization:`Bearer ${loginToken}`
    },
    body:JSON.stringify(newData[0])
}).then(res=>res.json()).then((res)=>{alert(res.msg)}).catch(e=>console.log(e))
}

    return (
        <Box >
          <Box >
<NewNavbar/>
          </Box>
          <Flex gap={'2vh'} direction={{lg:'row',base:'column'}}>
    <Box ml={{lg:'5vh'}} border={'1px solid gray'} p={{lg:'2vh'}} w={{lg:'50vh'}} h={{lg:'80vh'}}>
      <Sidebar page={page} limit={limit}/>
    </Box>
    <Box>
       <SimpleGrid templateColumns={{lg:'repeat(3,1fr)',md:'repeat(2,1fr)',base:'repeat(1,1fr)'}}   mr={{lg:'5vh',base:0}} >
          {store.map((item)=>{
              return (
                  <Card key={item._id}  textAlign={'left'}> 
        <CardBody>
          <Image
            src={item.image}
            alt={item.title}
            borderRadius='lg'
          />
          <Stack >
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
          <ButtonGroup spacing='10'  >
            <Link to={`/product/${item._id}`}>
            <Button variant='solid' colorScheme='blue'  borderRadius="10px" border="none" cursor="pointer" 
            >
              View More
            </Button>
              </Link>
            <Button variant='ghost' colorScheme='blue'borderRadius="10px" border="none" cursor="pointer" 
          onClick={()=>handleClick(item._id)}
             >
              Add to cart
            </Button>
          </ButtonGroup>
        </CardFooter>
        </Center>
      </Card>
            )
          })}

                    </SimpleGrid>
                    <Box float={{lg:"right",base:'left'}} ml={{lg:'9vh',base:0}} mt={'2vh'}>
             <Pagination handlePage={handlePage} current_page={page} count={count}/>
                    </Box>
       </Box>
          </Flex>
      
    <Footer/>
                    </Box>
        )
}

export default memo(Product)