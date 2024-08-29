import { Box, HStack, Image, Stack, Text } from "@chakra-ui/react";
import React from "react";

const NavMenu = () => {
  return (
    <HStack fontSize={"18px"} fontFamily={"inter"}>
      <Stack
        gap={5}
        direction={{ base: "column", md: "row" }}
        align={{ base: "left", md: "center" }}
      >
        <Text>Home</Text>
        <Text>About</Text>
        <Text>Contact</Text>
        <Text>Career</Text>
      </Stack>
    </HStack>
  );
};

export default NavMenu;
