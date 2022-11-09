import React from "react";
import {Box} from "native-base";
import {TextInput} from "react-native";

class TextBoxInput extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            text: ''
        }
    }
    render() {
        return (
            <Box backgroundColor={"gray.300"}  borderRadius={30} width={"90%"}  alignSelf={"center"} justifyContent={"center"} marginBottom={"2%"} marginTop={2} height={"12"} paddingX={"2"}>
                <TextInput color={"gray.500"} value={this.state.text} onChangeText={(text) => this.setState({text: text})} placeholder="ใส่ข้อความของท่านที่นี่ ..." onSubmitEditing={(text) => {
                    this.props.onSubmitEditing(text.nativeEvent.text);
                    this.setState({text: ''});
                }}/>
            </Box>
        );
    }
}

export default TextBoxInput;
