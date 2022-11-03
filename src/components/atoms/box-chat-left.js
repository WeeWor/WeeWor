import React from "react";
import {Box, HStack, Image, Text} from "native-base";
import {StyleSheet} from "react-native";

class BoxChatLeft extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <Box>
                <HStack marginLeft={"2"}>
                    <Image source={{
                            uri: this.props.img
                    }}   alt="Alternate Text"  size={"12"} margin={"1%"} borderRadius={"40"}/>

                    <Box  style={styles.boxChatLeft}  marginY={"1%"}>
                        <Text color={"white"} >{this.props.message}</Text>
                    </Box>
                </HStack>
            </Box>
        );
    }
}
const styles = StyleSheet.create({
    boxChatLeft: {
        backgroundColor:"#797979",
        borderRadius:10,
        padding:"3%",
        justifyContent:"center",
        alignSelf:"center",
        marginRight:"30%",
    },

});
export default BoxChatLeft;
