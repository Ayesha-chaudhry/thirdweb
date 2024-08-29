import { Box, Center, Hide, Text, Wrap, WrapItem } from "@chakra-ui/react";
import Image from "next/image";
import React from "react";

const Logos = () => {
  return (
    <>
      <Hide below="lg">
        <Box
          h={{ sm: "400px", md: "200px", xl: "378.89px" }}
          px={{ sm: "20px", lg: "0px", xl: "100px" }}
          pt={{ xl: "102px" }}
        >
          <Text
            fontFamily={"inter"}
            fontSize={{ sm: "28px", xl: "40px" }}
            color={"White"}
          >
            Our clients are backed by:
          </Text>
          <WrapItem
            gap={{ md: "15px", xl: "70px" }}
            w={{ xl: "1289.62px" }}
            h={"138.52px"}
            px={{ sm: "20px", md: "0px", xl: "40px" }}
            py={{ sm: "50px", xl: "44.16px" }}
          >
            <Image
              src={"/images/ycombinator.png"}
              alt="combinator_logo"
              width={242}
              height={50}
              pt={{ sm: "10px", xl: "44.16px" }}
            />
            <Image
              src={"/images/coinbase.png"}
              alt="combinator_logo"
              width={242}
              height={44}
            />
            <Image
              src={"/images/ycombinator.png"}
              alt="combinator_logo"
              width={242}
              height={50}
            />
            <Image
              src={"/images/blockchange.png"}
              alt="combinator_logo"
              width={242}
              height={76}
            />
          </WrapItem>
        </Box>
      </Hide>
    </>
  );
};

export default Logos;
