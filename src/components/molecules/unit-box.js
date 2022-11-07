import React from 'react';
import { Image, Text, VStack } from "native-base";
import { TouchableOpacity } from "react-native";

class UnitBox extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <TouchableOpacity onPress={this.props.onPress}>
        <VStack alignItems={'center'} width={150}>
          <Image borderRadius={10} source={{
            uri: this.props.img
          }} alt="" size="xl" />
          <Text numberOfLines={1}>{ this.props.text }</Text>
        </VStack>
      </TouchableOpacity>
    );
  }
}

export default UnitBox;
