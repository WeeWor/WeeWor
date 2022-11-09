import React from "react";
import {Box,Text,} from "native-base";
import { StyleSheet, TouchableOpacity } from "react-native";

class BoxOption extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
          <TouchableOpacity onPress={this.props.onPress}>
            <Box style={styles.boxOption}>
                <Text color={"white"} padding={"2"} >{this.props.detail}</Text>
            </Box>
          </TouchableOpacity>
        );
    }
}
const styles = StyleSheet.create({
    boxOption: {
        backgroundColor:"#ff7272",
        borderRadius:10,
        justifyContent:"center",
        alignSelf:"center",
        margin:2
    },
});
export default BoxOption;
