import React from 'react';
import { Box, Icon } from "native-base";
import Icons from "../../utils/icons";
import { StyleSheet } from "react-native";

class MenuButton extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <Box style={this.props.active ? styles.point : ''} pr={this.props.pr ? this.props.pr : null}>
        <Icon as={Icons[this.props.icon]} name={this.props.name} size="2xl" color="black" marginTop={this.props.mt ? this.props.mt : 0.5} onPress={this.props.onPress} />
      </Box>
    );
  }
}

const styles = StyleSheet.create({
  point: {
    backgroundColor : '#ffc6c6',
    width:42,
    height:42,
    borderRadius:25,
    alignItems:'center'
  }
});

export default MenuButton;
