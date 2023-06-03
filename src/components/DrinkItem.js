import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import Icon from 'react-native-vector-icons/FontAwesome';
function _getColorStatus(status) {
    return (status == 'OPENING NOW' ? 'green' : (status == 'CLOSING SOON' ? 'red' : '#efa11a'))
  }
export default function DrinkItem(props) {
    let {name,
        price,
        socialNetwork,
        url,
        status,
        website,
        drinktype
    } = props.food;
    const {onPress} = props;
    return (
        <TouchableOpacity onPress={onPress}  style={styles.item}>
            <Image source = {{uri: url}} style={styles.image} />
            <View style={styles.content} >
                <Text style={styles.name}> {name} </Text>
                <View style={styles.line} />
                <View style={{ flexDirection: 'row' }}>
                    <Text style={styles.about}> Status :</Text>
                    <Text style={{ color: _getColorStatus(status) }} > {status} </Text>
                </View>
                <Text style={styles.about}> Price : {price} đồng </Text>
                <Text style={styles.about}> Drink Type : {drinktype} </Text>
                <Text style={styles.about}> Website : {website} </Text>
                <View style={{ flexDirection: 'row' }}>
                    <TouchableOpacity style={styles.icons}>
                       {socialNetwork['facebook'] != undefined && <Icon name='facebook-square' style={styles.icon} />}
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.icons}>
                       {socialNetwork['instagram'] != undefined && <Icon name='instagram' style={styles.icon} />}
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.icons}>
                    {socialNetwork['tiktok'] != undefined && <Icon name='music' style={styles.icon} />}
                    </TouchableOpacity>
                </View>
            </View>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    item: {
        flexDirection: 'row',
        margin: 15,
        height: 140,

    },

    image: {
        width: 100,
        height: 100,
        borderRadius: 6,
        flex: 1,
        marginRight: 10,
        resizeMode: 'cover',

    },

    content: {
        flex: 2.5,
    },

    name: {
        fontSize: 20,
        fontWeight: '500',
        color: 'black',
    },
    line: {
        height: 2,
        width: '100%',
        backgroundColor: 'black',
    },
    about: {
        color: 'grey',
    },
    icon: {
        color : 'grey',
        fontSize : 20,
        margin : 5,
    },
})