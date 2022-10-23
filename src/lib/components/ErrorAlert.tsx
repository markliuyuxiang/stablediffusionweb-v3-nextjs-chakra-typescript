import { Button, Image, Text, Alert, AlertIcon } from "@chakra-ui/react";
import React from "react";

class ErrorAlert extends React.Component <any, any> {
  constructor(props:any) {
    super(props);
    
  }

  render() {
    if (this.props.show == true) {
      return   <Alert status='error'>
      <AlertIcon />
     Please enter prompt...
    </Alert>;
    }
    else{
        return  <></>;
    }
  
}
}

export default ErrorAlert;
