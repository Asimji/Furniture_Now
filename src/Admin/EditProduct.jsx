import {Box, Image, Button, Input, Flex, Heading, Text} from "@chakra-ui/react"
import {useDispatch, useSelector} from 'react-redux'
import {useEffect, useState} from "react"
import {getSingleProduct} from "../redux/authReducer/action.js"
import {editAdmin} from "../redux/authReducer/action.js"
import {useParams,useNavigate} from "react-router-dom"



const EditProduct=()=>{
const {id}=useParams()
const store=useSelector(store=>store.authReducer.singleProduct)
    const dispatch=useDispatch()
    const navigate=useNavigate()
   
    useEffect(()=>{
       dispatch(getSingleProduct(id))     
        },[])

    const initValue={
        brand:store.brand,
        image:store.image,
        description:store.description,
        price:store.price,
        type:store.type
    }
    const [edit,setEdit]=useState(initValue)

    console.log(edit)



const handleChange=(e)=>{
const {name,value}=e.target;
  setEdit((prev)=>{
    return {...prev,  [name]: name === 'price' ? +value : value}
  })
}

const handleSubmit=()=>{
    console.log('edit',edit)
    dispatch(editAdmin(id,edit))
    navigate('/admin')
}

    return (
        <Box>
                            
         <Box height="90vh" display="flex" justifyContent="center" alignItems="center">
         <Flex direction="column" alignItems="center" border={'1px solid gray'} p='3vh' w={'60vh'}>
        <Input name="brand" value={edit.brand}  mb={2} onChange={handleChange} />
           <Input name="image" value={edit.image} mb={2} onChange={handleChange}  />
           <Input name='description' value={edit.description} mb={2}  onChange={handleChange} />
           <Input name='price' value={edit.price} mb={2} onChange={handleChange}  />
           <Input name="type" value={edit.type} mb={2}  onChange={handleChange} />
           <Button w={'100%'} onClick={handleSubmit} >Submit</Button>
         </Flex>
       </Box>
         </Box>
    )
}

export default EditProduct