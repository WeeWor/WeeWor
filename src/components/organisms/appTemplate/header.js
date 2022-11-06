import React from 'react';
import { connect } from 'react-redux';
import {Text, View, HStack, VStack} from "native-base";
import bg from "../../../assets/images/bgHeader.png"
import { ImageBackground } from "react-native";
import MenuButton from "../../molecules/menu-button";

const mapStateToProps = state => ({
  address: state.location.address
});

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
          <HStack>
            <VStack style={{width:"78%"}}>
              <Text style={{fontSize:15, color:"black"}}>ตำแหน่งปัจจุบัน</Text>
              <Text numberOfLines={1} style={{fontSize:20, paddingTop:"1%", color:"black"}}>{this.props.address}</Text>
            </VStack>
            <HStack style={{width: "22%", paddingTop:"2%"}}>
              <MenuButton icon="Octicons" name="pencil" active={false} onPress={() => navigation.push('Map')} mt={1} pr={3}/>
              <MenuButton icon="AntDesign" name="message1" active={this.activeMenu(['Chat'])} onPress={() => navigation.replace('Chat')} mt={1}/>
            </HStack>
          </HStack>
        </View>
      </ImageBackground>
    );
  }
}

export default connect(mapStateToProps)(Header);
