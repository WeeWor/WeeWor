import React from "react";
import {Box} from "native-base";
import {TextInput} from "react-native";

class TextBoxInput extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <Box backgroundColor={"gray.300"}  borderRadius={30} width={"90%"}  alignSelf={"center"} justifyContent={"center"} marginBottom={"2%"} marginTop={2} height={"12"} paddingX={"2"}>
                <TextInput color={"gray.500"} placeholder="ใส่ข้อความของท่านที่นี่ ..."/>
            </Box>
        );
    }
}

export default TextBoxInput;
