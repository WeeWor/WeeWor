import React from "react";
import { Text } from "native-base";
import AppTemplate from "../components/templates/app";

class Profile extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <AppTemplate redMode={true} {...this.props}>
        <Text fontSize="lg">profile</Text>
      </AppTemplate>
    );
  }
}

export default Profile;
