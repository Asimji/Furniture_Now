import { Box} from "@chakra-ui/react";

export default function Admin(){
    // "brand": "Garcia Fabric",
    // "image": "https://hometown.gumlet.io/media/product/89/0063/31713/1.jpg?mode=fill&w=273&h=273&dpr=1.0",
    // "description": "Stylish & Comfy",
    // "price": 65700,
    // "type": "sofa",
    // "id": 3

    return <Box mt={100} >
        <form style={{margin:"20px",padding:"20px"}}>
          <Box m={15}>
          <input name="brand" placeholder="Enter the Brand"></input>
          </Box>
          <Box m={15}>   
         <input name="description" placeholder="Enter Description"></input>
         </Box>
          <Box m={15}>
<input name="type" placeholder="Enter the Type"></input>
          </Box>
          <Box m={15}>
          <input name="price" type="number" placeholder="Enter the Price"></input>
          </Box>
          <Box m={15}>
          <input placeholder="Attached the image"/>

          </Box>
          <Box m={15}>
          <input type="submit" />
          </Box>
        </form>
    </Box>
}