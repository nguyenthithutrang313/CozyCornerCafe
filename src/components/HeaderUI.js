import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

export default function HeaderUI(props) {
    const {title} = props;
  return (
    <View style = {styles.header}>
      <Text style = {styles.text}>{title}</Text>
    </View>
  )
}

const styles = StyleSheet.create({
    header : {
        height : 60,
        backgroundColor : 'grey',
        justifyContent : 'center',
    },
    text : {
        alignSelf : 'center',
        fontSize : 22,
        fontWeight : '500',
    }
})