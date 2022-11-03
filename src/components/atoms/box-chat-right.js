import React from "react";
import {Box,Text} from "native-base";
import {StyleSheet} from "react-native";

class BoxChatRight extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <Box style={styles.boxChatRight}  marginY={"1%"}>
                <Text color={"white"} >{this.props.message}</Text>
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
