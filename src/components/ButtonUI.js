import { Text, TouchableOpacity, StyleSheet } from 'react-native'
import React from 'react'
import Icon from 'react-native-vector-icons/FontAwesome';
import { fontsize } from '../contants';

export default function ButtonUI(props) {
  const {onPress, title, isSelected} = props;

  return (
    <TouchableOpacity
      onPress={onPress}
      style={[styles.account,
      { backgroundColor: isSelected == true ? 'white' : null }
      ]}>

      {isSelected == true && <Icon
                               name="check-square-o"
                               style={styles.icon}
                               />}

      <Text style={{ fontSize: fontsize.h1, color : isSelected == true ? 'red' : null}}>
        {title}
      </Text>
    </TouchableOpacity>
  )
}

const styles = StyleSheet.create({
  account : {
    height : 45,
    borderRadius : 16,
    borderWidth : 1,
    borderColor : 'grey',
    marginVertical : 10,
    marginHorizontal : 30,
    alignItems : 'center',
    justifyContent : 'center',
},
icon : {
  flex : 1,
  fontSize : fontsize.h0,
  color : 'green',
  position : 'absolute',
  left : 15,
},
})
