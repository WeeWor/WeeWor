import React from "react";
import { Button, Center, ChevronLeftIcon, FormControl, HStack, Image, Input, Modal, Text, VStack } from "native-base";
import AppTemplate from "../components/templates/app";

class ProfileAccount extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      modal: false,
      form: {
        password: ''
      }
    };
  }

  onSubmit() {
    console.log(this.state.form);
  }

  render() {
      const { navigation } = this.props;
    return (
      <AppTemplate redMode={true} {...this.props} >
          <HStack space="22.70%">
              <ChevronLeftIcon size="5" mt="3" ml="3" color="black" onPress={() => navigation.replace('Profile')}/>
              <Center paddingTop={"10px"} paddingBottom={"30px"}>
                  <Image size={150} borderRadius={100} source={{
                      uri: "https://i.picsum.photos/id/162/200/300.jpg?hmac=j8KV0LSPmue8af4dmytyFqhoPlvcsudNYFaB_i5DINs"
                  }} alt="Alternate Text" />
                  <Text fontSize="2xl" paddingTop={"10px"} bold>USERNAME</Text>
              </Center>
          </HStack>
          <Text fontSize="2xl" paddingLeft={"20px"} paddingTop={"10px"} bold>ID : 57439853823 </Text>
          <VStack space={"248px"}>
              <Text fontSize="2xl" paddingLeft={"20px"} paddingTop={"10px"} bold>Password : ****** </Text>
              <Text fontSize="lg" paddingRight={"20px"} bold textAlign="right" color={"red.500"} onPress={() => this.setState({modal: true})}>แก้ไข</Text>
          </VStack>

        <Modal isOpen={this.state.modal} onClose={() => this.setState({modal: false})}>
          <Modal.Content maxWidth="400px">
            <Modal.CloseButton />
            <Modal.Header><Text>แก้ไขบัญชี</Text></Modal.Header>
            <Modal.Body>
              <FormControl>
                <FormControl.Label><Text>input jaa</Text></FormControl.Label>
                <Input value={this.state.form.password} onChangeText={(text => this.setState({form: {...this.state.form, password: text}}))} bgColor="#f8f8f8"/>
              </FormControl>
            </Modal.Body>
            <Modal.Footer>
              <Button.Group>
                <Button onPress={() => this.onSubmit()}>
                  <Text color="#ffffff">บันทึก</Text>
                </Button>
              </Button.Group>
            </Modal.Footer>
          </Modal.Content>
        </Modal>
      </AppTemplate>
    );
  }
}

export default ProfileAccount;
