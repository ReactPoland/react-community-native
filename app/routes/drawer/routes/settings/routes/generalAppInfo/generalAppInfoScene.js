import React, { Component, PropTypes } from 'react';
import { View, StyleSheet, Dimensions } from 'react-native';
import Header from '../../../../../../components/header';
import SettingsElement from '../../components/settingsElement';
const window = Dimensions.get('window');

class generalAppInfoScene extends Component {
    static propTypes = {
        navigation: PropTypes.object
    };
    static defaultProps = {
        name: 'Mary'
    };
    render () {
        return (
            <View style={{ flex: 1 }}>
                <Header leftIcon="arrow-left" navigatorLeft={() => this.props.navigation.goBack()} title="General Info" />
                <View style={styles.container}>
                    <SettingsElement leftElement="Version:" rightElement="0.0.1" />
                    <SettingsElement leftElement="Build:" rightElement="1" />
                    <SettingsElement leftElement="Authors:" rightElement="ReactPoland" />
                </View>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#FFF',
        height: window.height
    }
});

export default generalAppInfoScene;
