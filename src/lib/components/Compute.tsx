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
import Result from "./Result";
import axios from "axios";

class Compute extends React.Component<any, any> {
  constructor(props:any) {
    super(props);
    this.state = { prompt: "", result_src: "", isLoading: false };
    this.handleClick = this.handleClick.bind(this);
    this.handleClickV2 = this.handleClickV2.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.slugify = this.slugify.bind(this);
  }

  slugify(str:any) {
    return str
      .toString()
      .toLowerCase()
      .trim()
      .replace(/[^\w\s-]/g, "")
      .replace(/[\s_-]+/g, "-")
      .replace(/^-+|-+$/g, "");
  }

  handleClick() {
    if (this.state.prompt == "") {
      return;
    }

    this.setState({
      result_src:
        "https://api.computerender.com/generate/" +
        this.slugify(this.state.prompt) +
        ".png"
    });
  }

  handleClickV2() {
    if (this.state.prompt == "") {
      return;
    }
    this.setState({ isLoading: true });
    let userID = Math.floor(Math.random() * 10 ** 16);

    var data = JSON.stringify({
      text: this.state.prompt,
      userID: userID
    });

    var config = {
      method: "post",
      url:
        "https://corsbridge.xiaopai.workers.dev/?https://healthydiffusion.com/process",
      headers: {
        Origin: "https://healthydiffusion.com/",
        "Content-Type": "application/json"
      },
      data: data
    };

    axios(config)
      .then((response) => {
        var intID:any = null;
        if (intID) clearTimeout(intID);
        intID = setInterval(() => {
          fetch(
            `https://corsbridge.xiaopai.workers.dev/?https://healthydiffusion.com/process?userID=${userID}`,
            { cache: "no-store" }
          )
            .then((response) => response.json())
            .then((data) => {
              console.log(data);
              if (!data.done) return;
              clearTimeout(intID);
              this.setState({
                isLoading: false,
                result_src:
                  "https://storage.googleapis.com/healthy-diffusion/" +
                  userID +
                  ".png"
              });
              console.log(JSON.stringify(response.data));
            });
        }, 5000);
      })
      .catch( (error)=> {
        this.setState({ isLoading: false });
        console.log(error);
      });
  }

  handleChange(event:any) {
    this.setState({ prompt: event.target.value });
  }

  render() {
    return (
      <Stack spacing={4}>
        <Heading fontSize={"3xl"}>Stable Diffusion</Heading>

        <Text fontSize={"lg"} colorScheme={"red"}>
          Enter a prompt here to make you dream come true ✌️
        </Text>

        <HStack align={"top"}>
          <Box color={"green.400"} px={2}>
            <Icon as={CheckIcon} color={"red.200"} />
          </Box>
          <VStack align={"start"}>
            <Text fontWeight={300}>
              No limitations on what you can enter; FREEDOM!
            </Text>
          </VStack>
        </HStack>

        <HStack align={"top"}>
          <Box color={"green.400"} px={2}>
            <Icon as={CheckIcon} color={"red.200"} />
          </Box>
          <VStack align={"start"}>
            <Text fontWeight={300}>GPU enabled and fast generation</Text>
          </VStack>
        </HStack>

        <HStack align={"top"}>
          <Box color={"green.400"} px={2}>
            <Icon as={CheckIcon} color={"red.200"} />
          </Box>
          <VStack align={"start"}>
            <Text fontWeight={300}>
              Perfect for running a quick sentence through the model and get
              results back rapidly.
            </Text>
          </VStack>
        </HStack>

        <Textarea
          placeholder="Enter a sentence..."
          size="sm"
          border="1px"
          borderColor="red.100"
          focusBorderColor="red.200"
          rounded="5"
          my="15"
          value={this.state.value}
          onChange={this.handleChange}
        />
        <Stack spacing={10} mt={10}>
          {this.state.isLoading ? (
            <Button
              isLoading
              loadingText="Generating"
              colorScheme={"red"}
              _hover={{
                bg: "red.600"
              }}
            >
              Generate Image
            </Button>
          ) : (
            <Button
              onClick={this.handleClickV2}
              colorScheme={"red"}
              _hover={{
                bg: "red.600"
              }}
            >
              Generate Image
            </Button>
          )}
        </Stack>

        <Result result_src={this.state.result_src}></Result>
      </Stack>
    );
  }
}

export default Compute;
