import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import Icon from 'react-native-vector-icons/FontAwesome';

export default function Star(props) {
  const {numberOfStar} = props;
  return <View style = {{flexDirection: 'row', justifyContent: 'center'}}>
     {[0,1,2,3,4].map(item =>  <Icon name = "star" size = {10} color = {item <=  numberOfStar - 1 ? 'orange' : 'grey'}/>)}
  </View>
  
}

const styles = StyleSheet.create({
 
})