import React from "react";
import {
  Button,
  Center,
  ChevronLeftIcon,
  Container,
  FormControl,
  HStack,
  Image,
  Input,
  Modal,
  Text,
  VStack,
} from "native-base";
import AppTemplate from "../components/templates/app";

class OtherDetail extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      modal: false,
      form: {
        name: '',
        age: 0,
        phone: '',
        address: '',
        congenital: '',
        allergy: '',
        blood: ''
      }
    }
  }

  render() {
    const { navigation } = this.props;
    return (
      <AppTemplate redMode={true} {...this.props}>
        <HStack space="22.70%">
          <ChevronLeftIcon size="5" mt="3" ml="3" color="black" onPress={() => navigation.replace('Other')}/>
          <Center paddingTop={"10px"} paddingBottom={"30px"}>
            <Image size={150} borderRadius={100} source={{
              uri: "https://i.picsum.photos/id/162/200/300.jpg?hmac=j8KV0LSPmue8af4dmytyFqhoPlvcsudNYFaB_i5DINs"
            }} alt="Alternate Text" />
            <Text fontSize="2xl" paddingTop={"10px"} bold>DAD</Text>
          </Center>
        </HStack>
        <VStack space="2">
          <HStack>
            <Text fontSize="lg" w={"50%"} paddingLeft={"20px"} bold>ชื่อ</Text>
            <Text fontSize="lg" w={"50%"} textAlign={"right"} paddingRight={"20px"} color={"gray.500"} bold>นายบุญชู วัฒนสรร</Text>
          </HStack>
          <HStack >
            <Text fontSize="lg" w={"50%"} paddingLeft={"20px"} bold>อายุ</Text>
            <Text fontSize="lg" w={"50%"} textAlign={"right"} paddingRight={"20px"} color={"gray.500"} bold>500 ปี</Text>
          </HStack>
          <HStack >
            <Text fontSize="lg" w={"50%"} paddingLeft={"20px"} bold>หมายเลขโทรศัพท์</Text>
            <Text fontSize="lg" w={"50%"} textAlign={"right"} paddingRight={"20px"} color={"gray.500"} bold>093-999-9991</Text>
          </HStack>
          <HStack >
            <Text fontSize="lg" w={"50%"} paddingLeft={"20px"} bold>ที่อยู่</Text>
            <Text fontSize="lg" w={"50%"} textAlign={"right"} paddingRight={"20px"} color={"gray.500"} bold>หมู่บ้านC ถนน...</Text>
          </HStack>
          <HStack >
            <Text fontSize="lg" w={"50%"} paddingLeft={"20px"} bold>โรคประจำตัว</Text>
            <Text fontSize="lg" w={"50%"} textAlign={"right"} paddingRight={"20px"} color={"gray.500"} bold>ไม่มี</Text>
          </HStack>
          <HStack >
            <Text fontSize="lg" w={"50%"} paddingLeft={"20px"} bold>ยาที่แพ้</Text>
            <Text fontSize="lg" w={"50%"} textAlign={"right"} paddingRight={"20px"} color={"gray.500"} bold>ไม่มี</Text>
          </HStack>
          <HStack >
            <Text fontSize="lg" w={"50%"} paddingLeft={"20px"} bold>กรุ๊ปเลือด</Text>
            <Text fontSize="lg" w={"50%"} textAlign={"right"} paddingRight={"20px"} color={"gray.500"} bold>B</Text>
          </HStack>
        </VStack>
        <Container h={"100px"}>
        </Container>
        <Text fontSize="lg" paddingRight={"20px"} bold textAlign="right" color={"red.500"} onPress={() => this.setState({modal: true})}>แก้ไข</Text>

        <Modal isOpen={this.state.modal} onClose={() => this.setState({modal: false})}>
          <Modal.Content maxWidth="400px">
            <Modal.CloseButton />
            <Modal.Header><Text>แก้ไขโปรไฟล์</Text></Modal.Header>
            <Modal.Body>
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

export default OtherDetail;
