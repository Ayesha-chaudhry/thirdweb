"use client";
import { Box, Hide, Show, Text, Image } from "@chakra-ui/react";
import NavMenu from "./NavMenu";
import MobileNav from "./MobileNav";

const Navbar = () => {
  return (
    <>
      <Box
        display={"flex"}
        justifyContent={"space-between"}
        alignItems={"center"}
        h={"60px"}
        px={"24px"}
        py={"30px"}
        color={"white"}
      >
        <Box>
          <Image
            src={"/images/logo.png"}
            alt="logo"
            width={{ sm: "40px", md: "52px" }}
            height={{ sm: "40px", md: "50px" }}
          />
        </Box>
        <Hide below="md">
          <NavMenu />
        </Hide>
        <Show below="md">
          <MobileNav />
        </Show>
        {/* <Box pos={'relative'} display={'flex'} justifyContent={"space-around"} alignItems={"center"} w={'418px'} h={'43px'} fontSize={'18px'} fontFamily={'inter'} lineHeight={'27px'}>
          <Text>Home</Text>
          <Text>About</Text>
          <Text>Contact</Text>
          <Text>Career<span style={{position: 'absolute', top:8, right:5}}><Image src={"/images/span.png"} alt="logo" width={17} height={17} /></span></Text>
        </Box> */}
        <Hide below="md">
          <Box display={"flex"} alignItems={"center"} gap={"11.86px"}>
            <Text fontSize={"18px"} fontFamily={"inter"} lineHeight={"27px"}>
              Menu
            </Text>
            <Image src={"/images/menu.png"} alt="logo" width={21} height={13} />
          </Box>
        </Hide>
      </Box>
    </>
  );
};

export default Navbar;
