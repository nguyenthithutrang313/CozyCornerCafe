import { Text, View, ImageBackground, TouchableOpacity, StyleSheet } from 'react-native'
import React, { useState } from 'react'
import { ButtonUI, NameOfStore } from '../components/index';
import { fontsize } from '../contants';

export default function Welcome(props) {
    //state
    const [accountTypes, setAccountTypes] = useState([
        {
            name: "Customer",
            isSelected: true,
        },
        {
            name: "Staff",
            isSelected: false,
        },
        {
            name: "Owner",
            isSelected: false,
        }
    ])

    const {navigation, route} = props;
    const {navigate, goBack} = props.navigation
    return (
        <View style={styles.container}>
            <ImageBackground
                source = {require('../assets/img/background.jpg')}
                resizeMode='cover'
                style={{ flex: 1 }}>
                    
                <NameOfStore/>

                <View style={styles.main}>
                    <View style={styles.content}>
                        <Text style={styles.text}> Welcome to </Text>
                        <Text style={styles.text}> COZY CORNER CAFÉ </Text>
                        <Text style={styles.text}> Please select account type </Text>
                    </View>
                    <View>
                        {accountTypes.map(accountType =>
                            <ButtonUI onPress={() => {
                                setAccountTypes(accountTypes.map(eachAccountType => {
                                    return {
                                        ...eachAccountType,
                                        isSelected: eachAccountType.name == accountType.name
                                    }
                                }))
                            }}
                                title={accountType.name}
                                isSelected={accountType.isSelected}
                            />
                        )}
                    </View>
                </View>

                <View style={styles.footer}>
                    <ButtonUI 
                    onPress = {() => {
                        navigate('SignIn')
                    }}
                    title='Login' />
                    <Text style={{ alignSelf: 'center', paddingVertical: 10 }}> Register a new Account ?</Text>
                    <TouchableOpacity 
                        onPress = {() => {
                            navigate('Register')
                        }}>
                        <Text style={[styles.text, { alignSelf: 'center', textDecorationLine: 'underline' }]}> Register</Text>
                    </TouchableOpacity>
                </View>

            </ImageBackground>
        </View>
    )
}
const styles = StyleSheet.create({
    container : {
        flex : 1,
    },

    header : {
        flex: 1,
        flexDirection : 'row',
        height : 50,
        marginVertical : 15,
        marginLeft : 10,
    },
    main : {
        flex : 6,
        justifyContent : 'center',
    },
    content : {
        fontWeight : '500',
        alignItems : 'center',
        justifyContent : 'center',
        marginBottom : 25,
    },
    text : {
        fontSize : fontsize.h1,
        fontWeight : '400',
        padding : 5,
    },
    footer : {
        flex: 3,
    },
})

