import React from "react";
import {Box, Image,} from "native-base";

class HeaderChatUnitProfile extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <Box>
                <Image source={{
                        uri: this.props.img
                    }}   alt="Alternate Text"  size={"16"} borderRadius={40} marginTop={"7%"} marginLeft={"3%"}/>

            </Box>

        );
    }
}

export default HeaderChatUnitProfile;
