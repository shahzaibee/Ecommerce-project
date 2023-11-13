import {
  Box,
  Input,
  InputGroup,
  InputLeftElement,
  color,
} from "@chakra-ui/react";
import React from "react";
import { SearchIcon } from '@chakra-ui/icon';


export default function Search() {
  return (
    <Box>
      <InputGroup>
        <InputLeftElement
          pointerEvents="none"
          children={ <SearchIcon color="gray.400" />}
        ></InputLeftElement>
        <Input type="tel" placeholder="Phone number" />
      </InputGroup>
    </Box>
  );
}
