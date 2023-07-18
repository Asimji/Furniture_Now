import {Box, Image, Button, Input, Flex, Heading, Text} from "@chakra-ui/react"
import {useDispatch, useSelector} from 'react-redux'
import { useState} from "react"
import {useParams,useNavigate, Link} from "react-router-dom"
import { editAdmin } from "../redux/authReducer/action"



const EditProduct=()=>{
const {id}=useParams()
const store=useSelector(store=>store.authReducer.products)
    const dispatch=useDispatch()
    const navigate=useNavigate()
   console.log(store)
    const existedData=store.filter((item)=>{
      return id===item._id
    })
    console.log(existedData)

    const initValue={
        brand:existedData[0].brand,
        image:existedData[0].image,
        description:existedData[0].description,
        price:existedData[0].price,
        type:existedData[0].type,
        quantity:existedData[0].quantity
    }
    const [edit,setEdit]=useState(initValue)

    // console.log(edit)



const handleChange=(e)=>{
const {name,value}=e.target;
  setEdit((prev)=>{
    return {...prev,  [name]: name === 'price' ? +value : value}
  })
}

const handleSubmit=()=>{
    console.log('edit',edit)
    dispatch(editAdmin(id,edit))
}

    return (
        <Box>
            <Link to={'/admin'}>Home {">>>"}</Link>                
         <Box height="90vh" display="flex" justifyContent="center" alignItems="center">
         <Flex direction="column" alignItems="center" border={'1px solid gray'} p='3vh' w={'60vh'}>
        <Input name="brand" value={edit.brand}  mb={2} onChange={handleChange} />
           <Input name="image" value={edit.image} mb={2} onChange={handleChange}  />
           <Input name='description' value={edit.description} mb={2}  onChange={handleChange} />
           <Input name='price' value={edit.price} mb={2} onChange={handleChange}  />
           <Input name="type" value={edit.type} mb={2}  onChange={handleChange} />
           <Input name="quantity" value={edit.quantity} mb={2}  onChange={handleChange} />
           <Button w={'100%'} onClick={handleSubmit} >Submit</Button>
         </Flex>
       </Box>
         </Box>
    )
}

export default EditProduct