import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import Icon from 'react-native-vector-icons/FontAwesome';
import {
    Drinks,
    Foods,
    Setting,
} from '../screens/index';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

const Tab = createBottomTabNavigator();
const screenOptions = ({route}) => ({
  headerShown : false,
  tabBarActiveTintColor : 'grey',
  tabBarActiveBackgroundColor : '#f2f0fb',
  tabBarIcon : ({focused, color, size}) => {
    let screenName = route.name;
    let iconName = screenName == 'Drinks' ? 'bars' : (screenName == 'Foods' ? 'list' : (screenName == 'Setting' ? 'gear' : ''));
    return <Icon name = {iconName} color = {focused ? 'grey' : '#f2f0fb'} size = {20} />
  }

})

export default function MyTab(props) {
  return (
    <Tab.Navigator screenOptions={screenOptions} >
        <Tab.Screen name = "Drinks" component={Drinks} options={{tabBarLabel : 'Drinks'}}/> 
        <Tab.Screen name = "Foods" component={Foods} options={{tabBarLabel : 'Food List Grid'}}/>
        <Tab.Screen name = "Setting" component={Setting} options={{tabBarLabel : 'Settings'}}/>
    </Tab.Navigator>
  )
}

const styles = StyleSheet.create({})