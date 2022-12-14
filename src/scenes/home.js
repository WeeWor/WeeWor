import React from "react";
import { connect } from 'react-redux';
import { HStack, Text, View, ScrollView, VStack } from "native-base";
import AppTemplate from "../components/templates/app";
import { ImageSlider } from "react-native-image-slider-banner";
import UnitBox from "../components/molecules/unit-box";
import GuideBox from "../components/molecules/guide-box";
import axios from "axios";
import { API_URL } from "../../config";
import guide from "../assets/guide.json";

const mapStateToProps = state => ({
  latitude: state.location.latitude,
  longitude: state.location.longitude,
});

class Home extends React.Component {
  constructor(props) {
    super(props);
      this.state = {
        units: [],
        guides: []
      };
  }

  componentDidMount() {
    this.getNearby();
    this.getGuides();
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

  getGuides() {
    return this.setState({guides: guide});
  }

  showGuides() {
    let data = this.state.guides;
    let res = [];
    for (let i=0;i<data.length/2;i++) {
      res.push(
        <HStack space={4} px={2} key={i}>
          <GuideBox img={data[i*2].image} text={data[i*2].name} onPress={() => this.props.navigation.push('Guide', {id: data[i*2].id})} key={data[i*2].id}/>
          {data[(i*2)+1] ? <GuideBox img={data[(i*2)+1].image} text={data[(i*2)+1].name} onPress={() => this.props.navigation.push('Guide', {id: data[(i*2)+1].id})} key={data[(i*2)+1].id}/> : ''}
        </HStack>
      );
    }

    return res;
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
                          {img: 'https://i.ibb.co/vv0Zt5T/unknown2.png'},
                          {img: 'https://i.ibb.co/M8qRMH7/unknown1.png'},
                          {img: 'https://i.ibb.co/g90wGSs/unknown.png'},
                          {img: 'https://i.ibb.co/dt3Szzs/fire-02.jpg'}
                      ]}
                      autoPlay={false}
                      closeIconColor="#fff"
                      preview={false}
                  />
              </View>
              <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                  <Text bold fontSize="2xl" marginLeft={3} marginBottom={3}>??????????????????????????????????????????????????????</Text>
                  <Text marginTop={2} fontSize="lg" onPress={() => navigation.replace('Search')}>??????????????????????????? ></Text>
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
              <Text bold fontSize="2xl" marginLeft={3} marginBottom={3}>????????????????????????????????????????????????????????????????????????????????? ???</Text>
              <VStack>
                {this.showGuides()}
              </VStack>
          </ScrollView>
      </AppTemplate>
    );
  }
}

export default connect(mapStateToProps)(Home);
