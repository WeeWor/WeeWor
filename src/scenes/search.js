import React from "react";
import { Text , Select , Box , CheckIcon, FlatList, ScrollView } from "native-base";
import AppTemplate from "../components/templates/app";
import { TextInput , StyleSheet , View , TouchableOpacity } from "react-native";
import { create } from "react-test-renderer";
import SearchByOption from "./searchByOption";
import ResultFromSearch from "./resultFromSearch";

class Search extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      keyword: '',

    };
  }

  searchKeyword = (text) => {
    this.setState({ keyword : text })
  };

  render() {

    return (
      <AppTemplate redMode={true} {...this.props}>
        <TextInput style = {styles.textInputStyle}
        underlineColorAndroid = "transparent"
        placeholder = "Search"
        placeholderTextColor = "rgba(0, 0, 0, 0.4)"
        autoCapitalize = "none"
        onChangeText = {(text) => this.searchKeyword(text)}
        value = {this.state.keyword}
        />
        <SearchByOption/>
        <ResultFromSearch/>
      </AppTemplate>
    );
  }
}


const styles = StyleSheet.create({

  textInputStyle:{
    height: 50,
    top: 5,
    fontSize: 20,
    paddingLeft: 20,
    margin: 5,
    backgroundColor: 'rgba(192, 192, 192, 0.59)',
    borderRadius:20
  },
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
  textStyle: {
    fontSize: 20,
  },
  selectRow: {
    top:3,
    flexDirection: 'row',
  },

});


export default Search;
