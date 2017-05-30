import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { View, Text, TouchableOpacity, Dimensions, StyleSheet } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
const window = Dimensions.get('window');

class Header extends Component {
    static propTypes = {
        navigatorLeft: PropTypes.func,
        title: PropTypes.string
    };
    render () {
        return (
            <View style={styles.container}>
                <View style={styles.content}>
                    <TouchableOpacity onPress={this.props.navigatorLeft}>
                        <Icon name="bars" size={30} color="#000" style={[styles.leftElement, { marginLeft: 10 }]} />
                    </TouchableOpacity>
                    <Text style={styles.textStyle}>
                        {this.props.title}
                    </Text>
                    <View style={[styles.rightElement, { marginRight: 10 }]} />
                </View>
            </View>
        );
    }
}
const styles = StyleSheet.create({
    container: {
        backgroundColor: '#EEE',
        width: window.width,
        height: 80,
        paddingTop: 20,
        justifyContent: 'center'
    },
    content: {
        width: window.width,
        flexDirection: 'row',
        justifyContent: 'space-between'
    },
    leftElement: {
        marginTop: 2,
        width: 35
    },
    rightElement: {
        marginTop: 2,
        width: 35
    },
    textStyle: {
        width: 200,
        color: 'black',
        textAlign: 'center',
        fontSize: 26
    }
});
export default Header;
