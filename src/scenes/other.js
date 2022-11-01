import React from "react";
import {Box, HStack, Icon, Text, VStack} from "native-base";

import AppTemplate from "../components/templates/app";
import Icons from "../utils/icons";
import center from "native-base/src/theme/components/center";
import OtherBox from "../components/molecules/other-box";

class Other extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { navigation } = this.props;

    return (
      <AppTemplate {...this.props}>
        <Text fontSize="3xl" paddingLeft={6} paddingTop={4}>Family</Text>

        <HStack mt={4} space={5} justifyContent={'center'}>
          <OtherBox name="Dad" onPress={() => navigation.replace('OtherDetail')}/>
          <OtherBox name="Dad"/>
        </HStack>

        <HStack mt={4} space={5} justifyContent={'center'}>
          <OtherBox name="Dad"/>
          <OtherBox name="Dad"/>
        </HStack>

        <HStack mt={4} ml={8} mb={4} space={3} >
          <VStack>
            <Box w={40} h={40} style={{ backgroundColor:"#b7cad1"}} justifyContent={'center'}>
              <Icon as={Icons['Entypo']} name={'plus'} color='#ffffff'  size={'6xl'} m={'31.5%'}/>
            </Box>
          </VStack>
        </HStack>
      </AppTemplate>
    );
  }
}

export default Other;
