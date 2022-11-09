import React from "react";
import { Box, Image, Text } from "native-base";
import {StyleSheet} from "react-native";

class BoxChatRight extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <Box style={styles.boxChatRight}  marginY={"1%"}>
                <Text color={"white"} >{this.props.message}</Text>
                {this.props.img ?
                  <Image source={{uri: this.props.img}} alt="google map" width="300" height="100" resizeMode="cover"/>
                  : null
                }
            </Box>
        );
    }
}
const styles = StyleSheet.create({
    boxChatRight: {
        backgroundColor:"#ff7272",
        borderRadius:10,
        padding:"3%",
        justifyContent:"center",
        alignSelf:"flex-end",
        marginRight:"3%",
        marginLeft:"30%"
    },

});
export default BoxChatRight;
