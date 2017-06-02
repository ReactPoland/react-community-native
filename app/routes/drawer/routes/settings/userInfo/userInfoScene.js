import React, { Component, PropTypes } from 'react';
import { View, StyleSheet, Dimensions } from 'react-native';
import Header from '../../../../../components/header';
import LableSettings from '../../../../../components/lableSettings';
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
                <Header leftIcon="arrow-left" navigatorLeft={() => this.props.navigation.navigate('Home')} title="User Info" />
                <View style={styles.container}>
                    <LableSettings leftElement="Nick:" rightElement={this.props.userNick} />
                    <LableSettings leftElement="Name:" rightElement={this.props.userName} />
                    <LableSettings leftElement="Surname:" rightElement={this.props.userSurname} />
                    <LableSettings leftElement="Email:" rightElement={this.props.userEmail} />
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
