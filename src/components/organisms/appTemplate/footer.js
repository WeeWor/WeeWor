import React from 'react';
import {Box, Icon, Text, View} from "native-base";
import Icons from "../../../utils/icons";
import {StyleSheet} from "react-native";

class Footer extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <>
        <View backgroundColor='#ef5054' width={'100%'} height={'100%'} borderTopRadius={15} flexDirection={'row'} paddingX={10} paddingTop={2} justifyContent={'space-between'} >
          <Box style={styles.point}>
            <Icon as={Icons.Feather} name="home" size="2xl" color="black" marginTop={0.5}/>
          </Box>
          <Box style={styles.point}>
            <Icon as={Icons.Feather} name="search" size="2xl" color="black" marginTop={0.5}/>
          </Box>
          <Box style={styles.point}>
            <Icon as={Icons.Feather} name="book" size="2xl" color="black" marginTop={1}/>
          </Box>
          <Box style={styles.point}>
            <Icon as={Icons.Feather} name="user" size="2xl" color="black" marginTop={0.5}/>
          </Box>
        </View>
      </>
    );
  }

}
const styles = StyleSheet.create({
  point:{
    backgroundColor : '#ffc6c6',
    width:42,
    height:42,
    borderRadius:25,
    alignItems:'center'
  },


});

export default Footer;
