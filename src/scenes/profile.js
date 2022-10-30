import React from "react";
import {Center, Image, Text, VStack} from "native-base";
import AppTemplate from "../components/templates/app";

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
          <Text fontSize="2xl" paddingLeft={"20px"} paddingTop={"10px"} bold onPress={() => navigation.replace('ProfileAccount')}>บัญชี</Text>
          <Text fontSize="2xl" paddingLeft={"20px"} paddingTop={"10px"} bold onPress={() => navigation.replace('ProfileDetail')}>ประวัติส่วนตัว</Text>
          <Center>
              <Text fontSize="2xl" bold color={"red.500"} paddingTop={"10px"}>ออกจากระบบ</Text>
          </Center>
      </AppTemplate>
    );
  }
}

export default Profile;
