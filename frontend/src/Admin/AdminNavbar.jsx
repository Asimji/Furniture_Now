import { Box, Button, Flex, Input, IconButton, Menu, MenuButton, MenuItem, MenuList, Text, useBreakpointValue,Image } from "@chakra-ui/react";
import { ChevronDownIcon, HamburgerIcon } from "@chakra-ui/icons";
import logo from "../Images/Furniture.png"
import {Link, useLocation} from "react-router-dom"
import {useEffect} from "react"


const AdminNavbar = () => {
  const isMobile = useBreakpointValue({ base: true, lg: false });
const location =useLocation()



  const handleLogout=()=>{
    localStorage.setItem("adminTOken",JSON.stringify(""))
    window.location.reload()
  }

  return (
    <Box  py={4} px={6}>
      <Flex alignItems="center" justifyContent="space-between" direction={isMobile ? "column" : "row"}>
        <Text  fontSize="lg" fontWeight="bold" mb={isMobile ? 4 : 0}>
        <Link to="/"> Furniture_Now </Link>
        </Text>

        {!isMobile && (
          <Flex alignItems="center">
            <Input placeholder="Search" size="sm" mr={2} />

            <Menu>
              <MenuButton
                as={IconButton}
                aria-label="Menu"
                icon={<HamburgerIcon />}
                variant="outline"
                color="white"
                size="sm"
                mr={2}
              />

              <MenuList>
                <MenuItem>Profile</MenuItem>
                <MenuItem>Settings</MenuItem>
                <Button onClick={handleLogout}>Logout</Button>
              </MenuList>
            </Menu>

            <Flex alignItems="center" mt='1vh' >
              <Text fontWeight="bold" mr={2}>
              Admin
              </Text>
              <Link to="/">
              <Image src={logo} alt="Logo" width={{lg:'20vh'}} height={{lg:'6vh'}} />
              </Link>
            </Flex>
          </Flex>
        )}

        {isMobile && (
          <Flex alignItems="center">
            <Menu>
              <MenuButton
                as={IconButton}
                aria-label="Menu"
                icon={<HamburgerIcon />}
                variant="outline"
                color="white"
                size="sm"
                mr={2}
              />
              <MenuList>
                <MenuItem>Profile</MenuItem>
                <MenuItem>Settings</MenuItem>
                <Button onClick={handleLogout}>Logout</Button>
              </MenuList>
            </Menu>

            <Flex alignItems="center">
              <Text color="white" fontWeight="bold" mr={2}>
                Admin
              </Text>
              <Link to="/">
              <Image src={logo} alt="Logo" width={'6vh'} height={26} />
              </Link>
            </Flex>
          </Flex>
        )}

        {isMobile && (
          <Input placeholder="Search" size="sm" my={4} />
        )}
      </Flex>
    </Box>
  );
};

export default AdminNavbar;