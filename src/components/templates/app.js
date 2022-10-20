import React from 'react';
import { ScrollView, View } from "native-base";
import Header from "../organisms/appTemplate/header";
import Footer from "../organisms/appTemplate/footer";
import { Dimensions, ImageBackground } from "react-native";
import bg from "../../assets/images/bg.png";

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
        <View h="70">
          <Header redMode={this.props.redMode} navigation={navigation}/>
        </View>
        <ImageBackground source={this.props.redMode ? null : bg} style={{height:"100%", width:"100%", flex:1}}>
          <ScrollView>
            {this.props.children}
          </ScrollView>
        </ImageBackground>
        <View h="55">
          <Footer redMode={this.props.redMode} navigation={navigation}/>
        </View>
      </View>
    );
  }
}

export default AppTemplate;
