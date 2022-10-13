import React from "react";
import { Text } from "native-base";
import AppTemplate from "../components/templates/app";

class ProfileDetail extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <AppTemplate {...this.props}>
        <Text fontSize="lg">profile-detail</Text>
      </AppTemplate>
    );
  }
}

export default ProfileDetail;
