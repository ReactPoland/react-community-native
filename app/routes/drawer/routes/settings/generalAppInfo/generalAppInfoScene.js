import React, { Component, PropTypes } from 'react';
import { View, StyleSheet, Dimensions } from 'react-native';
import Header from '../../../../../components/header';
import LabelSettings from '../../../../../components/labelSettings';
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
                    <LabelSettings leftElement="Version:" rightElement="0.0.1" />
                    <LabelSettings leftElement="Build:" rightElement="1" />
                    <LabelSettings leftElement="Authors:" rightElement="ReactPoland" />
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
