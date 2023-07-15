import { Box, Text } from '@chakra-ui/react'
import React, { useEffect, useState } from 'react'
import { useSearchParams } from 'react-router-dom'

const Sidebar = ({page,limit}) => {
    const [searchParams,setSearchParams]=useSearchParams();
    
    const initType=searchParams.getAll('type')
    const initOrder=searchParams.get('order')
    const [type,setType]=useState(initType||[])
    const [order,setOrder]=useState(initOrder||"")

   

    const handleType=(e)=>{
        const {value}=e.target
   let newType=[...type]

   if(newType.includes(value)){
      newType=newType.filter((el)=>el!==value)
   }
   else{
    newType.push(value)
   }
   setType(newType)

    }

    useEffect(()=>{
        let params={
            type,
            page,
            limit
        }
        order && (params.order=order)

        setSearchParams(params)
    },[type,order,page,limit])

    console.log(searchParams)
    console.log(order)
  return (
    <Box>
      <Box  fontSize={'3vh'} >
        {/* Filter Part */}
        <Text>Filter By Type</Text>
         <Box>
            <input type='checkbox' value={'dining'} checked={type.includes('dining')} onChange={handleType}/>
            <label  style={{marginLeft:'1vh'}}>Dining Set</label>
         </Box>
         <Box mr={'4vh'}>
            <input type='checkbox' value={'bed'} checked={type.includes('bed')}  onChange={handleType}/>
            <label style={{marginLeft:'1vh'}}>Bed Set</label>
         </Box>
         <Box mr={'3vh'}>
            <input type='checkbox' value={'sofa'} checked={type.includes('sofa')} onChange={handleType}/>
            <label style={{marginLeft:'1vh'}}>Sofa Set</label>
         </Box>
         <Box mr={'1.5vh'}>
            <input type='checkbox' value={'chair'} checked={type.includes('chair')} onChange={handleType}/>
            <label style={{marginLeft:'1vh'}}>Chair Set</label>
         </Box>
      </Box>
      <Box  fontSize={'3vh'} mt={'10vh'}>
        <Text>Sort By Price</Text>
        <Box>
            <input type='radio' name='sort' value={'asc'} onChange={(e)=>setOrder(e.target.value)}/>
            <label style={{marginLeft:'1vh'}}>Ascending</label>
        </Box>
        <Box ml={'1.5vh'}>
        <input type='radio' name='sort' value={'desc'} onChange={(e)=>setOrder(e.target.value)}/>
        <label style={{marginLeft:'1vh'}}>Descending</label>
        </Box>
      </Box>
    </Box>
  )
}

export default Sidebar
