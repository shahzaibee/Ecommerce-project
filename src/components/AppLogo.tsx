import React from "react";
import { Text } from "@chakra-ui/react";
import Link from "next/link";

export const AppLogo = () => {
  return (
    <Link href="./">
      <Text color="gray.800" fontWeight="bold">
        MS
        <Text as="span" color="brand.primary">
          {" "}
          BUY
        </Text>
      </Text>
    </Link>
  );
};
