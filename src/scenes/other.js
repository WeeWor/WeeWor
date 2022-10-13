import React from "react";
import { Text } from "native-base";
import AppTemplate from "../components/templates/app";

class Other extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <AppTemplate {...this.props}>
        <Text fontSize="lg">other</Text>
      </AppTemplate>
    );
  }
}

export default Other;
