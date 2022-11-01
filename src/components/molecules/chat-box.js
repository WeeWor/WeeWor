import React from "react";
import {Box, HStack, Text, VStack, Image} from "native-base";
import { TouchableOpacity } from "react-native";

class ChatBox extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <TouchableOpacity onPress={this.props.onPress}>
        <Box alignItems="center" paddingY="4">
          <Box height="85" width="380"  rounded="18" background="white">
            <HStack space={3} justifyContent="center">
              <Box width="70" height="2.5"> <Image source={{
                uri: this.props.img
              }} alt="Alternate Text" size="sm" borderRadius={100}/>
              </Box>
              <Box width="240" height="70" >
                <VStack space={2} >
                  <Box paddingTop="2.5"><Text fontSize={25} >{this.props.unit}</Text></Box>
                  <Box paddingBottom="2.5">{this.props.detail}</Box>
                </VStack>
              </Box>
              <Box width="30" height="85" alignItems="center" paddingY="2" >
                {this.props.unread ? (
                  <Box width="5" height="5" bg="red.500" borderRadius="15"></Box>
                ) : ''}
              </Box>
            </HStack>
          </Box>
        </Box>
      </TouchableOpacity>
    );
  }
}

export default ChatBox;
