import React, { Component, PropTypes } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import Header from '../../../../components/header.js';

class TutorialsScene extends Component {
    static propTypes = {
        navigation: PropTypes.object
    };
    render () {
        return (
            <View style={{ flex: 1 }}>
                <Header leftIcon="bars" navigatorLeft={() => this.props.navigation.navigate('DrawerOpen')} title="Tutorials" />
                <View style={styles.container}>
                    <Text style={styles.welcome}>
                      Welcome to Tutorials!!
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
        backgroundColor: '#F5FCFF'
    },
    welcome: {
        fontSize: 20,
        textAlign: 'center',
        margin: 10
    }
});

export default TutorialsScene;
