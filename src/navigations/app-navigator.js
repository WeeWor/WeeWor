import React from 'react';
import { NativeBaseProvider } from "native-base/src/core/NativeBaseProvider";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import Home from "../scenes/home";

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
          }}>
            <Stack.Screen name="Home" component={Home} />
          </Stack.Navigator>
        </NavigationContainer>
      </NativeBaseProvider>
    );
  }
}
export default AppNavigator;
