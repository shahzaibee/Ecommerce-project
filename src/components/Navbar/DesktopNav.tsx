import { Box, Flex, Stack } from "@chakra-ui/react";
import React from "react";
import { cartSectionStyle, desktopNavstyle, logoSectionStyles } from "./style";
import { AppLogo } from "../AppLogo";
import { navItems } from "../helpers";
import Link from "next/link";

export default function DesktopNav() {
  return (
    <Flex {...desktopNavstyle}>
      <Stack {...logoSectionStyles}>
        <Box>
          <AppLogo />
        </Box>
        {navItems.map((navitem) => (
          <Box key={navitem.label}>
            <Link href={navitem.href}>{navitem.label}</Link>
          </Box>
        ))}
        <Box>Search</Box>
      </Stack>

      <Stack {...cartSectionStyle}>
        <Box>Wishlist</Box>
        <Box>Cart</Box>
      </Stack>
    </Flex>
  );
}
