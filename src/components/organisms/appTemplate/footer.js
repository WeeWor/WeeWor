import React from 'react';
import {View} from "native-base";
import MenuButton from "../../molecules/menu-button";

class Footer extends React.Component {
  constructor(props) {
    super(props);
  }

  activeMenu(name) {
    if (name instanceof Array) {
      return name.includes(this.props.navigation.getState().routes[0].name);
    }
    return this.props.navigation.getState().routes[0].name === name;
  }

  render() {
    const { navigation } = this.props;

    return (
      <View backgroundColor={this.props.redMode ? '#ef5054' : null} width={'100%'} height={'100%'} flexDirection={'row'} paddingX={10} paddingTop={2} justifyContent={'space-between'} >
        <MenuButton icon="Feather" name="home" active={this.activeMenu('Home')} onPress={() => navigation.replace('Home')}/>
        <MenuButton icon="Feather" name="search" active={this.activeMenu('Search')} onPress={() => navigation.replace('Search')}/>
        <MenuButton icon="Feather" name="book" active={this.activeMenu(['Other', 'OtherDetail'])} mt={1} onPress={() => navigation.replace('Other')}/>
        <MenuButton icon="Feather" name="user" active={this.activeMenu(['Profile', 'ProfileAccount', 'ProfileDetail'])} onPress={() => navigation.replace('Profile')}/>
      </View>
    );
  }

}

export default Footer;
