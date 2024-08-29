import { Box,  Text } from "@chakra-ui/react";
import ProjSlider from "../projSlider";

const OtherProjects = () => {
  return (
    <Box 
    // h={{sm:'200px', lg:"761px"}}
    >
      <Text
        fontFamily={"Inter"}
        fontSize={{sm:'40px',lg:"111px"}}
        fontWeight={"medium"}
        lineHeight={{lg:"144px"}}
        color={'rgba(255, 255, 255, 255)'}
        px={"40px"}
      >
        Other projects
      </Text>
      <ProjSlider/>
    </Box>
  );
};

export default OtherProjects;
