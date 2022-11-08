import React from 'react';
import { connect } from 'react-redux';
import { NativeBaseProvider } from "native-base/src/core/NativeBaseProvider";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import loadStates from "../utils/loadStates";
import {setLatitude, setLongitude, setAddress} from "../redux/reducers/locationSlice";
import {setAuth, setUsername} from "../redux/reducers/authSlice";

import Home from "../scenes/home";
import Search from "../scenes/search";
import Other from "../scenes/other";
import OtherDetail from "../scenes/other-detail";
import Profile from "../scenes/profile";
import ProfileAccount from "../scenes/profile-account";
import ProfileDetail from "../scenes/profile-detail";
import Chat from "../scenes/chat";
import UnitDetail from "../scenes/unit-detail";
import Guide from "../scenes/guide";
import Map from "../scenes/map";
import ChatMessage from "../scenes/chat-message";

const mapDispatchToProps = () => ({
  setLatitude,
  setLongitude,
  setAddress,
  setAuth,
  setUsername
});

class AppNavigator extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    loadStates(this.props);
  }

  render() {
    const Stack = createNativeStackNavigator();

    return (
      <NativeBaseProvider>
        <NavigationContainer>
          <Stack.Navigator initialRouteName="Home" screenOptions={{
            headerShown: false,
            animation: "none"
          }}>
            <Stack.Screen name="Home" component={Home} />
            <Stack.Screen name="Search" component={Search} />
            <Stack.Screen name="Other" component={Other} />
            <Stack.Screen name="OtherDetail" component={OtherDetail} />
            <Stack.Screen name="Profile" component={Profile} />
            <Stack.Screen name="ProfileAccount" component={ProfileAccount} />
            <Stack.Screen name="ProfileDetail" component={ProfileDetail} />
            <Stack.Screen name="Chat" component={Chat} />
            <Stack.Screen name="ChatMessage" component={ChatMessage} />
            <Stack.Screen name="UnitDetail" component={UnitDetail} />
            <Stack.Screen name="Guide" component={Guide} />
            <Stack.Screen name="Map" component={Map} />
          </Stack.Navigator>
        </NavigationContainer>
      </NativeBaseProvider>
    );
  }
}
export default connect(null, mapDispatchToProps())(AppNavigator);
