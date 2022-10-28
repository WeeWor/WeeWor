import React from "react";
import {Box, HStack, Text, VStack, Image} from "native-base";
import AppTemplate from "../components/templates/app";

class Chat extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
        <AppTemplate {...this.props}>

          <Box alignItems="center" paddingY="4">
            <Box height="85" width="380"  rounded="18" background="white">
                <HStack space={3} justifyContent="center">
                  <Box width="70" height="2.5"> <Image source={{
                      uri: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRTplZHUVIoXC-YGbEg3ylOwDJU6k8de8C7vms1X67w7g&s"
                  }} alt="Alternate Text" size="sm" borderRadius={100}/>
                  </Box>
                  <Box width= "240" height="70" >
                    <VStack space={2} >
                      <Box paddingTop="2.5"><Text fontSize={25} >ชื่อหน่วยงาน</Text></Box>
                      <Box paddingBottom="2.5">ล่าสุดใน 3 ชั่วโมงที่แล้ว</Box>
                    </VStack>
                  </Box>
                    <Box width="30" height="85" alignItems="center" paddingY="2" ><Box width="5" height="5" bg="red.500" borderRadius="15"></Box> </Box>
                </HStack>
            </Box>
          </Box>

        </AppTemplate>
    );
  }
  }


export default Chat;
