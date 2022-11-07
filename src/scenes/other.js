import React from "react";
import { Box, Button, FormControl, HStack, Icon, Input, Modal, Text, VStack } from "native-base";

import AppTemplate from "../components/templates/app";
import Icons from "../utils/icons";
import center from "native-base/src/theme/components/center";
import OtherBox from "../components/molecules/other-box";
import { TouchableOpacity } from "react-native";
import randomId from "../utils/randomId";
import profileStorage from "../utils/profileStorage";

class Other extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      modal: false,
      form: {
        nickname: '',
        name: '',
        age: 0,
        phone: '',
        address: '',
        congenital: '',
        allergy: '',
        blood: ''
      },
      profiles: []
    };
  }

  componentDidMount() {
    this.loadProfiles();
  }

  async onSubmit() {
    const id = randomId(6);
    const json = {
      id: id,
      ...this.state.form
    };

    await profileStorage.insertJson(id, json, 'profiles');
    await this.loadProfiles();

    return this.setState({modal: false});
  }

  async loadProfiles() {
    let data = await profileStorage.getItem('profiles');
    return this.setState({profiles: data});
  }

  display() {
    let data = Object.entries(this.state.profiles);
    let res = [];
    for (let i=0;i<data.length/2;i++) {
      res.push(
        <HStack mt={4} space={5} justifyContent={'center'} key={i}>
          <OtherBox name={data[i*2][1].nickname} onPress={() => this.props.navigation.replace('OtherDetail', {id: data[i*2][1].id})}/>
          {data[(i*2)+1] ?
            <OtherBox name={data[(i*2)+1][1].nickname} onPress={() => this.props.navigation.replace('OtherDetail', {id: data[i*2][1].id})}/>
            :
            <TouchableOpacity onPress={() => this.setState({modal: true})}>
              <VStack>
                <Box w={40} h={40} style={{ backgroundColor:"#b7cad1"}} justifyContent={'center'}>
                  <Icon as={Icons['Entypo']} name={'plus'} color='#ffffff'  size={'6xl'} m={'31.5%'}/>
                </Box>
              </VStack>
            </TouchableOpacity>
          }
        </HStack>
      )
    }

    if (data.length % 2 === 0) {
      res.push(
        <HStack mt={4} ml={8} mb={4} space={3}>
          <TouchableOpacity onPress={() => this.setState({modal: true})}>
            <VStack>
              <Box w={40} h={40} style={{ backgroundColor:"#b7cad1"}} justifyContent={'center'}>
                <Icon as={Icons['Entypo']} name={'plus'} color='#ffffff'  size={'6xl'} m={'31.5%'}/>
              </Box>
            </VStack>
          </TouchableOpacity>
        </HStack>
      )
    }

    return res;
  }

  render() {
    const { navigation } = this.props;

    return (
      <AppTemplate {...this.props}>
        <Text fontSize="3xl" paddingLeft={6} paddingTop={4}>Family</Text>

        {this.display()}

        <Modal isOpen={this.state.modal} onClose={() => this.setState({modal: false})}>
          <Modal.Content maxWidth="400px">
            <Modal.CloseButton />
            <Modal.Header><Text>เพิ่มโปรไฟล์</Text></Modal.Header>
            <Modal.Body>
              <FormControl>
                <FormControl.Label><Text>ชื่อเล่น</Text></FormControl.Label>
                <Input value={this.state.form.nickname} onChangeText={(text => this.setState({form: {...this.state.form, nickname: text}}))} bgColor="#f8f8f8"/>
              </FormControl>
              <FormControl>
                <FormControl.Label><Text>ชื่อ</Text></FormControl.Label>
                <Input value={this.state.form.name} onChangeText={(text => this.setState({form: {...this.state.form, name: text}}))} bgColor="#f8f8f8"/>
              </FormControl>
              <FormControl>
                <FormControl.Label><Text>อายุ</Text></FormControl.Label>
                <Input value={this.state.form.age} keyboardType="numeric" onChangeText={(text => this.setState({form: {...this.state.form, age: text}}))} bgColor="#f8f8f8"/>
              </FormControl>
              <FormControl>
                <FormControl.Label><Text>เบอร์โทร</Text></FormControl.Label>
                <Input value={this.state.form.phone} onChangeText={(text => this.setState({form: {...this.state.form, phone: text}}))} bgColor="#f8f8f8"/>
              </FormControl>
              <FormControl>
                <FormControl.Label><Text>ที่อยู่</Text></FormControl.Label>
                <Input value={this.state.form.address} onChangeText={(text => this.setState({form: {...this.state.form, address: text}}))} bgColor="#f8f8f8"/>
              </FormControl>
              <FormControl>
                <FormControl.Label><Text>โรคประจำตัว</Text></FormControl.Label>
                <Input value={this.state.form.congenital} onChangeText={(text => this.setState({form: {...this.state.form, congenital: text}}))} bgColor="#f8f8f8"/>
              </FormControl>
              <FormControl>
                <FormControl.Label><Text>ยาที่แพ้</Text></FormControl.Label>
                <Input value={this.state.form.allergy} onChangeText={(text => this.setState({form: {...this.state.form, allergy: text}}))} bgColor="#f8f8f8"/>
              </FormControl>
              <FormControl>
                <FormControl.Label><Text>กรุ๊ปเลือด</Text></FormControl.Label>
                <Input value={this.state.form.blood} onChangeText={(text => this.setState({form: {...this.state.form, blood: text}}))} bgColor="#f8f8f8"/>
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

export default Other;
