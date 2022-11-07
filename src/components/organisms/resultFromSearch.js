import React from "react";
import { connect } from 'react-redux';
import { Text, StyleSheet, Image, SafeAreaView, TouchableOpacity } from "react-native";
import axios from "axios";
import {API_URL} from "../../../config";
import { HStack, VStack } from "native-base";

const mapStateToProps = state => ({
    unit: state.search.unit,
    province: state.search.province,
    district: state.search.district,
    keyword: state.search.keyword,
    latitude: state.location.latitude,
    longitude: state.location.longitude,
});

class ResultFromSearch extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            units: []
        }
    }

    componentDidMount() {
        this.getEmergencyUnits();
    }

    componentDidUpdate(prevProps, prevState, snapshot) {
        if (prevProps.unit !== this.props.unit ||
          prevProps.province !== this.props.province ||
          prevProps.district !== this.props.district ||
          prevProps.keyword !== this.props.keyword ||
          prevProps.latitude !== this.props.latitude ||
          prevProps.longitude !== this.props.longitude) {
            this.getEmergencyUnits();
        }
    }

    async getEmergencyUnits() {
        const body = {
            latitude: this.props.latitude,
            longitude: this.props.longitude,
            ...(this.props.keyword !== '') && {search: this.props.keyword},
            ...(this.props.unit !== '') && {unit: this.props.unit},
            ...(this.props.province !== '') && {province: this.props.province},
            ...(this.props.district !== '') && {district: this.props.district},
        };
        let data = (await axios.post(API_URL + "/unit/search", body)).data;
        return this.setState({units: data});
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
          <SafeAreaView>
              {
                  this.state.units.map((item, index) => (
                    <TouchableOpacity style={styles.item} key={index}>
                        <HStack>
                            <VStack style={{width:"50%"}}>
                                <Image source={{uri: this.image(item.service)}} style={styles.photo}/>
                            </VStack>
                            <VStack style={{width:"50%"}}>
                                <Text style={styles.textTitle}>{item.name}</Text>
                                <Text style={styles.textDetail}>ระยะห่าง {item.distance} กิโลเมตร</Text>
                            </VStack>
                        </HStack>
                    </TouchableOpacity>
                  ))
              }
          </SafeAreaView>
        );
    }
}

const styles = StyleSheet.create({
    textTitle:{
        fontSize:18,
        fontWeight:'bold',
        color:"black",
        fontFamily:"PressStart2P-Regular",
    },
    textDetail:{
        fontSize:15,
        color:"black",
        fontFamily:"PressStart2P-Regular",
    },
    item:{
        marginLeft:7,
        paddingVertical:13,
    },
    photo:{
        borderRadius:15,
        height:100,
        width:180,
        resizeMode: "cover"
    },
});

export default connect(mapStateToProps)(ResultFromSearch);
