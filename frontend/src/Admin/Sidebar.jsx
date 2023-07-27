import { Box, Flex, Text, useBreakpointValue } from "@chakra-ui/react";
import {Link} from "react-router-dom"
const Sidebar = () => {
  const sidebarWidth = useBreakpointValue({ base: "full", md: "152px" });
  const isMobile = useBreakpointValue({ base: true, lg: false });

  return (
    <Flex
      color="black"
      flexDirection={{lg:"column",base:'row'}}
      height={{lg:"90vh"}}
      width={sidebarWidth}
    >
      <Box px={4} py={6}>
        <Text fontSize="lg" fontWeight="bold" color='blue'>
         Welcome!
        </Text>
      </Box>

      <Flex flexDirection={"column"}   pl={{lg:'2vh'}} >
        <Text display={isMobile ? "none" : "block"}><Link>Dashboard</Link></Text>
        <Text><Link>Order</Link></Text>
        <Text><Link>Customer</Link></Text>
        <Text><Link>Sales</Link></Text>
        <Text display={isMobile ? "none" : "block"}>Settings</Text>
      </Flex>
    </Flex>
  );
};

export default Sidebar;