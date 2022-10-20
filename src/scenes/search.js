import React from "react";
import { Text } from "native-base";
import AppTemplate from "../components/templates/app";

class Search extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <AppTemplate redMode={true} {...this.props}>
        <Text fontSize="lg">search</Text>
      </AppTemplate>
    );
  }
}

export default Search;
