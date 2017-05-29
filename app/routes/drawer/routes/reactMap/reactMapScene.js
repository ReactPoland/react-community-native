import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';

class ReactMapScene extends Component {

    render () {
        const { errorToken } = this.props;
        return (
            <View style={styles.container}>
                <Text style={styles.welcome}>
                  Welcome to ReactMap!
                </Text>
                <Text> {errorToken} </Text>
            </View>
        );
    }
}

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


export default ReactMapScene;
