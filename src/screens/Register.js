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
import { isValidEmail, isValidPassword } from '../utilies/Validations';
import { NameOfStore } from '../components';
import { fontsize } from '../contants';


export default function Register(props) {
    const [keyboardIsShown, setKeyboardIsShown] = useState(false)
    const [errorEmail, setErrorEmail] = useState('')
    const [errorPassword, setErrorPassword] = useState('')
    const [errorCfPassword, setErrorCfPassword] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [cfPassword, setCfPassword] = useState('')
    const isValidationOk = () => {
        return email.length > 0 && password.length > 0
            && cfpassword.length > 0
            && isValidEmail(email) == true
            && isValidPassword(password) == true
            && isValidCfPassword(cfPassword) == true
    }
    const {navigation, route} = props;
    const {navigate, goBack} = props.navigation
    useEffect(() => {
        Keyboard.addListener('keyboardDidShow', () => {
            //alert('hek')
            setKeyboardIsShown(true)
        })
        Keyboard.addListener('keyboardDidHide', () => {
            setKeyboardIsShown(false)
        })
    })
    return (
        
        <KeyboardAvoidingView
            style={styles.container}>
            <ImageBackground
                source={require('../assets/img/background.jpg')}
                resizeMode='cover'
                style={{ flex: 1 }}
            >     
                <View style = {{height : 30}}>
                 <NameOfStore />
                </View>
                <View style={styles.header_name}>
                    <Text style={styles.header_text}> Already have an account ?  </Text>
                </View>

                <View style={styles.main}>

                    <Text style={styles.text}> Username : </Text>
                    <View style={styles.input}>
                        <View style={{ padding: 10 }} >
                            <Icon name="user" style={{ fontSize: fontsize.h1 }} />
                        </View>
                        <View style={{ flex: 1 }}>
                            <TextInput
                                onChangeText={(text) => {
                                    if (isValidEmail(text) == false) {
                                        setErrorEmail('Email not in correct format')
                                    } else {
                                        setErrorEmail(null)
                                    }
                                    setEmail(text)
                                }}
                                placeholder={'Enter your username...'}>
                            </TextInput>
                        </View>
                    </View>
                    <Text style={{ color: 'red' }}> {errorEmail} </Text>

                    <Text style={[styles.text, { paddingTop: 10}]}> Password : </Text>
                    <View style={styles.input}>
                        <View style={{ padding: 10 }}>
                            <Icon name="lock" style={{ fontSize: fontsize.h1 }} />
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
                                secureTextEntry={true}
                                placeholder={'Enter your password...'}>
                            </TextInput>
                        </View>
                    </View>
                    <Text style={{ color: 'red' }}> {errorPassword} </Text>
                    
                    <Text style={[styles.text, { paddingTop: 10}]}> Confirm Password : </Text>
                    <View style={styles.input}>
                        <View style={{ padding: 10 }}>
                            <Icon name="lock" style={{ fontSize : fontsize.h1 }} />
                        </View>
                        <View style={{ flex: 1 }}>
                            <TextInput
                                onChangeText={(text) => {
                                    if (isValidCfPassword(text) == false) {
                                        setErrorCfPassword('Confirm password is not matched')
                                    } else {
                                        setErrorCfPassword(null)
                                    }
                                    setCfPassword(text)
                                }}
                                secureTextEntry={true}
                                placeholder={'Re-enter your password...'}>
                            </TextInput>
                        </View>
                    </View>
                    <Text style={{ color: 'red' }}> {errorPassword} </Text>

                    <View style={{ alignItems: 'center' }}>
                        <TouchableOpacity
                            disabled={isValidationOk() == false}
                            onPress={() => {
                                navigate('SignIn')
                            }}
                            style={[styles.register, { backgroundColor: isValidationOk() == true ? '#39373f' : '#51607f' }]}>
                            <Text style={{ fontWeight: '500', fontSize :fontsize.h1 }}> SIGN UP  </Text>
                        </TouchableOpacity>
                    </View>

                    {keyboardIsShown == false
                        && <View style={{ alignItems: 'center', marginTop: 30 }}>
                            <Text style={{ fontWeight: 500, marginVertical : 10, }}> Or Register Using </Text>

                            <View style={{ flexDirection: 'row' }}>

                                <TouchableOpacity style={[styles.icons, { backgroundColor: "#4867aa" }]}>
                                    <Icon name='facebook' style={{ fontSize: 25 }} />
                                </TouchableOpacity>

                                <TouchableOpacity style={[styles.icons, { backgroundColor: "#1da1f2" }]}>
                                    <Icon name='twitter' style={{ fontSize: 25 }} />
                                </TouchableOpacity>

                                <TouchableOpacity style={[styles.icons, { backgroundColor: "#ff5c35" }]}>
                                    <Icon name='google' style={{ fontSize: 25 }} />
                                </TouchableOpacity>

                            </View>
                        </View>}
                </View>

            </ImageBackground>
        </KeyboardAvoidingView>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    header : {
        flexDirection : 'row',
        height : 50,
        marginVertical : 15,
        marginLeft : 10,
    },
    header_name: {
        flex: 1,
        marginVertical: 20,
        alignItems: 'center',
        justifyContent: 'center',

    },
    header_text: {
        color: 'white',
        fontSize: 28,
        fontWeight: 'bold',
    },
    main: {
        flex: 6,
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

    fgpw: {
        paddingVertical: 20,
        fontWeight: '600',
        textDecorationLine: 'underline',
        textAlign: 'right',
        fontSize: fontsize.h2,
    },

    register: {
        height: 50,
        width: 130,
        borderRadius: 20,
        justifyContent: 'center',
        borderWidth: 1,
        borderColor: 'black',
        alignItems: 'center',
        marginTop : 40,
    },

    icons: {
        width: 50,
        height: 50,
        borderRadius: 50,
        color: 'white',
        justifyContent: 'center',
        alignItems: 'center',
        margin: 8,
    },

    text: {
        fontSize : fontsize.h1
    },
})