import React from "react";
import {Box,Text} from "native-base";

class HeaderChatUnitName extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <Box>
                <Text fontSize="2xl" marginTop={"11%"} marginLeft={"3%"} color={"white"} numberOfLines={1} maxWidth={330}>{this.props.name}</Text>
            </Box>

        );
    }
}

export default HeaderChatUnitName;
