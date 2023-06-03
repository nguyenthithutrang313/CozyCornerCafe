import {
    ImageBackground,
    Text,
    TextInput,
    TouchableOpacity,
    View,
    StyleSheet,
    KeyboardAvoidingView,
    Keyboard
} from 'react-native'
import React, { useEffect, useState } from 'react'
import Icon from 'react-native-vector-icons/FontAwesome';
import { isValidPassword, isValidCfPassword } from '../utilies/Validations';
import { NameOfStore } from '../components';
import { fontsize } from '../contants';

export default function ChangePassword(props) {
    const [errorPassword, setErrorPassword] = useState('')
    const [password, setPassword] = useState('')
    const [errorCfPassword, setErrorCfPassword] = useState('')
    const [cfpassword, setCfPassword] = useState('')
    const isValidationOk = () => {
        return cfpassword.length > 0 && password.length > 0
            && isValidPassword(password) == true
            && isValidCfPassword(password, cfpassword) == true
    }
    const {navigation, route} = props;
    const {navigate, goBack} = props.navigation
    return (
        <KeyboardAvoidingView
            style={styles.container}>
            <ImageBackground
                source={require('../assets/img/background.jpg')}
                resizeMode='cover'
                style={{ flex: 1 }}
            >
                <View style={{ height : 30}}>
                    <NameOfStore />
                </View>             
                    <View style={styles.header}>
                        <Text style={styles.header_text}> Reset Password </Text>
                    </View>

                    <View style={styles.main}>

                        <Text style={styles.text}> New password : </Text>
                        <View style={styles.input}>
                            <View style={{ padding: 10 }} >
                                <Icon name="lock" style={{ fontSize: fontsize.h2 }} />
                            </View>
                            <View style={{ flex: 1 }}>
                                <TextInput
                                    onChangeText={(text) => {
                                        if (isValidPassword(text) == false) {
                                            setErrorPassword('Password must be at least 8 characters ')
                                        } else {
                                            setErrorPassword(null)
                                        }
                                        setPassword(text)
                                    }}
                                    placeholder={'Enter your new password...'}>
                                </TextInput>
                            </View>
                        </View>
                        <Text style={{ color: '#fc4705' }}> {errorPassword} </Text>

                        <Text style={[styles.text, { paddingTop: 10 }]}> Re-write password : </Text>
                        <View style={styles.input}>
                            <View style={{ padding: 10 }}>
                                <Icon name="lock" style={{ fontSize: fontsize.h2 }} />
                            </View>
                            <View style={{ flex: 1 }}>
                                <TextInput
                                    onChangeText={(text) => {
                                        if (isValidCfPassword(password, text) == false) {
                                            setErrorCfPassword('Password is wrong or must not be at least 8 characters ')
                                        } else {
                                            setErrorCfPassword(null)
                                        }
                                        setCfPassword(text)
                                    }}
                                    //secureTextEntry={true}
                                    placeholder={'Re-write your password...'}>
                                </TextInput>
                            </View>
                        </View>
                        <Text style={{ color: '#fc4705' }}> {errorCfPassword} </Text>


                        <View style={{ alignItems: 'center' }}>
                            <TouchableOpacity
                                disabled={isValidationOk() == false}
                                onPress={() => {
                                    navigate('SignIn')
                                }}
                                style={[styles.confirm, { backgroundColor: isValidationOk() == true ? '#39373f' : '#51607f' }]}>
                                <Text style={{ fontSize : fontsize.h1, fontWeight: '500' }}> CONFIRM </Text>
                            </TouchableOpacity>
                        </View>
</View>
            </ImageBackground>
        </KeyboardAvoidingView>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    header: {
        flex: 1,
        marginVertical: 10,
        alignItems: 'center',
        justifyContent: 'center',

    },
    header_text: {
        color: 'white',
        fontSize: 28,
        fontWeight: 'bold',
        fontFamily: 'arial',
    },
    main: {
        flex: 6,
        marginVertical: 40,
        paddingHorizontal: 30,

    },

    input: {
        paddingVertical: 5,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        borderBottomColor: 'grey',
        borderBottomWidth: 1,
    },

    confirm: {
        height: 50,
        width: 130,
        borderRadius: 20,
        justifyContent: 'center',
        borderWidth: 1,
        borderColor: 'black',
        alignItems: 'center',
        marginTop : 40,
    },

    text: {
        fontSize: fontsize.h1,
    },
})