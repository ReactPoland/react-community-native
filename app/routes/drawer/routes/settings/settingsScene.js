import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { COLOR, ThemeProvider } from 'react-native-material-ui';
import Container from '../../container';
import Header from '../../../../components/header.js';
import PropTypes from 'prop-types';

const uiTheme = {
    palette: {
        primaryColor: COLOR.grey500,
        accentColor: COLOR.grey500
    }
};

class SettingsScene extends Component {
    render () {
        return (
            <ThemeProvider uiTheme={uiTheme}>
                <Container>
                    <Header navigatorLeft={() => this.props.navigation.navigate('DrawerOpen')} title="React Settings" />
                    <View style={styles.container}>
                        <Text style={styles.welcome}>
                          Welcome to Settings
                        </Text>
                    </View>
                </Container>
            </ThemeProvider>
        );
    }
}
SettingsScene.propTypes = {
    navigation: PropTypes.object
};
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

export default SettingsScene;
