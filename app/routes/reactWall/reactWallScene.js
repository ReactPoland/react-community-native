import React, { Component } from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import Header from '../../components/header.js';
import PropTypes from 'prop-types';

class ReactWallSceen extends Component {
    static propTypes = {
        navigation: PropTypes.object
    };
    render () {
        return (
            <View style={{ flex: 1 }}>
                <Header leftIcon="bars" navigatorLeft={() => this.props.navigation.navigate('DrawerOpen')} title="React Wall" />
                <View style={styles.container}>
                    <TouchableOpacity onPress={() => this.props.navigation.navigate('WebView', { setUrl: 'https://www.google.pl' })} >
                        <Text style={styles.welcome}>
                          Welcome to ReactWall!
                        </Text>
                    </TouchableOpacity>
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
