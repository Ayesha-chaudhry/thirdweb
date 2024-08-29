import { Box, Text } from "@chakra-ui/react";
import Image from "next/image";
import React from "react";

const Hero = () => {
  return (
    <Box  h={"750px"} px={{'xl':"24px"}}>
      <Box display={{'xl':"flex"}} gap={{'xl':12}} h={567} minW={'50%'}>
        {/* Left */}
        <Box minW={{'xl':'50%'}}>
        <Text fontSize={{sm:'40px','xl':'94.8px'}} lineHeight={{'xl':'103px'}} fontFamily={'inter'} paddingX={{'xl':'49px'}} py={{sm:'20px' ,'xl':'94px'}} w={{'xl':'623px'}} textAlign={"center"} color={"White"}>Design studio for the web3 world</Text>
        </Box>
        {/* Right */}
        <Box h={550} minW={{'xl':'40%'}}>
          <Image
            src={"/images/hero.png"}
            alt="hero_img"
            width={900}
            height={450}
          />
        </Box>
      </Box>
      <Box display={'flex'} gap={{sm:'10px','xl':'51px'}} justifyContent={"start"} alignItems={'center'}>
        <Image
          src={"/images/arrow.png"}
          alt="arrow_img"
          width={40}
          height={40}
        />
        <Text color={'White'} maxW={{md:'250px', 'xl':'292px'}} fontSize={'19px'} lineHeight={'30px'} fontFamily={'inter'}>
          We help companies design their products to be ready for web3 world
        </Text>
      </Box>
    </Box>
  );
};

export default Hero;
