import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { View, Text, Dimensions, TouchableOpacity, StyleSheet } from 'react-native';

const window = Dimensions.get('window');

class LabelSettings extends Component {
    static propTypes = {
        navigator: PropTypes.func,
        leftElement: PropTypes.string
    };
    render () {
        return (
            <TouchableOpacity style={styles.touchableStyle} onPress={this.props.navigator} title="User Info">
                <View>
                    <Text style={styles.textStyle}>
                        {this.props.leftElement}
                    </Text>
                </View>
            </TouchableOpacity>
        );
    }
}

const styles = StyleSheet.create({
    touchableStyle: {
        height: 50,
        width: window.width,
        backgroundColor: '#EEE',
        flexDirection: 'row',
        alignItems: 'center',
        paddingLeft: 20,
        paddingRight: 20,
        marginTop: 10
    },
    viewStyle: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'space-between',
        width: window.width - 40
    },
    textStyle: {
        fontSize: 20,
        fontFamily: 'Cochin'
    }
});

export default LabelSettings;
