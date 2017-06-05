import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';

class DrawerMenu extends Component {
    static propTypes = {
        onPressFunc: PropTypes.func,
        text: PropTypes.string
    };
    render () {
        return (
            <TouchableOpacity style={styles.touchableOpacityStyle} onPress={this.props.onPressFunc}>
                <View><Text style={styles.textStyle}>{this.props.text}</Text></View>
            </TouchableOpacity>
        );
    }
}
const styles = StyleSheet.create({
    touchableOpacityStyle: {
        borderTopWidth: 1,
        borderBottomWidth: 1,
        borderColor: '#8A8A8A'
    },
    textStyle: {
        paddingTop: 5,
        paddingBottom: 5,
        marginLeft: 25,
        fontSize: 22
    }
});
export default DrawerMenu;
