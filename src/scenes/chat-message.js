import React from "react";
import { Text } from "native-base";

class ChatMessage extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <Text fontSize="lg">chat message</Text>
    );
  }
}

export default ChatMessage;
