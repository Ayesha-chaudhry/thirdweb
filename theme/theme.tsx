import { extendTheme } from "@chakra-ui/react";
import { breakpoints } from "./foundations/breakpoints";
import { colors } from "./foundations/colors";
import { fontSize } from "./foundations/fontsizes";

export default extendTheme({breakpoints,colors,fonts: {fontSize}})