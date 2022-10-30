import React from 'react';
import { Image, Text, VStack } from "native-base";
import { TouchableOpacity } from "react-native";

class GuideBox extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <TouchableOpacity onPress={this.props.onPress}>
        <VStack alignItems={'center'}>
          <Image borderRadius={10} source={{
            uri: this.props.img
          }} alt="" width={180} height={180} />
          <Text>{this.props.text}</Text>
        </VStack>
      </TouchableOpacity>
    );
  }
}

export default GuideBox;
