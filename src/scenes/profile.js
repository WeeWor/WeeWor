import React from "react";
import { Center, ChevronRightIcon, Flex, HStack, Image, Text } from "native-base";
import AppTemplate from "../components/templates/app";
import { TouchableOpacity } from "react-native";

class Profile extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
      const { navigation } = this.props;

    return (
      <AppTemplate redMode={true} {...this.props}>
          <Center paddingTop={"10px"} paddingBottom={"30px"}>
              <Image size={150} borderRadius={100} source={{
                  uri: "https://i.picsum.photos/id/162/200/300.jpg?hmac=j8KV0LSPmue8af4dmytyFqhoPlvcsudNYFaB_i5DINs"
              }} alt="Alternate Text" />
              <Text fontSize="2xl" paddingTop={"10px"} bold>USERNAME</Text>
          </Center>
          <TouchableOpacity onPress={() => navigation.replace('ProfileAccount')}>
            <HStack paddingTop={"10px"}>
              <Text width="60%" fontSize="2xl" paddingLeft="20px" bold>บัญชี</Text>
              <Flex width="35%" flexDirection="row" justify="flex-end" paddingTop={"6px"}>
                <ChevronRightIcon size="6"/>
              </Flex>
            </HStack>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => navigation.replace('ProfileDetail')}>
            <HStack paddingTop={"10px"}>
              <Text width="60%" fontSize="2xl" paddingLeft="20px" bold>ประวัติส่วนตัว</Text>
              <Flex width="35%" flexDirection="row" justify="flex-end" paddingTop={"6px"}>
                <ChevronRightIcon size="6"/>
              </Flex>
            </HStack>
          </TouchableOpacity>
          <Center>
              <Text fontSize="2xl" bold color={"red.500"} paddingTop={"10px"}>ออกจากระบบ</Text>
          </Center>
      </AppTemplate>
    );
  }
}

export default Profile;
