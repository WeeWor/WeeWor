import React from "react";
import {Button, Image, ScrollView, Text, View, VStack} from "native-base";
import FontAwesome5 from "react-native-vector-icons/FontAwesome5";
import Feather from "react-native-vector-icons/Feather";
import AntDesign from "react-native-vector-icons/AntDesign";
import AppTemplate from "../components/templates/app";

class Guide extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
        <AppTemplate {...this.props}>
          <ScrollView style={{backgroundColor:'white'}}>
            <Image
                style={{width:'100%', height:250}}
                source={{uri: 'https://img.kapook.com/u/2016/kantana/12health/ppa4_1.jpg'}}
            />
            <View width={'100%'} style={{alignSelf: 'flex-end',
              position: 'absolute',
            }}>
              <Button width={35} height={35} backgroundColor={'white'} opacity={0.7} borderRadius={100}><FontAwesome5 name={'chevron-left'} color={'black'} size={15}/></Button>
            </View>
            <View>
              <Text bold fontSize="4xl" margin={3}>
                การช่วยเหลือคนจมน้ำ
              </Text>
              <Text fontSize="2xl" margin={3}>
                ผู้ช่วยเหลือยืดแขนและไหล่เหยียดตรง แล้วปล่อยน้ำหนักตัวผ่านจากไหล่ไปที่ลำแขนสองข้าง และลงไปสู่กระดูกหน้าอกในแนวตั้งฉากกับลำตัว กดลลงลึกประมาณ 2 นิ้ว หรือราว ๆ 5 เซนติเมตรของความหนาหน้าอก ให้กดลงไปในแนวดิ่งและอย่ากระแทก ให้ทำสลับกับการเป่าปาก ใช้เทคนิคการเป่าปาก 2 ครั้ง/การกดหน้าอก 30 ครั้ง
              </Text>
            </View>
          </ScrollView>
        </AppTemplate>
    );
  }
}

export default Guide;
