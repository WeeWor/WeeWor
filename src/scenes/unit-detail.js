import React from "react";
import AppTemplate from "../components/templates/app";
import {Text, View, Image, ScrollView, Button, VStack} from "native-base";
import FontAwesome5 from "react-native-vector-icons/FontAwesome5";
import Feather from "react-native-vector-icons/Feather";
import AntDesign from "react-native-vector-icons/AntDesign";

class UnitDetail extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
        <AppTemplate {...this.props}>
          <ScrollView style={{backgroundColor:'white'}}>
            <Image
                style={{width:'100%', height:250}}
                source={{uri: 'https://kasemradvientiane.com/images/kasemrad-vientiane/kasemrad-international-hospital-vientiane/kasemrad-international-hospital-vientiane-02.jpg'}}
            />
            <View width={'100%'} style={{alignSelf: 'flex-end',
              position: 'absolute',
            }}>
              <Button width={35} height={35} backgroundColor={'white'} opacity={0.7} borderRadius={100}><FontAwesome5 name={'chevron-left'} color={'black'} size={15}/></Button>
            </View>
            <View>
              <Text bold fontSize="4xl" margin={3}>
                Kasemrad International Hospital
              </Text>
              <Text fontSize="2xl" margin={3}>
                No.999, 450 years Road,
                Donnokkhoum Village, Sisattanak District,
                Vientiane Capital, Lao PDR
              </Text>
              <VStack marginTop={5} marginBottom={5} space={4} px={2} alignItems={'center'} width={'100%'}>
                <Button width={'90%'} backgroundColor={"red.400"} borderRadius={40}>
                  <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                    <Text  style={{color:'black', fontSize:26,lineHeight: 35 }} paddingRight={2}>โทร</Text>
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
        </AppTemplate>
    );
  }
}

export default UnitDetail;
