import React, { Component, PropTypes } from 'react';
import { View, Text, StyleSheet, Switch, TouchableOpacity, Dimensions } from 'react-native';
import { COLOR, ThemeProvider } from 'react-native-material-ui';
import { StackNavigator } from 'react-navigation';
import Container from '../../container';
import Header from '../../../../components/header.js';
import GeneralAppInfo from './generalAppInfo/';
import UserInfo from './userInfo/';
const window = Dimensions.get('window');

class SettingsScene extends Component {
    static propTypes = {
        navigation: PropTypes.object
    };
    render () {
        return (
            <ThemeProvider>
                <Container>
                    <Header leftIcon="bars" navigatorLeft={() => this.props.navigation.navigate('DrawerOpen')} title="React Settings" />
                    <View style={styles.container}>
                        <View style={styles.touchableStyle}>
                            <View style={styles.viewStyle}>
                                <Text style={[
                                    styles.textStyle, {
                                        marginTop: 10
                                    }
                                ]}>
                                  Open website in App
                              </Text>
                                <Switch />
                            </View>
                        </View>
                        <TouchableOpacity style={styles.touchableStyle} onPress={() => this.props.navigation.navigate('UserInfo')} title="User Info">
                            <View>
                                <Text style={styles.textStyle}>
                                    User Info
                                </Text>
                            </View>
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.touchableStyle} onPress={() => this.props.navigation.navigate('General')} title="General">
                            <View>
                                <Text style={styles.textStyle}>
                                    General App Info
                                </Text>
                            </View>
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.touchableStyle} onPress={() => this.props.navigation.navigate('Login')} title="User Info">
                            <View>
                                <Text style={styles.textStyle}>
                                    LogOut
                                </Text>
                            </View>
                        </TouchableOpacity>
                    </View>
                </Container>
            </ThemeProvider>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#FFF',
        height: window.height
    },
    touchableStyle: {
        height: 50,
        width: window.width,
        backgroundColor: '#EEE',
        display: 'flex',
        justifyContent: 'center',
        paddingLeft: 20,
        paddingRight: 20,
        marginTop: 10
    },
    viewStyle: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'space-between',
        width: window.width - 40
    },
    textStyle: {
        fontSize: 20,
        fontFamily: 'Cochin'
    }
});

const SettingsStack = StackNavigator({
    Home: {
        screen: SettingsScene,
        path: 'drawer'
    },
    General: {
        screen: GeneralAppInfo,
        path: 'general'
    },
    UserInfo: {
        screen: UserInfo,
        path: 'general'
    }
}, { headerMode: 'none' });

export default SettingsStack;
