import { Box } from "@chakra-ui/react";
import React from "react";
import {  navbarStyles } from "./style";
import DesktopNav from "./DesktopNav";

export default function Navbar() {
  return (
    <Box {...navbarStyles}>
      <DesktopNav />
    </Box>
  );
}
