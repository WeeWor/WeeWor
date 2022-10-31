import React from "react";
import { View, Text, StyleSheet, Image, SafeAreaView, TouchableOpacity } from "react-native";
import { FlatList } from "native-base";

class ResultFromSearch extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            agency: [
                {
                    id:1,
                    name:"โรงพยาบาลธรรมศาสตร์",
                    // image: require("../assets/images/Amulent.JPG"),
                    detail:"รักษาผู้ป่วยแุกเฉิน ทั่วไป เรื้อรัง "
                },
                {
                    id:2,
                    name:"สถานีดับเพลิง คลองหลวง",
                    // image: require('./assets/images/Amulent.JPG'),
                    detail:"ดับไฟไงงงงง"
                },
                {
                    id:3,
                    name:"สถานีตำรวจ คลองหลวง",
                    // image: require('./assets/images/Amulent.JPG'),
                    detail:"จับๆๆ "
                },
                {
                    id:4,
                    name:"โรงพยาบาลเปาโล",
                    // image: require('./assets/images/Amulent.JPG'),
                    detail:"รักษาผู้ป่วยแุกเฉิน ทั่วไป เรื้อรัง "
                },
                {
                    id:5,
                    name:"โรงพยาบาลธแพทย์รังสิต",
                    // image: require('./assets/images/Amulent.JPG'),
                    detail:"รักษาผู้ป่วยแุกเฉิน ทั่วไป เรื้อรัง "
                },
                {
                    id:6,
                    name:"สถานีตำรวจ ปากคลองรังสิต",
                    // image: require('./assets/images/Amulent.JPG'),
                    detail:"จับ"
                },
                {
                    id:7,
                    name:"สถานีดับเพลิง รังสิต",
                    // image: require('./assets/images/Amulent.JPG'),
                    detail:"ดับไฟ "
                },
                {
                    id:8,
                    name:"สถานีดับเพลิง คลองหลวง",
                    // image: require('./assets/images/Amulent.JPG'),
                    detail:"ดับ"
                },
            ]
        }
    }

    listAgency({item}, index) {
        return (
          <TouchableOpacity style={styles.item} key={index}>
              <View style={styles.pgContainer}>
                  <Image src={item.image} style={styles.photo}/>
              </View>

              <View>
                  <Text style={styles.textTitle}> {item.name} </Text>
                  <Text style={styles.textDetail}> {item.detail} </Text>
              </View>
          </TouchableOpacity>
        );
    }

    render() {
        return (
          <SafeAreaView>
              {this.state.agency.map((item, index) => this.listAgency({ item }, index))}
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
        marginLeft:4,
    },

    textDetail:{
        fontSize:15,
        color:"black",
        fontFamily:"PressStart2P-Regular",
        marginLeft:4,
    },

    item:{
        flexDirection:'row',
        alignItems:'center',
        marginLeft:7,
        paddingVertical:13,
    },

    pgContainer:{
        backgroundColor: "#FF0000",
        borderRadius:15,
        height:102,
        width:170,
        justifyContent:"center",
        alignItems: "center",
    },

    photo:{
        borderRadius:15,
        height:102,
        width:170,
    },
});

export default ResultFromSearch;
