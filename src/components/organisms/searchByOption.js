import React from "react";
import { Select, CheckIcon , ScrollView } from "native-base";
import province from "../../assets/province.json";
import district from "../../assets/district.json";

class SearchByOption extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      province: '',
      district: '',
      unit: ''
    }
  }

  showDistricts() {
    let districts = district.filter(data => data.province_id === this.state.province);

    return (
      districts.map((data, index) => (
        <Select.Item label={data.name_th} value={data.id} key={index} />
      ))
    )
  }

  render() {
    return (
      <ScrollView horizontal>
        <Select selectedValue={this.state.unit} size={15}
                width={165} height={33} borderRadius={20} bgColor = "rgba(192, 192, 192, 0.59)"
                placeholderTextColor = "rgba(0, 0, 0, 0.4)" placeholder="ประเภทหน่วยงาน"
                _selectedItem={{bg:"teal.500" ,endIcon: <CheckIcon size="5" />}} mt={2} ml={1} onValueChange={itemValue => this.setState({ unit: itemValue })}>
          <Select.Item label="หน่วยพยาบาล" value="medical" />
          <Select.Item label="หน่วยตำรวจ" value="police" />
          <Select.Item label="หน่วยดับเพลิง" value="fire_department" />
        </Select>

        <Select selectedValue={this.state.province} size={15}
                width={105} height={33} borderRadius={20} bgColor = "rgba(192, 192, 192, 0.59)"
                placeholderTextColor = "rgba(0, 0, 0, 0.4)" placeholder="จังหวัด"
                _selectedItem={{bg: "teal.600",endIcon: <CheckIcon size="5" />}} mt={2} ml={1} onValueChange={itemValue => this.setState({ province: itemValue, district: '' })}>
          {province.map((data, index) => (
            <Select.Item label={data.name_th} value={data.id} key={index} />
          ))}
        </Select>

        <Select selectedValue={this.state.district} size={10}
                width={105} height={33} borderRadius={20} bgColor = "rgba(192, 192, 192, 0.59)"
                placeholderTextColor = "rgba(0, 0, 0, 0.4)" placeholder="อำเภอ"
                isDisabled={this.state.province === ''}
                _selectedItem={{bg: "teal.600",endIcon: <CheckIcon size="5" />}} mt={2} ml={1} onValueChange={itemValue => this.setState({ district: itemValue })}>
          {this.showDistricts()}
        </Select>
      </ScrollView>
    );
  }
}

export default SearchByOption;
