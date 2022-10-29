import React from "react";
import {HStack, Icon, Image, Text, View, ScrollView, VStack} from "native-base";
import AppTemplate from "../components/templates/app";
import { ImageSlider } from "react-native-image-slider-banner";
import center from "native-base/src/theme/components/center";
import UnitBox from "../components/molecules/unit-box";
import GuideBox from "../components/molecules/guide-box";


class Home extends React.Component {
  constructor(props) {
    super(props);
      this.state = {

      };

  }

  render() {
    return (
      <AppTemplate {...this.props}>
          <ScrollView>
              <View paddingLeft={3} paddingRight={3}>
                  <ImageSlider
                      data={[
                          {img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ5a5uCP-n4teeW2SApcIqUrcQApev8ZVCJkA&usqp=CAU'},
                          {img: 'https://thumbs.dreamstime.com/b/environment-earth-day-hands-trees-growing-seedlings-bokeh-green-background-female-hand-holding-tree-nature-field-gra-130247647.jpg'},
                          {img: 'https://cdn.pixabay.com/photo/2015/04/19/08/32/marguerite-729510__340.jpg'}
                      ]}
                      autoPlay={false}
                      closeIconColor="#fff"
                      preview={false}
                  />
              </View>
              <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                  <Text bold fontSize="2xl" marginLeft={3} marginBottom={3}>หน่วยงานที่ใกล้คุณ</Text>
                  <Text marginTop={2} fontSize="lg">เพิ่มเติม ></Text>
              </View>
              <ScrollView horizontal={true}>
                  <HStack flex={3}>
                      <UnitBox img="https://wallpaperaccess.com/full/317501.jpg" text="SoB"/>
                      <UnitBox img="https://wallpaperaccess.com/full/317501.jpg" text="SoB"/>
                      <UnitBox img="https://wallpaperaccess.com/full/317501.jpg" text="SoB"/>
                      <UnitBox img="https://wallpaperaccess.com/full/317501.jpg" text="SoB"/>
                  </HStack>
              </ScrollView>
              <Text bold fontSize="2xl" marginLeft={3} marginBottom={3}>วิธีการรับมืออุบัติเหตุต่าง ๆ</Text>
              <VStack>
                  <HStack space={4} px={2}>
                    <GuideBox img="https://wallpaperaccess.com/full/317501.jpg" text="SoB"/>
                    <GuideBox img="https://wallpaperaccess.com/full/317501.jpg" text="SoB"/>
                  </HStack>
                  <HStack space={4} px={2}>
                    <GuideBox img="https://wallpaperaccess.com/full/317501.jpg" text="SoB"/>
                    <GuideBox img="https://wallpaperaccess.com/full/317501.jpg" text="SoB"/>
                  </HStack>
              </VStack>
          </ScrollView>
      </AppTemplate>
    );
  }
}

export default Home;
