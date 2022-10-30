import React, { useState } from "react";
import { Text , View , Select , Item , Label , Picker , CheckIcon , Box, ScrollView, FlatList } from "native-base";
import { StyleSheet } from "react-native";
import resultFromSearch from "./resultFromSearch";

const searchByOption = () => {

  const [country, setCountry] = useState('');
  const [ample, setAmple] = useState('');
  const [tumpon, setTumpon] = useState('');
  const [agency, setAgency] = useState('');
  const heightSelect = 33 ;
  const widthSelect = 105;
  const top = 2;
  

  return (

    <View>
    <ScrollView horizontal>
      <Select selectedValue={agency} size={15}
      width={165} height={heightSelect} borderRadius={20} bgColor = "rgba(192, 192, 192, 0.59)" 
      placeholderTextColor = "rgba(0, 0, 0, 0.4)" placeholder="ประเภทหน่วยงาน" 
      _selectedItem={{bg:"teal.500" ,endIcon: <CheckIcon size="5" />}} mt={top} ml={1} onValueChange={itemValue => setAgency(itemValue)}>
        <Select.Item label="โรงพยาบาล"value="1" />
        <Select.Item label="สภานีตำรวจ"value="2" />
        <Select.Item label="สถานีดับเพลิง"value="3" />
        <Select.Item label="กู้ภัย"value="4" />
        <Select.Item label="สายด่วนทางหลวง"value="5" />
      </Select>

      <Select selectedValue={country} size={15}
      width={widthSelect} height={heightSelect} borderRadius={20} bgColor = "rgba(192, 192, 192, 0.59)" 
      placeholderTextColor = "rgba(0, 0, 0, 0.4)" placeholder="จังหวัด" 
      _selectedItem={{bg: "teal.600",endIcon: <CheckIcon size="5" />}} mt={top} ml={1} onValueChange={itemValue => setCountry(itemValue)}>
        <Select.Item label="จังหวัด" value="1" />
        <Select.Item label="จังหวัด" value="2" />
        <Select.Item label="จังหวัด" value="3" />
        <Select.Item label="จังหวัด" value="4" />
        <Select.Item label="จังหวัด" value="5" />
      </Select>

      <Select selectedValue={ample} size={10}
      width={widthSelect} height={heightSelect} borderRadius={20} bgColor = "rgba(192, 192, 192, 0.59)" 
      placeholderTextColor = "rgba(0, 0, 0, 0.4)" placeholder="อำเภอ" 
      _selectedItem={{bg: "teal.600",endIcon: <CheckIcon size="5" />}} mt={top} ml={1} onValueChange={itemValue => setAmple(itemValue)}>
        <Select.Item label="อำเภอ" value="1" />
        <Select.Item label="อำเภอ" value="2" />
        <Select.Item label="อำเภอ" value="3" />
        <Select.Item label="อำเภอ" value="4" />
        <Select.Item label="อำเภอ" value="5" />
      </Select>

      <Select selectedValue={tumpon} size={10}
      width={widthSelect} height="33" borderRadius={20} bgColor = "rgba(192, 192, 192, 0.59)" 
      placeholderTextColor = "rgba(0, 0, 0, 0.4)" placeholder="ตำบล"
      _selectedItem={{bg: "teal.600",endIcon: <CheckIcon size="5" />}} mt={top} ml={1} onValueChange={itemValue => setTumpon(itemValue)}>
        <Select.Item label="ตำบล" value="1" />
        <Select.Item label="ตำบล" value="2" />
        <Select.Item label="ตำบล" value="3" />
        <Select.Item label="ตำบล" value="4" />
        <Select.Item label="ตำบล" value="5" />
      </Select>

    </ScrollView>
    </View>
  )

}


const styles = StyleSheet.create({

  selectBoxStyle: {
    top: 2,
    width: 100,
    height: 30,
    margin: 5,
    backgroundColor: 'rgba(192, 192, 192, 0.59)',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius:20,
  },
  selectRow: {
    top:3,
    flexDirection: 'row',
  },

});



export default searchByOption;