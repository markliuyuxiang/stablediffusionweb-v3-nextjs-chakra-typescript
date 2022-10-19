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
import { CheckIcon } from "@chakra-ui/icons";

class Playground extends React.Component {
  render() {
    return (
      <Flex
        minH={"60vh"}
        align={"center"}
        justify={"center"}
        bg={useColorModeValue("gray.50", "gray.800")}
      >
        <Stack
          spacing={8}
          mx={"auto"}
         
          py={12}
          px={6}
          w={"full"}
          maxW={"xl"}
        >
          <Box
            rounded={"lg"}
            bg={useColorModeValue("white", "gray.700")}
            boxShadow={"lg"}
            p={8}
          ></Box>
        </Stack>
      </Flex>
    );
  }
}

export default Playground;
