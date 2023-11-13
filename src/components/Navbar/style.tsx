import { BoxProps, FlexProps, StackProps } from "@chakra-ui/react";

export const navbarStyles: BoxProps = {
  pos: "fixed",
  w: "100%",
  bgColor: "white",
  mb: "irem",
  zIndex: "10",
};

export const desktopNavstyle: FlexProps = {
  justify: "space-between",
  align: "center",
  px: "2rem",
  py: "2rem",
  borderBottomWidth: "1px",
  borderColor: "gray.200",
};

export const logoSectionStyles: StackProps = {
  direction: "row",
  gap: 6,
  flex: 1,
  alignItems: "center",
};

export const cartSectionStyle: StackProps = {
  direction: "row",
  spacing: 3,
};
