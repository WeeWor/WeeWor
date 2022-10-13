import React from "react";
import { Text } from "native-base";
import AppTemplate from "../components/templates/app";

class ProfileAccount extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <AppTemplate {...this.props}>
        <Text fontSize="lg">profile account</Text>
      </AppTemplate>
    );
  }
}

export default ProfileAccount;
