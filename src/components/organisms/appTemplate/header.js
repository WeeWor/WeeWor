import React from 'react';
import { Text } from "native-base";

class Header extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <>
        <Text>Fixed header</Text>
      </>
    );
  }
}

export default Header;
