import React from 'react';
import {Text, View, HStack, Icon} from "native-base";
import icons from "../../../utils/icons";

class Header extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {

    return (
        <>

          <View style={{paddingLeft:"3%", paddingRight:"3%"}}>
            <View>
               <Text style={{fontSize:15}}>
                 {"ตำแหน่งปัจจุบัน"}
               </Text>
               <HStack>
                 <Text numberOfLines={1} style={{width:"90%", fontSize:20}}>{"ABCDEFGHIJKLMNOPQRSTUVWXYABCDEFGHIJKLMNOPQRSTUVWXY"}</Text>
               </HStack>
               <View style={{position:"absolute", paddingTop:"3%", paddingLeft:"87%", display:"flex", flexDirection: "row"}}>
                 <Icon as={icons.Octicons} name="pencil" size="30px" color="black"/>
                 <Icon as={icons.AntDesign} name="message1" size="30px" color="black"/>
               </View>
            </View>
          </View>

        </>
    );
  }
}

export default Header;
