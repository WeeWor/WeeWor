import React from "react";
import { connect } from 'react-redux';
import {
  Box,
  Button,
  Center,
  ChevronRightIcon,
  Flex,
  FormControl,
  HStack,
  Icon,
  Input,
  Modal,
  Text,
} from "native-base";
import AppTemplate from "../components/templates/app";
import { TouchableOpacity } from "react-native";
import { setAuth, setUsername } from "../redux/reducers/authSlice";
import Icons from "../utils/icons";
import {API_URL} from "../../config";
import axios from "axios";
import EncryptedStorage from "react-native-encrypted-storage";

const mapStateToProps = state => ({
  auth: state.auth.auth,
  username: state.auth.username
});

const mapDispatchToProps = () => ({
  setAuth, setUsername
});

class Profile extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      loginModal: false,
      registerModal: false,
      loginForm: {
        username: '',
        password: ''
      },
      registerForm: {
        username: '',
        email: '',
        password: '',
        confirm_password: ''
      }
    }
  }

  async onLoginSubmit() {
    const data = (await axios.post(API_URL + "/login", {
      username: this.state.loginForm.username,
      password: this.state.loginForm.password
    }, {
      headers: { "weewor": "user" }
    })).data;

    if (data.token) {
      await EncryptedStorage.setItem("token", data.token);

      const user = (await axios.get(API_URL + "/user", {headers: {
          "Authorization": "JWT " + data.token
        }})).data;

      await this.props.setAuth(true);
      await this.props.setUsername(user.username);

      return this.props.navigation.replace('ProfileAccount');
    }
  }

  async onRegisterSubmit() {
    if (this.state.registerForm.password !== this.state.registerForm.confirm_password) {
      return;
    }
    const data = (await axios.post(API_URL + "/register", {
      username: this.state.registerForm.username,
      password: this.state.registerForm.password,
      email: this.state.registerForm.email
    }, {
      headers: { "weewor": "user" }
    })).data;

    if (data.token) {
      await EncryptedStorage.setItem("token", data.token);

      const user = (await axios.get(API_URL + "/user", {headers: {
          "Authorization": "JWT " + data.token
        }})).data;

      await this.props.setAuth(true);
      await this.props.setUsername(user.username);

      return this.props.navigation.replace('ProfileAccount');
    }
  }

  render() {
      const { navigation } = this.props;

    return (
      <AppTemplate redMode={true} {...this.props}>
          <Center paddingTop={"10px"} paddingBottom={"30px"}>
            <Box w={150} h={150} borderRadius={100} style={{ backgroundColor: "#27aae2" }} justifyContent={'center'}>
              <Icon as={Icons['FontAwesome']} name={'user'} color='#ffffff' size={'6xl'} m={'35%'}/>
            </Box>
              <Text fontSize="2xl" paddingTop={"10px"} bold>{this.props.auth ? this.props.username : 'ผู้ใช้งาน'}</Text>
          </Center>
          <TouchableOpacity onPress={() => this.props.auth ? navigation.replace('ProfileAccount') : this.setState({loginModal: true})}>
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

        <Modal isOpen={this.state.loginModal} onClose={() => this.setState({loginModal: false})}>
          <Modal.Content maxWidth="400px">
            <Modal.CloseButton />
            <Modal.Header><Text>เข้าสู่ระบบ</Text></Modal.Header>
            <Modal.Body>
              <FormControl>
                <FormControl.Label><Text>ผู้ใช้งาน</Text></FormControl.Label>
                <Input value={this.state.loginForm.username} onChangeText={(text => this.setState({loginForm: {...this.state.loginForm, username: text}}))} bgColor="#f8f8f8"/>
              </FormControl>
              <FormControl>
                <FormControl.Label><Text>รหัสผ่าน</Text></FormControl.Label>
                <Input secureTextEntry={true} value={this.state.loginForm.password} onChangeText={(text => this.setState({loginForm: {...this.state.loginForm, password: text}}))} bgColor="#f8f8f8"/>
              </FormControl>
            </Modal.Body>
            <Modal.Footer>
              <Button.Group>
                <Button onPress={() => this.onLoginSubmit()}>
                  <Text color="#ffffff">เข้าสู่ระบบ</Text>
                </Button>
                <Button colorScheme="success" onPress={() => this.setState({registerModal: true})}>
                  <Text color="#ffffff">สมัคร</Text>
                </Button>
              </Button.Group>
            </Modal.Footer>
          </Modal.Content>
        </Modal>

        <Modal isOpen={this.state.registerModal} onClose={() => this.setState({registerModal: false})}>
          <Modal.Content maxWidth="400px">
            <Modal.CloseButton />
            <Modal.Header><Text>เข้าสู่ระบบ</Text></Modal.Header>
            <Modal.Body>
              <FormControl>
                <FormControl.Label><Text>ผู้ใช้งาน</Text></FormControl.Label>
                <Input value={this.state.registerForm.username} onChangeText={(text => this.setState({registerForm: {...this.state.registerForm, username: text}}))} bgColor="#f8f8f8"/>
              </FormControl>
              <FormControl>
                <FormControl.Label><Text>อีเมลล์</Text></FormControl.Label>
                <Input value={this.state.registerForm.email} onChangeText={(text => this.setState({registerForm: {...this.state.registerForm, email: text}}))} bgColor="#f8f8f8"/>
              </FormControl>
              <FormControl>
                <FormControl.Label><Text>รหัสผ่าน</Text></FormControl.Label>
                <Input secureTextEntry={true} value={this.state.registerForm.password} onChangeText={(text => this.setState({registerForm: {...this.state.registerForm, password: text}}))} bgColor="#f8f8f8"/>
              </FormControl>
              <FormControl>
                <FormControl.Label><Text>ยืนยันรหัสผ่าน</Text></FormControl.Label>
                <Input secureTextEntry={true} value={this.state.registerForm.confirm_password} onChangeText={(text => this.setState({registerForm: {...this.state.registerForm, confirm_password: text}}))} bgColor="#f8f8f8"/>
              </FormControl>
            </Modal.Body>
            <Modal.Footer>
              <Button.Group>
                <Button colorScheme="success" onPress={() => this.onRegisterSubmit()}>
                  <Text color="#ffffff">สมัคร</Text>
                </Button>
              </Button.Group>
            </Modal.Footer>
          </Modal.Content>
        </Modal>
      </AppTemplate>
    );
  }
}

export default connect(mapStateToProps, mapDispatchToProps())(Profile);
