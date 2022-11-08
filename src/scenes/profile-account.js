import React from "react";
import { connect } from 'react-redux';
import {
  Box,
  Button,
  Center,
  ChevronLeftIcon,
  Divider,
  FormControl,
  HStack, Icon,
  Input,
  Modal,
  Text,
  VStack,
} from "native-base";
import AppTemplate from "../components/templates/app";
import EncryptedStorage from "react-native-encrypted-storage";
import axios from "axios";
import {API_URL} from "../../config";
import Icons from "../utils/icons";
import { setAuth, setUsername } from "../redux/reducers/authSlice";

const mapStateToProps = state => ({
  auth: state.auth.auth,
  username: state.auth.username
});

const mapDispatchToProps = () => ({
  setAuth, setUsername
});

class ProfileAccount extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      modal: false,
      form: {
        username: '',
        email: '',
        old_password: '',
        new_password: '',
        confirm_password: ''
      },
      display: {
        username: '',
        email: ''
      }
    };
  }

  componentDidMount() {
    this.getData()
  }

  async getData() {
    const token = await EncryptedStorage.getItem("token");

    if (token) {
      const data = (await axios.get(API_URL + "/user", {headers: {
        "Authorization": "JWT " + token
        }})).data;

      if (data.username) {
        this.setState({
          display: {
            username: data.username,
            email: data.email
          },
          form: {
            ...this.state.form,
            username: data.username,
            email: data.email
          }
        });
      }
    }
  }

  async logout() {
    await EncryptedStorage.removeItem("token");
    this.props.setAuth(false);
    this.props.setUsername('');

    return this.props.navigation.replace('Profile')
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
                <Box w={150} h={150} borderRadius={100} style={{ backgroundColor: "#27aae2" }} justifyContent={'center'}>
                  <Icon as={Icons['FontAwesome']} name={'user'} color='#ffffff' size={'6xl'} m={'35%'}/>
                </Box>
                  <Text fontSize="2xl" paddingTop={"10px"} bold>{this.props.username}</Text>
              </Center>
          </HStack>
          <Text fontSize="2xl" paddingLeft={"20px"} paddingTop={"10px"} bold>Username : {this.state.display.username}</Text>
          <VStack space={"248px"}>
              <Text fontSize="2xl" paddingLeft={"20px"} paddingTop={"10px"} bold>E-Mail : {this.state.display.email}</Text>
              <HStack alignSelf="flex-end">
                <Text fontSize="lg" paddingRight={"20px"} bold color={"red.500"} onPress={() => this.setState({modal: true})}>แก้ไข</Text>
                <Text fontSize="lg" paddingRight={"20px"} bold color={"red.500"} onPress={() => this.logout()}>ออกจากระบบ</Text>
              </HStack>
          </VStack>

        <Modal isOpen={this.state.modal} onClose={() => this.setState({modal: false})}>
          <Modal.Content maxWidth="400px">
            <Modal.CloseButton />
            <Modal.Header><Text>แก้ไขบัญชี</Text></Modal.Header>
            <Modal.Body>
              <FormControl>
                <FormControl.Label><Text>ชื่อผู้ใช้งาน</Text></FormControl.Label>
                <Input value={this.state.form.username} isDisabled={true} bgColor="#f8f8f8"/>
              </FormControl>
              <FormControl>
                <FormControl.Label><Text>อีเมลล์</Text></FormControl.Label>
                <Input value={this.state.form.email} onChangeText={(text => this.setState({form: {...this.state.form, email: text}}))} bgColor="#f8f8f8"/>
              </FormControl>
              <Divider mt={4}/>
              <FormControl>
                <FormControl.Label><Text>รหัสผ่านเก่า</Text></FormControl.Label>
                <Input value={this.state.form.old_password} onChangeText={(text => this.setState({form: {...this.state.form, old_password: text}}))} bgColor="#f8f8f8"/>
              </FormControl>
              <FormControl>
                <FormControl.Label><Text>รหัสผ่านใหม่</Text></FormControl.Label>
                <Input value={this.state.form.new_password} onChangeText={(text => this.setState({form: {...this.state.form, new_password: text}}))} bgColor="#f8f8f8"/>
              </FormControl>
              <FormControl>
                <FormControl.Label><Text>ยืนยันรหัสผ่านใหม่</Text></FormControl.Label>
                <Input value={this.state.form.confirm_password} onChangeText={(text => this.setState({form: {...this.state.form, confirm_password: text}}))} bgColor="#f8f8f8"/>
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

export default connect(mapStateToProps, mapDispatchToProps())(ProfileAccount);
