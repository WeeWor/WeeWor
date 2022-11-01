import React from 'react';
import { Box, Icon, Text, VStack } from "native-base";
import { TouchableOpacity } from "react-native";
import Icons from "../../utils/icons";

class UnitBox extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <TouchableOpacity onPress={this.props.onPress}>
        <VStack>
          <Box w={40} h={40} style={{ backgroundColor: "#27aae2" }} justifyContent={'center'}>
            <Icon as={Icons['FontAwesome']} name={'user'} color='#ffffff'  size={'6xl'} m={'36.5%'}/>
          </Box>
          <Text fontSize="3xl" style={{textAlign:'center' }}>{this.props.name}</Text>
        </VStack>
      </TouchableOpacity>
    );
  }
}

export default UnitBox;
