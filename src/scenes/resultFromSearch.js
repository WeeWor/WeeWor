import { View, Text, ScrollView, StyleSheet, Image, SafeAreaView } from 'react-native'
import React from 'react'
import { FlatList, StatusBar } from 'native-base'

const resultFromSearch = () => {

    const agency = [
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
    ];

    const listAgrncy = ( {item} ) =>  (
        <View style={styles.item}>

            <View style={styles.pgContainer}>
                <Image src={item.image} style={styles.photo}/>
            </View>

            <View>
                <Text style={styles.textTitle}> {item.name} </Text>
                <Text style={styles.textDetail}> {item.detail} </Text>
            </View>


        </View>

    )

    return (

        <SafeAreaView>

            <FlatList
            data = { agency }
            renderItem = { listAgrncy }
            />


        </SafeAreaView>

    )
}

const styles = StyleSheet.create({

    textTitle:{
        fontSize:18,
        fontWeight:'bold',
        color:"black",
        fontFamily:"PressStart2P-Regular",
        marginLeft:4,
        justifyContent:'flex-start',
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

    itemDetail:{
        flex:1,
        flexDirection:'colum',
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

export default resultFromSearch