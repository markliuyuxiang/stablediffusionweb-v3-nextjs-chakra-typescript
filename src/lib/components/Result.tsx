import { Button, Image, Text } from "@chakra-ui/react";
import React from "react";

class Result extends React.Component {
  constructor() {
    super();
    this.state = { loaded: false };
  }

  render() {
    if (this.props.result_src == "" || this.props.result_src == undefined) {
      return <></>;
    }
    return (
      <div>
        {this.state.loaded ? null : (
          <></>
          // <Button isLoading colorScheme="red" variant="solid">
          //   Loading
          // </Button>
        )}

        {/* <Text>{this.props.result_src}</Text> */}
        <Image
          boxSize="100%"
          objectFit="cover"
          style={this.state.loaded ? {} : { display: "none" }}
          src={this.props.result_src}
          alt="stable diffusion generated art"
          fallbackSrc="https://via.placeholder.com/512"
          onLoad={() => this.setState({ loaded: true })}
        />
      </div>
    );
  }
}

export default Result;
