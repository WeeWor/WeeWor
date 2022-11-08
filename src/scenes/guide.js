import React from "react";
import {Button, Image, ScrollView, Text, View} from "native-base";
import FontAwesome5 from "react-native-vector-icons/FontAwesome5";
import guide from "../assets/guide.json";

class Guide extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      detail: {}
    }
  }

  componentDidMount() {
    this.getDetail();
  }

  getDetail() {
    const data = guide.find(item => item.id === this.props.navigation.getState().routes[1].params.id)
    return this.setState({detail: data});
  }

  render() {
    return (
      <ScrollView style={{backgroundColor:'white'}}>
        <Image
            style={{width:'100%', height:250}}
            source={{uri: this.state.detail.image}}
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
            {this.state.detail.description}
          </Text>
        </View>
      </ScrollView>
    );
  }
}

export default Guide;
