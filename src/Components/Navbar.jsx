import { Box, Grid, Input, Heading, HStack, IconButton} from "@chakra-ui/react"
import {EmailIcon, Search2Icon,BellIcon,LockIcon} from '@chakra-ui/icons'
import { Link} from "react-router-dom"



export default function Navbar(){


    return  (
        <Grid templateColumns='repeat(3,1fr)' justifyContent='space-between' marginTop="10px">
            <Box>

      <Input type="text" placeholder="Search" w="150px" icon={<Search2Icon/>}/> 
            </Box>

          <Heading>Furniture Now</Heading>
       
         
          

       <HStack>
       <Link> <IconButton w="50px" bg="white" icon={<LockIcon/>}/> </Link>
       <Link> <IconButton w="50px" bg="white" icon={<EmailIcon/>}/> </Link>
       <Link> <IconButton w="50px" bg="white" icon={<EmailIcon/>}/> </Link>
       <Link> <IconButton w="50px" bg="white" icon={<BellIcon/>}/> </Link>

       </HStack>
        </Grid>
    )
}