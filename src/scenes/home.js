import React from "react";
import {HStack, Icon, Image, Text, View, ScrollView, VStack} from "native-base";
import AppTemplate from "../components/templates/app";
import { ImageSlider } from "react-native-image-slider-banner";
import Icons from "../utils/icons";
import center from "native-base/src/theme/components/center";


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
                      onItemChanged={(item) => console.log("item", item)}
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
                      <VStack alignItems={'center'} width={150}>
                      <Image borderRadius={10} source={{
                          uri: "https://wallpaperaccess.com/full/317501.jpg"
                      }} alt="Alternate Text" size="xl" />
                          <Text>SoB</Text>
                      </VStack>
                      <VStack alignItems={'center'} width={150}>
                      <Image borderRadius={10} source={{
                          uri: "https://wallpaperaccess.com/full/317501.jpg"
                      }} alt="Alternate Text" size="xl" />
                      <Text>SoB</Text>
                      </VStack>
                      <VStack alignItems={'center'} width={150}>
                          <Image borderRadius={10} source={{
                              uri: "https://wallpaperaccess.com/full/317501.jpg"
                          }} alt="Alternate Text" size="xl" />
                          <Text>SoB</Text>
                      </VStack>
                      <VStack alignItems={'center'} width={150}>
                          <Image borderRadius={10} source={{
                              uri: "https://wallpaperaccess.com/full/317501.jpg"
                          }} alt="Alternate Text" size="xl" />
                          <Text>SoB</Text>
                      </VStack>
                  </HStack>
              </ScrollView>
              <Text bold fontSize="2xl" marginLeft={3} marginBottom={3}>วิธีการรับมืออุบัติเหตุต่าง ๆ</Text>
              <VStack>
                  <HStack>
                      <VStack width={'50%'} alignItems={'center'}>
                          <Image borderRadius={10} source={{
                              uri: "https://wallpaperaccess.com/full/317501.jpg"
                          }} alt="Alternate Text" width={180} height={180} />
                          <Text>SoB</Text>
                      </VStack>
                      <VStack width={'50%'} alignItems={'center'}>
                          <Image borderRadius={10} source={{
                              uri: "https://wallpaperaccess.com/full/317501.jpg"
                          }} alt="Alternate Text" width={180} height={180} />
                          <Text>SoB</Text>
                      </VStack>
                  </HStack>
                  <HStack>
                      <VStack width={'50%'} alignItems={'center'}>
                          <Image borderRadius={10} source={{
                              uri: "https://wallpaperaccess.com/full/317501.jpg"
                          }} alt="Alternate Text" width={180} height={180} />
                          <Text>SoB</Text>
                      </VStack>
                      <VStack width={'50%'} alignItems={'center'}>
                          <Image borderRadius={10} source={{
                              uri: "https://wallpaperaccess.com/full/317501.jpg"
                          }} alt="Alternate Text" width={180} height={180} />
                          <Text>SoB</Text>
                      </VStack>
                  </HStack>
              </VStack>
          </ScrollView>
      </AppTemplate>
    );
  }
}

export default Home;
