import React from "react";
import { connect } from 'react-redux';
import AppTemplate from "../components/templates/app";
import { TextInput , StyleSheet } from "react-native";
import SearchByOption from "../components/organisms/searchByOption";
import ResultFromSearch from "../components/organisms/resultFromSearch";
import { setKeyword } from "../redux/reducers/searchSlice";

const mapDispatchToProps = () => ({
  setKeyword
});

class Search extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      keyword: '',
    };
  }

  render() {

    return (
      <AppTemplate redMode={true} {...this.props}>
        <TextInput style = {styles.textInputStyle}
        underlineColorAndroid = "transparent"
        placeholder = "Search"
        placeholderTextColor = "rgba(0, 0, 0, 0.4)"
        autoCapitalize = "none"
        onChangeText = {(text) => this.setState({ keyword : text })}
        onSubmitEditing={() => this.props.setKeyword(this.state.keyword)}
        value = {this.state.keyword}
        />
        <SearchByOption/>
        <ResultFromSearch navigation={this.props.navigation}/>
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


export default connect(null, mapDispatchToProps())(Search);
