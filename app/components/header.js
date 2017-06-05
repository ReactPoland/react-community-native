import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { View, Text, TouchableOpacity, Dimensions, StyleSheet } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
const window = Dimensions.get('window');

class Header extends Component {
    static propTypes = {
        navigatorLeft: PropTypes.func,
        navigatorRight: PropTypes.func,
        title: PropTypes.string,
        leftIcon: PropTypes.string,
        rightIcon: PropTypes.string,
        renderRight: PropTypes.bool
    };
    static defaultProps = {
        renderRight: false
    }
    render () {
        const isRight = this.props.renderRight;

        let rightButton = null;
        if (isRight) {
            rightButton = <TouchableOpacity onPress={this.props.navigatorRight}>
                <Icon name={this.props.rightIcon} size={30} color="#000" style={[styles.rightElement]} />
            </TouchableOpacity>;
        } else {
            rightButton = <View style={[styles.rightElement]} />;
        }
        return (
            <View style={styles.container}>
                <View style={styles.content}>
                    <TouchableOpacity onPress={this.props.navigatorLeft}>
                        <Icon name={this.props.leftIcon} size={30} color="#000" style={[styles.leftElement]} />
                    </TouchableOpacity>
                    <Text numberOfLines={1} style={styles.textStyle}>
                        {this.props.title}
                    </Text>
                    {rightButton}
                </View>
            </View>
        );
    }
}
const styles = StyleSheet.create({
    container: {
        backgroundColor: '#EEE',
        width: window.width,
        height: 60,
        justifyContent: 'center'
    },
    content: {
        width: window.width,
        flexDirection: 'row',
        justifyContent: 'space-between'
    },
    leftElement: {
        marginLeft: 10,
        marginTop: 2,
        width: 35
    },
    rightElement: {
        marginRight: 10,
        marginTop: 2,
        width: 35
    },
    textStyle: {
        width: window.width - 90,
        color: 'black',
        textAlign: 'center',
        fontSize: 26
    }
});
export default Header;
