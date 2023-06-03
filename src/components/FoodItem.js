import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import Star from './Star';
import Icon from 'react-native-vector-icons/FontAwesome';

export default function FoodItem(props) {
    let {name, url, price, star, reviews, isSaved} = props.item;
    const {item, index, onPress} = props;
    return (
        <TouchableOpacity >
           <View style={styles.items}> 
           <Image source = {{uri: url}} style={styles.image} />
            <Text style = {styles.price}>{price} </Text>
           </View>
          
             <Text style = {styles.name}>{name}</Text>

            <View style={{ flexDirection: 'row', paddingTop: 10 }}>
                <TouchableOpacity 
                onPress={onPress}
                style = {{flexDirection: 'row'}}>
                    <Icon name="heart" style={[styles.heart, {color: item.isSaved == false ? 'grey' : 'red'}]} />
                    <Text style={{ color: 'red', width: 50 }}>Saved for later</Text>
                </TouchableOpacity>
                <View style={{ flex: 1 }}>
                    <Star numberOfStar={star} />
                    <Text style={styles.review}> {reviews} reviews </Text>
                </View>
            </View>

        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    items: {
        height : 100,
        width : 100,
        flexDirection : 'row',
    },

    image: {
        width: 90,
        height: 90,
        borderRadius: 6,
        margin : 10,
    },
    
    price : {
        fontSize : 18,
        fontWeight : '500',
        color : 'black',
        alignItems : 'center',
        marginTop : 5,
        marginHorizontal : 15,
    },
    name : {
        fontSize : 16,
        color : '#2e3fdb',
        fontWeight : 'bold',
        margin: 10,
    },
    heart : {
        fontSize: 20, 
        marginHorizontal : 10,
    },
    review : {
        color : 'grey',
         fontSize : 10,
          marginTop : 5,
          marginRight: 10,
     textAlign : 'right'
    }

    
})