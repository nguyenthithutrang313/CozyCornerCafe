import {
    ScrollView,
    StyleSheet,
    Text,
    View,
    Switch,
    TouchableOpacity,
    ImageBackground
} from 'react-native'
import React, { useState } from 'react'
import { HeaderUI } from '../components'
import Icon from 'react-native-vector-icons/FontAwesome';
import { fontsize } from '../contants';

export default function Setting(props) {
    const [isEnabledLockApp, setIsEnabledLockApp] = useState(false);
    const toggleSwitchLockApp = () => setIsEnabledLockApp(previousState => !previousState);
    const [isEnabledUseFingerprint, setIsEnabledUseFingerprint] = useState(false);
    const toggleSwitchFingerprint = () => setIsEnabledUseFingerprint(previousState => !previousState);
    const [isEnabledChangePassword, setIsEnabledChangePassword] = useState(false);
    const toggleSwitchChangePassword = () => setIsEnabledChangePassword(previousState => !previousState);
    const { navigation, route } = props;
    const { navigate, goBack } = props.navigation
    return (
        <ImageBackground
            source={require('../assets/img/bgd.jpg')}
            resizeMode='cover'
            style={{ flex: 1 }}
        >
            <View style={styles.container}>
                <HeaderUI title='Setting' />
                <ScrollView>
                    <View style={styles.common}>
                        <Text style={styles.text_h}> Common </Text>
                    </View>
                    <View style={styles.items}>
                        <Icon name="globe" style={styles.icon} />
                        <Text style={styles.text}>Language</Text>
                        <View style={{ flex: 1 }} />
                        <Text style={[styles.text, { opacity: 0.4 }]}>English</Text>
                        <Icon name="angle-right" style={styles.icon} />
                    </View>
                    <View style={styles.items}>
                        <Icon name="cloud" style={styles.icon} />
                        <Text style={styles.text}>Environment</Text>
                        <View style={{ flex: 1 }} />
                        <Text style={[styles.text, { opacity: 0.4 }]}>Production</Text>
                        <Icon name="angle-right" style={styles.icon} />
                    </View>
                    <View style={styles.common}>
                        <Text style={styles.text_h}> Account </Text>
                    </View>
                    <View style={styles.items}>
                        <Icon name="phone" style={styles.icon} />
                        <Text style={styles.text}>Phone number</Text>
                        <View style={{ flex: 1 }} />
                        <Icon name="angle-right" style={styles.icon} />
                    </View>
                    <View style={styles.items}>
                        <Icon name="envelope" style={styles.icon} />
                        <Text style={styles.text}>Environment</Text>
                        <View style={{ flex: 1 }} />
                        <Icon name="angle-right" style={styles.icon} />
                    </View>
                    <TouchableOpacity
                        onPress={() => {
                            navigate('SignIn')
                        }}
                        style={styles.items}>
                        <Icon name="sign-out" style={styles.icon} />
                        <Text style={styles.text}>Sign out</Text>
                        <View style={{ flex: 1 }} />
                        <Icon name="angle-right" style={styles.icon} />
                    </TouchableOpacity>
                    <View style={styles.common}>
                        <Text style={styles.text_h}> Security </Text>
                    </View>
                    <View style={styles.items}>
                        <Icon name="mobile" style={styles.icon} />
                        <Text style={styles.text}>Lock app in background</Text>
                        <View style={{ flex: 1 }} />
                        <Switch
                            trackColor={{ false: 'grey', true: '#e25e4f' }}
                            thumbColor={isEnabledLockApp ? '#e25e4f' : 'grey'}
                            ios_backgroundColor="#3e3e3e"
                            onValueChange={toggleSwitchLockApp}
                            value={isEnabledLockApp}
                            style={{ paddingEnd: 5 }}
                        />
                    </View>
                    <View style={styles.items}>
                        <Icon name="hand-pointer-o" style={styles.icon} />
                        <Text style={styles.text}>Use fingerprint</Text>
                        <View style={{ flex: 1 }} />
                        <Switch
                            trackColor={{ false: 'grey', true: '#e25e4f' }}
                            thumbColor={isEnabledUseFingerprint ? '#e25e4f' : 'grey'}
                            ios_backgroundColor="#3e3e3e"
                            onValueChange={toggleSwitchFingerprint}
                            value={isEnabledUseFingerprint}
                            style={{ paddingEnd: 5 }}
                        />
                    </View>
                    <TouchableOpacity
                        onPress={() => {
                            navigate('ChangePassword')
                        }}
                        style={styles.items}>
                        <Icon name="lock" style={styles.icon} />
                        <Text style={styles.text}>Change password</Text>
                        <View style={{ flex: 1 }} />
                    </TouchableOpacity>
                    <View style={styles.common}>
                        <Text style={styles.text_h}> Misc </Text>
                    </View>
                    <View style={styles.items}>
                        <Icon name="file-archive-o" style={styles.icon} />
                        <Text style={styles.text}>Term of service </Text>
                        <View style={{ flex: 1 }} />
                        <Icon name="angle-right" style={styles.icon} />
                    </View>
                    <View style={styles.items}>
                        <Icon name="files-o" style={styles.icon} />
                        <Text style={styles.text}>Open sourse licenses </Text>
                        <View style={{ flex: 1 }} />
                        <Icon name="angle-right" style={styles.icon} />
                    </View>
                </ScrollView>
            </View>
        </ImageBackground>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    text_h: {
        color: 'grey',
        paddingStart: 10,
        fontSize: fontsize.h1,
        fontWeight: '500',
    },
    text: {
        color: 'black',
        fontSize: fontsize.h2,
    },
    common: {
        height: 50,
        backgroundColor: '#f2f0fb',
        justifyContent: 'center'
    },
    items: {
        flexDirection: 'row',
        paddingVertical: 10,
    },
    icon: {
        color: 'grey',
        fontSize: fontsize.h0,
        marginHorizontal: 10,
    }
})