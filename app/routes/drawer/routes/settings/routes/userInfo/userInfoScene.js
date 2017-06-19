import React, { Component, PropTypes } from 'react';
import { View, StyleSheet, Dimensions } from 'react-native';
import Header from 'app/components/header';
import SettingsElement from '../../components/settingsElement';
const window = Dimensions.get('window');

class reactWallSceen extends Component {
    static propTypes = {
        navigation: PropTypes.object,
        userName: PropTypes.string,
        userNick: PropTypes.string,
        userSurname: PropTypes.string,
        userEmail: PropTypes.string
    };
    static defaultProps = {
        userNick: 'User Nick',
        userName: 'User Name',
        userSurname: 'Surname',
        userEmail: 'User Email'
    };
    render () {
        return (
            <View style={{ flex: 1 }}>
                <Header leftIcon="arrow-left" navigatorLeft={() => this.props.navigation.goBack()} title="User Info" />
                <View style={styles.container}>
                    <SettingsElement leftElement="Nick:" rightElement={this.props.userNick} />
                    <SettingsElement leftElement="Name:" rightElement={this.props.userName} />
                    <SettingsElement leftElement="Surname:" rightElement={this.props.userSurname} />
                    <SettingsElement leftElement="Email:" rightElement={this.props.userEmail} />
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

export default reactWallSceen;
