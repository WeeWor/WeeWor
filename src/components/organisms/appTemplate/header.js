import React from 'react';
import {Text, View, HStack, Icon, Image, VStack, Box} from "native-base";
import icons from "../../../utils/icons";
import bg from "../../../assets/image/bgHeader.png"

class Header extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {

    return (
        <>
        <View style={{paddingBottom:"4%"}}>
          <Image style={{position:"absolute", width:"100%"}} source={bg} alt="bgHeader"/>
        </View>
        <View style={{paddingTop:"4%", paddingLeft:"3%", paddingRight:"3%"}}>
          <HStack style={{width:"70%"}}>
            <VStack>
              <Text style={{fontSize:15, color:"white"}}>{"ตำแหน่งปัจจุบัน"}</Text>
              <Text numberOfLines={1} style={{fontSize:20, paddingTop:"1%", color:"white"}}>{"ABCDEFGHIJKLMNOPQRSTUVWXYABCDEFGHIJKLMNOPQRSTUVWXY"}</Text>
            </VStack>
            <HStack p="9" style={{paddingTop:"3%"}}>
              <Box pr="4">
                <Icon as={icons.Octicons} name="pencil" size="32px" color="white" solid />
              </Box>
              <Box>
                <Icon as={icons.AntDesign} name="message1" size="32px" color="white" solid />
              </Box>
            </HStack>
          </HStack>
        </View>
        </>
    );
  }
}

export default Header;
