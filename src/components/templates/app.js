import React from 'react';
import { HStack, ScrollView, View } from "native-base";
import Header from "../organisms/appTemplate/header";
import Footer from "../organisms/appTemplate/footer";

class AppTemplate extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { navigation } = this.props;

    return (
      <View h="100%">
        <ScrollView>
          <HStack w="100%">
            <Header navigation={navigation}/>
          </HStack>
          <HStack w="100%">
            {this.props.children}
          </HStack>
          <HStack w="100%">
            <Footer navigation={navigation}/>
          </HStack>
        </ScrollView>
      </View>
    );
  }
}
export default AppTemplate;
