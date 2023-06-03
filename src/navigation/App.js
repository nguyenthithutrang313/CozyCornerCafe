
import React from 'react'
import {
  SignIn,
  Welcome,
  Register,
  Setting,
  ChangePassword,
} from '../screens/index';
import MyTab from './MyTab';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

const Stack = createNativeStackNavigator()
export default function App(props) {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName='MainScreen' screenOptions={{ headerShown: false }}>
        <Stack.Screen name={"Welcome"} component={Welcome} />
        <Stack.Screen name={"SignIn"} component={SignIn} />
        <Stack.Screen name={"Register"} component={Register} />
        <Stack.Screen name={"Setting"} component={Setting} />
        <Stack.Screen name={"ChangePassword"} component={ChangePassword} />
        <Stack.Screen name={"MyTab"} component={MyTab} />
      </Stack.Navigator>
    </NavigationContainer>
  )
}