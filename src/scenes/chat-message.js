import React from "react";
import {Box, HStack, Icon, ScrollView,View} from "native-base";
import bg from "../assets/images/bg.png";
import {ImageBackground} from "react-native";
import Icons from "../utils/icons";
import BoxChatLeft from "../components/atoms/box-chat-left";
import BoxChatRight from "../components/atoms/box-chat-right";
import HeaderChatUnitProfile from "../components/atoms/header-chat-unit-profile";
import HeaderChatUnitName from "../components/atoms/header-chat-unit-name";
import BoxOption from "../components/atoms/box-option";
import TextBoxInput from "../components/atoms/text-box-input";

class ChatMessage extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
      const { navigation } = this.props;
    return (
        <View style={{flex: 1}} backgroundColor={"white"}>
            {/*header*/}
            <View width={"100%"} height={100}>
                <ImageBackground source={this.props.redMode ? null : bg} style={{height:"100%", width:"100%", flex:1}}>
                      <HStack flex={1}   marginLeft={"3%"} marginTop={"3"}>
                          <Icon as={Icons["AntDesign"]} name={"left"} color="black" size={"xl"} marginTop={"9%"}  onPress={() => navigation.push('Chat')}/>
                          <HeaderChatUnitProfile img="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRTplZHUVIoXC-YGbEg3ylOwDJU6k8de8C7vms1X67w7g&s" unit="โรงพยาบาลabc"/>
                          <HeaderChatUnitName name="โรงพยาบาลabc"/>
                      </HStack>
                </ImageBackground>
            </View>

            {/*chat*/}
            <ScrollView>
              <Box height={"100%"} width={"100%"} marginTop={"2"}>
                  <BoxChatLeft img="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRTplZHUVIoXC-YGbEg3ylOwDJU6k8de8C7vms1X67w7g&s" message="ระบบฉุกเฉินโรงพยาบาล abc พร้อมให้บริการ"/>
                  <BoxChatRight message="จะตายแล้วจ้า"/>
                  <BoxChatLeft img="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRTplZHUVIoXC-YGbEg3ylOwDJU6k8de8C7vms1X67w7g&s" message="ตายห่าไปซะไอเปรต"/>
              </Box>
            </ScrollView>

            {/*footer*/}
            <View width={"100%"} borderColor={"gray.200"} >
                  <HStack marginBottom={"1%"} marginX={"2"}  >
                      <ScrollView horizontal   showsHorizontalScrollIndicator={false}>
                          <BoxOption  detail="ประวัติส่วนตัว"/>
                          <BoxOption  detail="ประวัติคนในครอบครัว"/>
                          <BoxOption  detail="ประวัติส่วนตัว"/>
                          <BoxOption  detail="ประวัติคนในครอบครัว"/>
                      </ScrollView>
                  </HStack>
                <TextBoxInput/>
            </View>
        </View>



    );
  }

}

export default ChatMessage;
