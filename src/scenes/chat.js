import React from "react";
import { Text } from "native-base";
import AppTemplate from "../components/templates/app";

class Chat extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <AppTemplate {...this.props}>
        <Text fontSize="lg">chat</Text>
      </AppTemplate>
    );
  }
}

export default Chat;
