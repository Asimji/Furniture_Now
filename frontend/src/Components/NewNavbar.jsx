import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import {
  Box,
  Flex,
  IconButton,
  Image,
  Input,
  InputGroup,
  InputLeftElement,
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  Collapse,
  useDisclosure,
  Button,
} from '@chakra-ui/react';
import { HamburgerIcon, CloseIcon } from '@chakra-ui/icons';
import { MdShoppingCartCheckout } from 'react-icons/md';
import { ImUser, ImSearch } from 'react-icons/im';
import logo from '../Images/Furniture.png';

const NewNavbar = () => {
    const AuthToken=JSON.parse(localStorage.getItem("userShop")) || ""

    const loginToken=JSON.parse(localStorage.getItem('loginToken'))||""
    const userName=JSON.parse(localStorage.getItem("input"))||""

    const navigate=useNavigate()

  const { isOpen, onToggle } = useDisclosure();
  const [showProducts, setShowProducts] = useState(false);

  const handleProductHover = () => {
    setShowProducts(true);
  };

  const handleProductLeave = () => {
    setShowProducts(false);
  };

  return (
    <Box as="nav" bg="white" px={4} py={2} boxShadow="sm">
      <Flex justify={{base:"space-between",md:'none'}} align="center">
        {/* Logo */}
        <Link to="/">
          <Image src={logo} alt="logo" w="20vh" h="10vh" border="0px solid red" />
        </Link>

        {/* Hamburger Icon for Small and Medium Screens */}
        <Box display={{ base: 'block', md: 'none' }}>
          <IconButton
            icon={isOpen ? <CloseIcon /> : <HamburgerIcon />}
            variant="ghost"
            onClick={onToggle}
          />
        </Box>

        {/* Menu Items for Large Screens */}
        <Flex
          as="ul"
          listStyleType="none"
          alignItems="center"
          display={{ base: 'none', md: 'flex' }}
        >
          {/* Product Tag */}
          <Box
            as="li"
            onMouseEnter={handleProductHover}
            onMouseLeave={handleProductLeave}
            position="relative"
          >
            <Link to="/product" style={{ display: 'flex', alignItems: 'center', gap: '5px' }}>
              Product
            </Link>
          </Box>

          {/* Search Input */}
          <Box as="li" ml="4">
            <InputGroup maxW="300px">
              <InputLeftElement pointerEvents="none" children={<ImSearch />} />
              <Input type="text" placeholder="Search" />
            </InputGroup>
          </Box>

          {/* Login and Cart Icons */}
          <Box as="li" ml="4">
  <Menu>
    <MenuButton as={IconButton} icon={<ImUser />} variant="ghost" />
    <MenuList>
      <>
        {loginToken ? (
          <Button
            id="ls"
            onClick={() => {
              localStorage.removeItem("loginToken");
              navigate("/");
            }}
          >
            Logout
          </Button>
        ) : (
          <Link to="/login">Login/SignUp</Link>
        )}
      </>
      <MenuItem>
        <Link to="/admin">Admin</Link>
      </MenuItem>
    </MenuList>
  </Menu>
</Box>
          <Box as="li" ml="4">
            <Link to="/cart" style={{ display: 'flex', gap: '8px' ,alignItems:'center'}}>
              <MdShoppingCartCheckout />
              Cart
            </Link>
          </Box>
        </Flex>
      </Flex>

      {/* Mobile Collapse Menu */}
      <Collapse in={isOpen} animateOpacity>
        <Flex
          direction="column"
          align="center"
          mt={4}
          display={{ base: 'block', md: 'none' }}
        >
          {/* Menu Items for Mobile */}
          <Box mt="2">
            <Link to="/product">Product</Link>
          </Box>
          <Box  mt="2">
          {loginToken ? (
          <Button
            id="ls"
            onClick={() => {
              localStorage.removeItem("loginToken");
              navigate("/");
            }}
          >
            Logout
          </Button>
        ) : (
          <Link to="/login">Login/SignUp</Link>
        )}
          </Box>
          <Box  mt="2">
            <Link to="/cart">Cart</Link>
          </Box>
          <Box  mt="2">
          <Link to="/admin">Admin</Link>
          </Box>
          {/* Add more mobile menu items as needed */}
        </Flex>
      </Collapse>
    </Box>
  );
};

export default NewNavbar;
