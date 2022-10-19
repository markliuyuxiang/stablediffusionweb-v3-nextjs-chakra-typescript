import {
  Flex,
  Box,
  FormControl,
  FormLabel,
  Input,
  Checkbox,
  Textarea,
  VStack,
  Icon,
  Stack,
  Link,
  Button,
  HStack,
  Heading,
  Text,
  useColorModeValue
} from "@chakra-ui/react";
import React from "react";
import Compute from "./Compute";
import { CheckIcon } from "@chakra-ui/icons";

export default function Playground() {
  return (
    <Flex
      minH={"60vh"}
      w="100%"
      align={"center"}
      justify={"center"}
      bg={useColorModeValue("gray.50", "gray.800")}
    >
      <Stack
        
        spacing={8}
        mx={"auto"}
        maxW={"xl"}
        py={12}
        px={6}
        w={"full"}
        
      >
        <Box
          rounded={"lg"}
          bg={useColorModeValue("white", "gray.700")}
          boxShadow={"lg"}
          p={8}
        >
          <Compute></Compute>
        </Box>
      </Stack>
    </Flex>
  );
}
