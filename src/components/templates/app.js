import React from 'react';
import { HStack, ScrollView, View } from "native-base";
import Header from "../organisms/appTemplate/header";
import Footer from "../organisms/appTemplate/footer";
import { Dimensions } from "react-native";

const window = Dimensions.get("window");

class AppTemplate extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      window,
    }
  }

  componentDidMount() {
    this.dimensionsSubscription = Dimensions.addEventListener("change", () => this.setState({ window: window }));
  }

  componentWillUnmount() {
    this.dimensionsSubscription?.remove();
  }

  render() {
    const { navigation } = this.props;

    return (
      <View style={{flex: 1}}>
        <View h="60">
          <Header navigation={navigation}/>
        </View>
        <ScrollView>
          {this.props.children}
        </ScrollView>
        <View h="50">
          <Footer navigation={navigation}/>
        </View>
      </View>
    );
  }
}
export default AppTemplate;
