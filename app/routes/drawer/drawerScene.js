import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { DrawerNavigator } from 'react-navigation'

class DrawerScene extends Component {
    render () {
        return (
            <View style={styles.container}>
                <Text style={styles.welcome}>
                  Welcome to DrawerScene!
                </Text>
            </View>
        );
    }
}

const drawerNavigator = DrawerNavigator({
  Home: { screen: DrawerScene }
})

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#F5FCFF'
    },
    welcome: {
        fontSize: 20,
        textAlign: 'center',
        margin: 10
    }
});

export default drawerNavigator;
