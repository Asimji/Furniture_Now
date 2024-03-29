import {  Image, Box, SimpleGrid,Text,Heading } from "@chakra-ui/react";
import long from "../Images/long.png"
import f1 from "../Images/Furniture_1.png"
import f2 from "../Images/Furniture_2.png"
import f3 from "../Images/Furniture_3.png"
import f4 from "../Images/Furniture_4.png"
import f5 from "../Images/Furniture_5.png"
import f6 from "../Images/Furniture_6.png"
import f7 from "../Images/Furniture_7.png"
import f8 from "../Images/Furniture_8.png"
import f9 from "../Images/Furniture_9.png"
import f10 from "../Images/Furniture_10.png"
import f11 from "../Images/Furniture_11.png"
import f12 from "../Images/Furniture_12.png"
import { Link } from "react-router-dom";
import NewNavbar from "./NewNavbar"
import Footer from "../Footer/Footer";



export default function Home(){

  

    return <div >
        <NewNavbar/>
        <Box objectFit={'cover'} >
         <Link to="/product">  <Image src={long}  /> </Link> 
        </Box>
        <Box>
            <Box color="brown" fontWeight={"bold"} fontSize={25} mt={'2vh'} mb={{md:'2vh',base:0}} textAlign={{md:'center',base:"left"}}>Shop By Categories</Box>
            <SimpleGrid  columns={{md:6,base:1}} gap={'3vh'}   >
                <Box >
               <Link to="/product"><Image w="100%" src={f1} alt="logo"/> </Link>    
                           </Box>
                <Box>
               <Link to="/product"><Image w="100%" src={f2} alt="logo"/> </Link>   
                            </Box>
                <Box >
          <Link to="/product"><Image w="100%" src={f3} alt="logo"/> </Link>      
                    </Box>
                <Box >
         <Link to="/product"><Image w="100%" src={f4} alt="logo"/> </Link>      
                   </Box>
                <Box >
              <Link to="/product"> <Image w="100%" src={f5} alt="logo"/></Link>
                </Box>
                <Box >
               <Link to="/product"><Image w="100%" src={f6} alt="logo"/> </Link>             
                  </Box>
                <Box >
               <Link to="/product"><Image w="100%" src={f7} alt="logo"/> </Link>     
                          </Box>
                <Box >
              <Link to="/product"> <Image w="100%" src={f8} alt="logo"/></Link>
                </Box>
                <Box >
               <Link to="/product"><Image w="100%" src={f9} alt="logo"/> </Link>    
                           </Box>
                <Box >
               <Link to="/product"><Image w="100%" src={f10} alt="logo"/></Link>
                </Box>
                <Box >
               <Link to="/product"><Image w="100%" src={f11} alt="logo"/></Link>
                </Box>
                <Box >
              <Link to="/product"> <Image w="100%" src={f12} alt="logo" /></Link>
                </Box>
            </SimpleGrid>     
        </Box>
        <Box textAlign={{md:'center',base:'left'}} mt={'2vh'}>
            <Link style={{textDecoration:"none",color:"red"}} >Shop all Categories (25) </Link>
        </Box>
        <Box >
            <Box color="brown" fontWeight={"bold"} fontSize={25} textAlign={{md:'center',base:'left'}}>Care For Your Furniture</Box>
            <Box>

            <SimpleGrid columns={{md:2,base:1}}  gap={'5vh'}  >
                <Box w='100%'>
                <Image w='100%' src="https://ii1.pepperfry.com/assets/b27ad4_1677141946438_Mattress_360_careforyourfurniture_15feb_1.jpg" alt="logo"></Image>
                </Box>
                <Box w='100%' >
                <Image w='100%' src="https://ii2.pepperfry.com/assets/9bfe0d_1677141953865_Mattress_360_careforyourfurniture_15feb_2.jpg" alt="logo"></Image>
                </Box>
            </SimpleGrid>
            </Box>
        </Box>

        <Box >
            <Box color="brown" fontWeight={"bold"} fontSize={25} textAlign={{md:'center',base:'left'}} mt={'2vh'} mb={{md:'2vh',base:0}} >Discover New Launches</Box>
            <SimpleGrid columns={{md:2,lg:4,base:1}}  gap={'3vh'} >

            <Box >
                <Box >
                    <Image  src="https://ii2.pepperfry.com/assets/ee1757_1677142872139_Mattress_768_discovernewlaunches_15feb_1.jpg" alt="logo"/>
                </Box>
                <Box  textAlign={"left"} >
                <Heading fontSize={15}>Chippa Collection by Mudramark</Heading>
                <Text>18+ Options</Text>
                </Box>
            </Box>
            <Box >
                <Box >
                    <Image src="https://ii3.pepperfry.com/assets/515d7d_1677142879220_Mattress_768_discovernewlaunches_15feb_2.jpg" alt="logo" />
                </Box>
                <Box  textAlign={"left"}>
                <Heading fontSize={15}>Orange Tree</Heading>
                <Text>90+ Options</Text>
                </Box>
            </Box>
            <Box  >
                <Box >
                    <Image  src="https://ii1.pepperfry.com/assets/2986be_1677142886425_Mattress_768_discovernewlaunches_15feb_3.jpg" alt="logo" />
                </Box>
                <Box   textAlign={"left"}>
                <Heading fontSize={15}>Cabinets and Sideboards</Heading>
                <Text>160+ Options</Text>
                </Box>
            </Box>
            <Box  >
                <Box >
                    <Image src="https://ii3.pepperfry.com/assets/b38af7_1677142893313_Mattress_768_discovernewlaunches_15feb_4.jpg" alt="logo" />
                </Box>
                <Box   textAlign={"left"}>
                <Heading fontSize={15}>SpeedX Home Bars</Heading>
                <Text>10+ Options</Text>
                </Box>
            </Box>
           
            </SimpleGrid>
        </Box>
        <Box >
            <Box color="brown" fontWeight={"bold"} fontSize={25} textAlign={{md:'center',base:'left'}}>Follow Home Interiror Trends</Box>
            <SimpleGrid columns={{md:3,sm:2,base:1}} gap={{md:10,base:0}}  >
                <Box >
                    <Box h="80%">
                    <Image w="100%" src="https://ii2.pepperfry.com/assets/b00639a9-4d5b-4865-88a5-b393ab880df6.jpg" alt="Image" />
                    </Box>
                    <Box   h="20%" textAlign="left" mt={25} > 
                   <Heading fontSize={18}>Vintage Style Chesterfield Sofa</Heading>
                   <Text fontSize={12} >Explore Starting Rs 32400</Text>
                    </Box>
                </Box>
                <Box >
                    <Box h="80%">
                    <Image w="100%" src="https://ii1.pepperfry.com/assets/d15b5cec-89ef-428e-962d-85bf1b3681e6.jpg" alt="Image" />
                    </Box>
                    <Box  h="20%" textAlign="left" mt={25} >
                   <Heading fontSize={18}>Maximalist Wall Plates</Heading>
                   <Text fontSize={12}>Explore Starting Rs 774</Text>
                    </Box>
                </Box>
                <Box >
                    <Box h="80%">
                    <Image w="100%" src="https://ii3.pepperfry.com/assets/43a1365d-6e6a-41df-ba88-38c1e066fbba.jpg" alt="Image" />
                    </Box>
                    <Box h="20%" textAlign="left" mt={25} >
                   <Heading fontSize={18}>Self Love Time-Arm Chairs</Heading>
                   <Text fontSize={12}>Explore Starting Rs 8455</Text>
                    </Box>
                </Box>
                <Box >
                    <Box h="80%">
                    <Image w="100%" src="https://ii2.pepperfry.com/assets/2443d86c-e043-4829-bd5d-1743565d35ae.jpg" alt="Image" />
                    </Box>
                    <Box h="20%" textAlign="left" mt={25}>
                   <Heading fontSize={18}>Multipurpose Floor Lamps</Heading>
                   <Text fontSize={12}>Explore Starting Rs 1750</Text>
                    </Box>
                </Box>
                <Box >
                    <Box h="80%">
                    <Image w="100%" src="https://ii3.pepperfry.com/assets/4d9751fd-9673-4434-892a-2100476fff42.jpg" alt="Image" />
                    </Box>
                    <Box h="20%" textAlign="left" mt={25}>
                   <Heading fontSize={18}>Rom-Com Aesthetic Upholstered Beds</Heading>
                   <Text fontSize={12}>Explore Starting Rs 9375</Text>
                    </Box>
                </Box>
                <Box >
                    <Box h="80%">
                    <Image w="100%" src="https://ii2.pepperfry.com/assets/251e457f-ab11-4fd7-948d-fa993df0694d.jpg" alt="Image" />
                    </Box>
                    <Box h="20%" textAlign="left" mt={25}>
                   <Heading fontSize={18}>Ceramic Tea Cups</Heading>
                   <Text fontSize={12}>Explore Starting Rs 379</Text>
                    </Box>
                </Box>
            </SimpleGrid>
        </Box>
        <Box m="0 45px 40px 40px" textAlign="left">
            <Box color="brown" fontWeight={"bold"} fontSize={25} textAlign={{md:'center',base:'left'}}>Check Out these Collection</Box>
            <SimpleGrid columns={3} gap={15} className="part5">
           <Box >
            <Box>
                <Image w="100%" src="https://ii2.pepperfry.com/assets/c4780e45-27c2-4a8c-aac8-db53ddb793f5.jpg" alt="logo"/>
            </Box>
            <Box mt={8}>
                <Heading fontSize={18}>Alankar Collection</Heading>
                <Text fontSize={12}>Explore Starting Rs 799</Text>
            </Box>
           </Box>
           <Box>
            <Box>
                <Image w="100%" src="https://ii1.pepperfry.com/assets/a8dc3ef6-3b61-467c-af12-eaf4ffbd7f5f.jpg" alt="logo" />
            </Box>
            <Box mt={8}>
                <Heading fontSize={18}>Kosmo Weave Collection</Heading>
                <Text fontSize={12}>Explore Starting Rs 3440</Text>
            </Box>
           </Box>
           <Box>
            <Box>
                <Image w="100%" src="https://ii1.pepperfry.com/assets/634ae3a4-80fd-4f55-aa21-a2488590ab8b.jpg" alt="logo" />
            </Box>
            <Box my={8}>
                <Heading fontSize={18}>Gafieira Collection</Heading>
                <Text fontSize={12}>Explore Starting Rs 13999</Text>
            </Box>
           </Box>
                
            </SimpleGrid>
        </Box>
        <Footer/>
    </div>
}