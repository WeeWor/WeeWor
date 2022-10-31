import React from "react";
import { Select, CheckIcon , ScrollView } from "native-base";

class SearchByOption extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      province: '',
      district: '',
      subdistrict: '',
      unit: ''
    }
  }

  render() {
    return (
      <ScrollView horizontal>
        <Select selectedValue={this.state.unit} size={15}
                width={165} height={33} borderRadius={20} bgColor = "rgba(192, 192, 192, 0.59)"
                placeholderTextColor = "rgba(0, 0, 0, 0.4)" placeholder="ประเภทหน่วยงาน"
                _selectedItem={{bg:"teal.500" ,endIcon: <CheckIcon size="5" />}} mt={2} ml={1} onValueChange={itemValue => this.setState({ unit: itemValue })}>
          <Select.Item label="โรงพยาบาล" value="1" />
          <Select.Item label="สภานีตำรวจ" value="2" />
          <Select.Item label="สถานีดับเพลิง" value="3" />
          <Select.Item label="กู้ภัย" value="4" />
          <Select.Item label="สายด่วนทางหลวง" value="5" />
        </Select>

        <Select selectedValue={this.state.province} size={15}
                width={105} height={33} borderRadius={20} bgColor = "rgba(192, 192, 192, 0.59)"
                placeholderTextColor = "rgba(0, 0, 0, 0.4)" placeholder="จังหวัด"
                _selectedItem={{bg: "teal.600",endIcon: <CheckIcon size="5" />}} mt={2} ml={1} onValueChange={itemValue => this.setState({ province: itemValue })}>
          <Select.Item label="จังหวัด" value="1" />
          <Select.Item label="จังหวัด" value="2" />
          <Select.Item label="จังหวัด" value="3" />
          <Select.Item label="จังหวัด" value="4" />
          <Select.Item label="จังหวัด" value="5" />
        </Select>

        <Select selectedValue={this.state.district} size={10}
                width={105} height={33} borderRadius={20} bgColor = "rgba(192, 192, 192, 0.59)"
                placeholderTextColor = "rgba(0, 0, 0, 0.4)" placeholder="อำเภอ"
                _selectedItem={{bg: "teal.600",endIcon: <CheckIcon size="5" />}} mt={2} ml={1} onValueChange={itemValue => this.setState({ district: itemValue })}>
          <Select.Item label="อำเภอ" value="1" />
          <Select.Item label="อำเภอ" value="2" />
          <Select.Item label="อำเภอ" value="3" />
          <Select.Item label="อำเภอ" value="4" />
          <Select.Item label="อำเภอ" value="5" />
        </Select>

        <Select selectedValue={this.state.subdistrict} size={10}
                width={105} height="33" borderRadius={20} bgColor = "rgba(192, 192, 192, 0.59)"
                placeholderTextColor = "rgba(0, 0, 0, 0.4)" placeholder="ตำบล"
                _selectedItem={{bg: "teal.600",endIcon: <CheckIcon size="5" />}} mt={2} ml={1} onValueChange={itemValue => this.setState({ subdistrict: itemValue })}>
          <Select.Item label="ตำบล" value="1" />
          <Select.Item label="ตำบล" value="2" />
          <Select.Item label="ตำบล" value="3" />
          <Select.Item label="ตำบล" value="4" />
          <Select.Item label="ตำบล" value="5" />
        </Select>

      </ScrollView>
    );
  }
}

export default SearchByOption;
