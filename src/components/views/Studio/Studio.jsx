import { Box, Image, Text } from "@chakra-ui/react";
import React from "react";

const Studio = () => {
  return (
    <Box>
    <Box 
      h={{sm:'600px', 'xl':"400px"}}
      display={"flex"}
      flexDir={{sm:"column", lg:'row'}}
      py={{sm:'50px','xl':"20px"}}
      // pos={'absolute'}
    //   backgroundImage={"/images/color.png"}
    //   bgRepeat={"no-repeat"}
    >
      {/* Left */}
      <Box 
        w={{lg:'60%', 'xl':"50%"}}
        pl={{'xl':"115.19px"}}
        display={"flex"}
        flexDir={"column"}
        gap={{sm:'10px', 'xl':"45.19px"}}
      >
        <Text
          w={{'xl':"360px"}}
          fontSize={"34px"}
          fontFamily={"Inter"}
          lineHeight={"43.2px"}
          color="rgba(255, 255, 255, 255)"
          px={{sm:'10px', lg:'10px'}}
          pt={{lg:'130px', 'xl':'0px'}}
        >
          What is Web3 studio?
        </Text>
        <Text 
          px={{sm:'10px', lg:'10px'}}
          w={{'xl':"539.25px"}}
          fontSize={"19px"}
          fontFamily={"Inter"}
          lineHeight={"30px"}
          fontWeight={"regular"}
          color="rgba(255, 255, 255, 0.6)"
        >
          Things around crypto, NFTs and web3 as a whole are undeliverably
          interesting. Unfortunately, the overall usability as well as the
          qualityof the UI is often still not up to the task. To achive mass
          adoption overcoming those hurdles will be key. And this is where our
          story begins.
        </Text>
      </Box>
      {/* Right */}
      <Box
        position="relative"
        w={{'xl':"50%"}}
        display={"flex"}
        justifyContent="center"
        alignItems="center"
        mt={{sm:'50px',lg:'0px'}}
      >
        <Image src={"/images/Frame.png"} alt="frame" w={{'xl':"720px"}} h={{'xl':"217px"}} />

        <Box  position="absolute" top={{sm:'20%',md:'40%', 'xl':"40%"}} left={{sm:'13%',md:'20%', lg:'15%','xl':"25%"}}>
          <Text
            color="rgba(255, 255, 255, 0.6)"
            fontSize={{sm:'12px',md:"19px"}}
            fontFamily={"Inter"}
            lineHeight={"20px"}
            fontWeight={"regular"}
            
          >
            Passion in the new <br /> wave of crypto
          </Text>
        </Box>

        <Box  position="absolute" top={{ml:'20%',md:'40%', 'xl':"40%"}} right={{sm:'14%',  md:'20%','xl':"30%"}}>
          <Text
            fontSize={{sm:'12px',md:"19px"}}
            fontFamily={"Inter"}
            lineHeight={"20px"}
            fontWeight={"regular"}
            color="rgba(255, 255, 255, 0.6)"
          >
            High-quality <br /> design craft
          </Text>
        </Box>
      </Box>
    </Box>
    </Box>
  );
};

export default Studio;
