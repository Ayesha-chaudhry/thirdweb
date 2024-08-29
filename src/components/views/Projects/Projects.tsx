import { Box, Button, HStack, Image, Text, VStack } from "@chakra-ui/react";
import React from "react";

const Projects = () => {
  return (
    <Box
    h={{md:'700px', lg:'900px','xl':"1290.28"}} 
    px={{sm:'20px','xl' :"40px"}}>
      <Text
        fontFamily={"Inter"}
        fontSize={{sm:'40px','xl':"111px"}}
        fontWeight={"medium"}
        lineHeight={{'xl':"144px"}}
        color={'rgba(255, 255, 255, 255)'}
      >
        Projects
      </Text>
      <Box h={{'xl':"1078px"}} display={"flex"}>
        {/* Right */}
        <Box w={"668px"} display={"flex"} flexDir={"column"} gap={{sm:'5px','xl':"24px"}} mx={{'2xl':'90px'}}>
          <Image src="/images/pr1.png" alt="img" w={"668px"} h={{'xl':"429.89px"}} objectFit={'contain'}/>
          <Image src="/images/pr3.png" alt="img" w={"668px"} h={{'xl':"409.31px"}} objectFit={'contain'}/>
          <Box h={"172px"} py={{'xl':"40px"}}>
            <Text color={'rgba(255, 255, 255, 255)'} fontFamily={"Inter"} fontSize={{sm:'12px','xl':"35px"}} lineHeight={{'xl':"43px"}}>
              How we design web3 products{" "}
            </Text>
            <Button
              fontFamily={"Inter"}
              fontSize={{sm:'14px', xl:"16px"}}
              lineHeight={"24px"}
              bg={"#000000"}
              rounded={"full"}
              w={{'xl':"126px"}}
              h={"36px"}
              borderRadius={'10px'}
              color={'rgba(255, 255, 255, 255)'}
            >
              coming soon
            </Button>
          </Box>
        </Box>
        {/* Left */}
        <Box
          h={{sm:'0px','xl':"1078px"}}
          w={"668px"}
          display={"flex"}
          flexDir={"column"}
          gap={{sm:'30px','xl':"24px"}}
        >
          <Image src="/images/pr2.png" alt="img" w={"668px"} h={{'xl':"677.55px"}} objectFit={'contain'}/>
          <Image src="/images/pr4.png" alt="img" w={"668px"} h={{'xl':"352.73px"}} objectFit={'contain'}/>
        </Box>
      </Box>
    </Box>
  );
};

export default Projects;
