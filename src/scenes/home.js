import React from "react";
import { Icon, Text } from "native-base";
import AppTemplate from "../components/templates/app";
import Icons from "../utils/icons";

class Home extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <AppTemplate {...this.props}>
        <Text fontSize="lg">lg</Text>
        <Icon as={Icons.FontAwesome5} name="user-alt" size="md" color="black"/>
        <Text fontSize="8xl">lg</Text>
        <Text fontSize="8xl">lg</Text>
        <Text fontSize="8xl">lg</Text>
        <Text fontSize="8xl">lg</Text>
        <Text fontSize="8xl">lg</Text>
      </AppTemplate>
    );
  }
}

export default Home;
