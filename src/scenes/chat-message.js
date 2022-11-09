import React from "react";
import {connect} from "react-redux";
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
import axios from "axios";
import { API_URL } from "../../config";
import AsyncStorage from "@react-native-async-storage/async-storage";
import profileStorage from "../utils/profileStorage";

const mapStateToProps = state => ({
  latitude: state.location.latitude,
  longitude: state.location.longitude,
  address: state.location.address
});

class ChatMessage extends React.Component {
  constructor(props) {
    super(props);
    this.scroll = React.createRef();
    this.state = {
      chats: [],
      menus: [],
      detail: {},
    }
  }

  async componentDidMount() {
    await this.getDetails();
    this.setState({ chats: [...this.state.chats, (
        <BoxChatLeft img={this.image(this.state.detail.service)} message={`ระบบฉุกเฉิน ${this.state.detail.name} พร้อมให้บริการ`}/>
      )] });
    this.setState({ menus: [...this.state.menus,
        <BoxOption detail="ประวัติส่วนตัว" onPress={() => this.onPersonalData()}/>,
        <BoxOption detail="ประวัติคนอื่น" onPress={() => this.onOtherDataMenu()}/>,
        <BoxOption detail="ส่งตำแหน่งปัจจุบัน" onPress={() => this.onSendPosition()}/>,
      ] });
  }

  async getDetails() {
    let data = (await axios.get(API_URL + "/unit/detail/" + this.props.navigation.getState().routes[1].params.id)).data;

    return this.setState({detail: data});
  }

  image(type) {
    let res = "";
    switch (type) {
      case "medical":
        res = "https://i.ibb.co/THSyYzL/image.jpg";
        break;
      case "fire_department":
        res = "https://i.ibb.co/6gLSHTc/image.jpg";
        break;
      case "police":
        res = "https://i.ibb.co/kBh3Dxf/image.jpg"
        break;
    }

    return res;
  }

  onSubmitChat(text) {
    this.setState({ chats: [...this.state.chats, (
        <BoxChatRight message={text}/>
      )] });
    return this.scroll.current.scrollToEnd({ animated: true });
  }

  async onPersonalData() {
    const data = JSON.parse(await AsyncStorage.getItem('profile'));
    const text = `ประวัติ${data.name}\nเบอร์โทร ${data.phone}\nอายุ ${data.age} ปี กรุ๊ปเลือด ${data.blood}\nโรคประจำตัว ${data.congenital}\nยาที่แพ้ ${data.allergy}`;

    this.setState({ chats: [...this.state.chats, (
        <BoxChatRight message={text}/>
      )] });

    return this.scroll.current.scrollToEnd({ animated: true });
  }

  async onOtherDataMenu() {
    const data = Object.entries(await profileStorage.getItem('profiles'));
    let res = [];

    data.forEach((item, index) => {
      res.push(
        <BoxOption detail={item[1].nickname} onPress={() => this.onOtherData(item[1].id)} key={index}/>
      );
    });

    return this.setState({ menus: [
        <BoxOption detail="ย้อนกลับ" onPress={() => {
          this.setState({ menus: [
              <BoxOption detail="ประวัติส่วนตัว" onPress={() => this.onPersonalData()}/>,
              <BoxOption detail="ประวัติคนอื่น" onPress={() => this.onOtherDataMenu()}/>,
              <BoxOption detail="ส่งตำแหน่งปัจจุบัน" onPress={() => this.onSendPosition()}/>
            ]});
        }}/>, res
      ] });
  }

  async onOtherData(id) {
    const data = (await profileStorage.getItem('profiles'))[id];
    const text = `ประวัติ${data.name}\nเบอร์โทร ${data.phone}\nอายุ ${data.age} ปี กรุ๊ปเลือด ${data.blood}\nโรคประจำตัว ${data.congenital}\nยาที่แพ้ ${data.allergy}`;

    this.setState({ chats: [...this.state.chats, (
        <BoxChatRight message={text}/>
      )] });

    return this.scroll.current.scrollToEnd({ animated: true });
  }

  onSendPosition() {
    const text = `ตำแหน่งปัจจุบัน\n${this.props.address}`;
    const img = `https://maps.googleapis.com/maps/api/staticmap?center=${this.props.latitude},${this.props.longitude}&zoom=14&size=400x200&markers=color:red%7C${this.props.latitude},${this.props.longitude}&key=AIzaSyCA0bz21Y96d8ltt2tyDtnUEGlkJfRC5Zw`;

    this.setState({ chats: [...this.state.chats,
        <BoxChatRight message={text} img={img}/>,
        <BoxChatLeft img={this.image(this.state.detail.service)} message={`รับทราบ ${this.state.detail.name} กำลังส่งหน่วยงานไป`}/>
      ] });

    return this.scroll.current.scrollToEnd({ animated: true });
  }

  render() {
      const { navigation } = this.props;
    return (
        <View style={{flex: 1}} backgroundColor={"white"}>
            {/*header*/}
            <View width={"100%"} height={100}>
                <ImageBackground source={this.props.redMode ? null : bg} style={{height:"100%", width:"100%", flex:1}}>
                      <HStack flex={1}   marginLeft={"3%"} marginTop={"3"}>
                          <Icon as={Icons["AntDesign"]} name={"left"} color="black" size={"xl"} marginTop={"9%"}  onPress={() => navigation.goBack()}/>
                          <HeaderChatUnitProfile img={this.image(this.state.detail.service)}/>
                          <HeaderChatUnitName name={this.state.detail.name}/>
                      </HStack>
                </ImageBackground>
            </View>

            {/*chat*/}
            <ScrollView ref={this.scroll}>
              <Box height={"100%"} width={"100%"} marginTop={"2"}>
                {this.state.chats}
              </Box>
            </ScrollView>

            {/*footer*/}
            <View width={"100%"} borderColor={"gray.200"} >
                  <HStack marginBottom={"1%"} marginX={"2"}  >
                      <ScrollView horizontal   showsHorizontalScrollIndicator={false}>
                        {this.state.menus}
                      </ScrollView>
                  </HStack>
                <TextBoxInput onSubmitEditing={(text) => this.onSubmitChat(text)}/>
            </View>
        </View>
    );
  }

}

export default connect(mapStateToProps)(ChatMessage);
