import { Box, SimpleGrid, Input, MenuButton, Menu,Image,Heading, } from "@chakra-ui/react";
import { HamburgerIcon } from "@chakra-ui/icons";
import logo1 from "../Images/cart.png"
import logo2 from "../Images/love.png"
import logo3 from "../Images/icon2.png"
import logo4 from "../Images/notify.png"


export default function Navbar(){

    return <Box>

  <Box>
    {/* 1st part */}
    <SimpleGrid column={3}>
<Input _placeholder="Search" />

<Heading>Furniture Now</Heading>

<Box>
    <SimpleGrid>
        <Menu isLazy>
        <MenuButton icon={<HamburgerIcon />}></MenuButton>
        </Menu>
        <Menu isLazy>
        <MenuButton icon={<HamburgerIcon />}></MenuButton>
        </Menu>
      <img src={logo3} alt="icon"/>
      <img src={logo4} alt="icon"/>

    </SimpleGrid>
</Box>
    </SimpleGrid>

  </Box>
  <Box>
    {/* 2nd part */}
  </Box>
  <Box>
    {/* 3rd part */}
  </Box>
         
    </Box>
}
