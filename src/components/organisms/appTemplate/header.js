import React from 'react';
import {Text, View, HStack, Icon, Image, VStack, Box} from "native-base";
import icons from "../../../utils/icons";
import bg from "../../../assets/images/bgHeader.png"
import { ImageBackground, StyleSheet } from "react-native";
import MenuButton from "../../molecules/menu-button";

class Header extends React.Component {
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
      <ImageBackground source={this.props.redMode ? bg : null} resizeMode="cover" style={{height: 70}}>
        <View style={{paddingTop:"3%", paddingLeft:"3%", paddingRight:"3%"}}>
          <HStack style={{width:"70%"}}>
            <VStack>
              <Text style={{fontSize:15, color:"black"}}>ตำแหน่งปัจจุบัน</Text>
              <Text numberOfLines={1} style={{fontSize:20, paddingTop:"1%", color:"black"}}>ABCDEFGHIJKLMNOPQRSTUVWXYABCDEFGHIJKLMNOPQRSTUVWXY</Text>
            </VStack>
            <HStack p="9" style={{paddingTop:"2%"}}>
              <MenuButton icon="Octicons" name="pencil" active={false} onPress={() => navigation.push('Map')} mt={1} pr={3}/>
              <MenuButton icon="AntDesign" name="message1" active={this.activeMenu(['Chat'])} onPress={() => navigation.replace('Chat')} mt={1}/>
            </HStack>
          </HStack>
        </View>
      </ImageBackground>
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

export default Header;
