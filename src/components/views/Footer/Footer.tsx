import { Box, Image, Text } from "@chakra-ui/react";
import React from "react";

const Footer = () => {
  return (
    <Box pt={{ sm: "100px", lg: "144px" }} px={{sm:'24px',md:'140px', lg:'60px' ,'xl':'100px'}} 
    h={"554.40px"} 
    display={{sm:'block',lg:"flex"}} gap={{sm:'550px', lg:"230.38px"}}>
      {/* Right */}
      <Box>
        <Text color={"rgba(255, 255, 255, 255)"} fontFamily={"Inter"} fontSize={{sm:'30px', lg:"47px"}}>
          Web3 product studio
        </Text>
        <Text
          color={"rgba(255, 255, 255, 0.6)"}
          fontFamily={"Inter"}
          fontSize={{ sm:'20px', lg:"26px"}}
          lineHeight={{sm:'25px', lg:"36px"}}
        >
          Feel free to reach out if you want to collaborate <br /> with us, or
          simply have a chat.
        </Text>
        <Box
          display={"flex"}
          justifyContent={"start"}
          alignItems={"center"}
          gap={"11px"}
        >
          <Text color={"rgba(255, 255, 255, 255)"} fontFamily={"Inter"} fontSize={{lg:"26px"}} lineHeight={{lg:"39px"}}>
            hello@studio.com
          </Text>
          <Image src="/images/i.png" alt="arrow" w={{sm:'15px', lg:"38px"}} h={{sm:'20px', lg:"40px"}} />
        </Box>
      </Box>
      {/* center */}
      <Box display={'flex'} gap={{sm:'90px', lg:'115.52px'}} pt={8} >
        <Box display={'flex'} flexDir={'column'} gap={{sm:'5px',lg:'12px'}}>
          <Text color={"rgba(255, 255, 255, 255)"} fontFamily={"Inter"} fontSize={{sm:'18px', 'xl':"20px"}} lineHeight={"30px"}>
            Our projects
          </Text>
          <Text
            color={"rgba(255, 255, 255, 0.6)"}
            fontFamily={"Inter"}
            fontSize={{sm:'14px',lg:"19px"}}
            lineHeight={"30px"}
            pt={{sm:'12px', lg:'32px'}}
          >
            WingRiders
          </Text>
          <Text
            color={"rgba(255, 255, 255, 0.6)"}
            fontFamily={"Inter"}
            fontSize={{sm:'14px',lg:"19px"}}
            lineHeight={"30px"}
          >
            Trackee
          </Text>
          <Text
            color={"rgba(255, 255, 255, 0.6)"}
            fontFamily={"Inter"}
            fontSize={{sm:'14px',lg:"19px"}}
            lineHeight={"30px"}
          >
            WorldCoin
          </Text>
          <Text
            color={"rgba(255, 255, 255, 0.6)"}
            fontFamily={"Inter"}
            fontSize={{sm:'14px',lg:"19px"}}
            lineHeight={"30px"}
          >
            Audiance+
          </Text>
        </Box>
        {/* left */}
        <Box display={'flex'} flexDir={'column'} gap={{sm:'5px' ,lg:'12px'}}>
          <Text color={"rgba(255, 255, 255, 255)"} fontFamily={"Inter"} fontSize={{sm:'18px', 'xl':"20px"}} lineHeight={{lg:"30px"}}>
            Follow Us
          </Text>
          <Text
            color={"rgba(255, 255, 255, 0.6)"}
            fontFamily={"Inter"}
            fontSize={{sm:'14px',lg:"19px"}}
            lineHeight={"30px"}
            pt={{sm:'12px', lg:'32px'}}
          >
            Facebook
          </Text>
          <Text
            color={"rgba(255, 255, 255, 0.6)"}
            fontFamily={"Inter"}
            fontSize={{sm:'14px',lg:"19px"}}
            lineHeight={"30px"}
          >
            Instagram
          </Text>
          <Text
            color={"rgba(255, 255, 255, 0.6)"}
            fontFamily={"Inter"}
            fontSize={{sm:'14px',lg:"19px"}}
            lineHeight={"30px"}
          >
            Dribble
          </Text>
          <Text
            color={"rgba(255, 255, 255, 0.6)"}
            fontFamily={"Inter"}
            fontSize={{sm:'14px',lg:"19px"}}
            lineHeight={"30px"}
          >
            Linkedin
          </Text>
        </Box>
      </Box>
    </Box>
  );
};

export default Footer;
