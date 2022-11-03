import React from "react";
import {Box,Text} from "native-base";

class HeaderChatUnitName extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <Box>
                <Text fontSize="2xl" marginTop={"11%"} marginLeft={"3%"} color={"white"} >{this.props.name}</Text>
            </Box>

        );
    }
}

export default HeaderChatUnitName;
