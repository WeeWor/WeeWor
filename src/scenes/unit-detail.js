import React from "react";
import {Linking} from 'react-native';
import {Text, View, Image, ScrollView, Button, VStack} from "native-base";
import FontAwesome5 from "react-native-vector-icons/FontAwesome5";
import Feather from "react-native-vector-icons/Feather";
import AntDesign from "react-native-vector-icons/AntDesign";
import axios from "axios";
import { API_URL } from "../../config";

class UnitDetail extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      detail: {}
    }
  }

  componentDidMount() {
    this.getDetails();
  }

  async getDetails() {
    let data = (await axios.get(API_URL + "/unit/detail/" + this.props.navigation.getState().routes[1].params.id)).data;
    console.log(data);

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

  render() {
    return (
      <ScrollView style={{backgroundColor:'white'}}>
        <Image
            style={{width:'100%', height:250}}
            source={{uri: this.image(this.state.detail.service)}}
            alt=""
        />
        <View width={'100%'} style={{alignSelf: 'flex-end',
          position: 'absolute',
          left: 8,
          top: 8
        }}>
          <Button width={35} height={35} backgroundColor={'white'} opacity={0.7} borderRadius={100} onPress={() => this.props.navigation.goBack()}><FontAwesome5 name={'chevron-left'} color={'black'} size={15}/></Button>
        </View>
        <View>
          <Text bold fontSize="4xl" margin={3}>
            {this.state.detail.name}
          </Text>
          <Text fontSize="2xl" margin={3}>
            {this.state.detail.address}
          </Text>
          <VStack marginTop={5} marginBottom={5} space={4} px={2} alignItems={'center'} width={'100%'}>
            <Button width={'90%'} backgroundColor={"red.400"} borderRadius={40} onPress={() => Linking.openURL(`tel:${this.state.detail.phone}`)}>
              <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                <Text style={{color:'black', fontSize:26,lineHeight: 35 }} paddingRight={2}>โทร</Text>
                <Feather name={'phone-call'} color={'black'} size={28}/>
              </View>
            </Button>
            <Button width={'90%'} backgroundColor={"red.400"} borderRadius={40}>
              <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                <Text  style={{color:'black', fontSize:26,lineHeight: 35 }} paddingRight={2}>ข้อความ</Text>
                <AntDesign name={'message1'} color={'black'} size={28}/>
              </View>
            </Button>
          </VStack>
        </View>
      </ScrollView>
    );
  }
}

export default UnitDetail;
