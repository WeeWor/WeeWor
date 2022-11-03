import React from "react";
import {Box,Text,} from "native-base";
import {StyleSheet} from "react-native";

class BoxOption extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <Box  style={styles.boxOption} >
                <Text color={"white"} padding={"2"} >{this.props.detail}</Text>
            </Box>

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
