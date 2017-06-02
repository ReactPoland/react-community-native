import React, { Component } from 'react';
import { View, Text, StyleSheet, Dimensions } from 'react-native';
import { COLOR, ThemeProvider } from 'react-native-material-ui';
import Header from '../../components/header.js';
import PropTypes from 'prop-types';
const window = Dimensions.get("window")
const uiTheme = {
    palette: {
        primaryColor: COLOR.grey500,
        accentColor: COLOR.grey500
    }
};

class ReactWallSceen extends Component {
    static propTypes = {
        navigation: PropTypes.object
    };
    render () {
        return (
            <View style={{ flex: 1 }}>
                <Header leftIcon="bars" navigatorLeft={() => this.props.navigation.navigate('DrawerOpen')} title="React Wall" />
                <View style={styles.container}>
                    <Text style={styles.welcome}>
                      Welcome to ReactWall!
                    </Text>
                </View>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#FFF'
    },
    welcome: {
        fontSize: 20,
        textAlign: 'center',
        margin: 10
    }
});

export default ReactWallSceen;
