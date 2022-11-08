import React from "react";
import { connect } from 'react-redux';
import {HStack, Text, View, ScrollView, VStack} from "native-base";
import AppTemplate from "../components/templates/app";
import { ImageSlider } from "react-native-image-slider-banner";
import UnitBox from "../components/molecules/unit-box";
import GuideBox from "../components/molecules/guide-box";
import axios from "axios";
import { API_URL } from "../../config";

const mapStateToProps = state => ({
  latitude: state.location.latitude,
  longitude: state.location.longitude,
});

class Home extends React.Component {
  constructor(props) {
    super(props);
      this.state = {
        units: []
      };
  }

  componentDidMount() {
    this.getNearby();
  }

  componentDidUpdate(prevProps, prevState, snapshot) {
    if (prevProps.latitude !== this.props.latitude ||
      prevProps.longitude !== this.props.longitude) {
      this.getNearby();
    }
  }

  async getNearby() {
    const body = {
      latitude: this.props.latitude,
      longitude: this.props.longitude,
    };

    if (this.props.latitude !== 0 && this.props.longitude !== 0) {
      let data = (await axios.post(API_URL + "/unit/nearby", body)).data;

      if (data.message !== "400 Bad Request") {
        return this.setState({ units: data });
      }
    }
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
    const { navigation } = this.props;

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
                  <Text marginTop={2} fontSize="lg" onPress={() => navigation.replace('Search')}>เพิ่มเติม ></Text>
              </View>
              <ScrollView horizontal={true}>
                  <HStack flex={3}>
                    {
                      this.state.units.map((item, index) => (
                        <UnitBox img={this.image(item.service)} text={item.name} onPress={() => navigation.push('UnitDetail', {id: item.id})} key={index}/>
                      ))
                    }
                  </HStack>
              </ScrollView>
              <Text bold fontSize="2xl" marginLeft={3} marginBottom={3}>วิธีการรับมืออุบัติเหตุต่าง ๆ</Text>
              <VStack>
                  <HStack space={4} px={2}>
                    <GuideBox img="https://wallpaperaccess.com/full/317501.jpg" text="SoB" onPress={() => navigation.push('Guide')}/>
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

export default connect(mapStateToProps)(Home);
