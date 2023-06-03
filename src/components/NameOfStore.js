import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import Icon from 'react-native-vector-icons/FontAwesome';
import { fontsize } from '../contants';

export default function NameOfStore() {
  return (
    <View style={styles.header} >
    <View style={{ flexDirection: 'row', flex: 5 }}>
        <Icon name="home" color='#f97060' style={{ fontSize: fontsize.h0 }} />
        <Text style={{ fontSize: fontsize.h2, paddingHorizontal: 5 }} > COZY CORNER CAFÉ </Text>
    </View>
    <View style={{ alignItems: 'flex-end', marginRight: 10 }}>
        <Icon name="question-circle-o" style={{ fontSize: fontsize.h0 }} />
    </View>
</View >
  )
}

const styles = StyleSheet.create({
    header : {
        flex: 1,
        flexDirection : 'row',
        height : 50,
        marginTop : 10,
        marginLeft : 10,
    },
})