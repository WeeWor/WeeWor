import React from 'react';
import { NativeBaseProvider } from "native-base/src/core/NativeBaseProvider";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import Home from "../scenes/home";
import Search from "../scenes/search";
import Other from "../scenes/other";
import OtherDetail from "../scenes/other-detail";
import Profile from "../scenes/profile";
import ProfileAccount from "../scenes/profile-account";
import ProfileDetail from "../scenes/profile-detail";
import Chat from "../scenes/chat";

class AppNavigator extends React.Component {
  constructor(props) {
    super(props);
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
          </Stack.Navigator>
        </NavigationContainer>
      </NativeBaseProvider>
    );
  }
}
export default AppNavigator;
