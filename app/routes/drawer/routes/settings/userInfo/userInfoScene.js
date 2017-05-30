import React, { Component, PropTypes } from 'react';
import { View, Text, StyleSheet, Dimensions } from 'react-native';
import { COLOR, ThemeProvider } from 'react-native-material-ui';
import Container from '../../../container';
import Header from '../../../../../components/header';
const window = Dimensions.get('window');
const uiTheme = {
    palette: {
        primaryColor: COLOR.grey500,
        accentColor: COLOR.grey500
    },
    toolbar: {
        container: {
            height: 80,
            paddingTop: 20,
            backgroundColor: '#bababa'
        },
        leftElement: {
            color: 'black'
        },
        titleText: {
            color: 'black',
            marginLeft: 90
        }
    }
};

class reactWallSceen extends Component {
    static propTypes = {
        navigation: PropTypes.object
    };
    render () {
        return (
            <ThemeProvider uiTheme={uiTheme}>
                <Container>
                    <Header leftIcon="arrow-left" navigatorLeft={() => this.props.navigation.navigate('Home')} title="React Articles" />
                    <View style={styles.container}>
                        <View style={styles.touchableStyle}>
                            <View style={styles.viewStyle}>
                                <Text style={[
                                    styles.textStyle, {
                                        marginTop: 10
                                    }
                                ]}>
                                    Nick:
                                </Text>
                                <Text style={[
                                    styles.textStyle, {
                                        marginTop: 10
                                    }
                                ]}>
                                    User Nick
                                </Text>
                            </View>
                        </View>
                        <View style={styles.touchableStyle}>
                            <View style={styles.viewStyle}>
                                <Text style={[
                                    styles.textStyle, {
                                        marginTop: 10
                                    }
                                ]}>
                                    Name:
                                </Text>
                                <Text style={[
                                    styles.textStyle, {
                                        marginTop: 10
                                    }
                                ]}>
                                    User Name
                                </Text>
                            </View>
                        </View>
                        <View style={styles.touchableStyle}>
                            <View style={styles.viewStyle}>
                                <Text style={[
                                    styles.textStyle, {
                                        marginTop: 10
                                    }
                                ]}>
                                    Surname:
                                </Text>
                                <Text style={[
                                    styles.textStyle, {
                                        marginTop: 10
                                    }
                                ]}>
                                    User Surname
                                </Text>
                            </View>
                        </View>
                        <View style={styles.touchableStyle}>
                            <View style={styles.viewStyle}>
                                <Text style={[
                                    styles.textStyle, {
                                        marginTop: 10
                                    }
                                ]}>
                                    Email:
                                </Text>
                                <Text style={[
                                    styles.textStyle, {
                                        marginTop: 10
                                    }
                                ]}>
                                    User Email
                                </Text>
                            </View>
                        </View>
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

export default reactWallSceen;
