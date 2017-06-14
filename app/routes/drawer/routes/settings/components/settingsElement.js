import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { View, Text, Dimensions, StyleSheet } from 'react-native';

const window = Dimensions.get('window');

class LableSettings extends Component {
    static propTypes = {
        leftElement: PropTypes.string,
        rightElement: PropTypes.string
    };
    render () {
        return (
            <View style={styles.touchableStyle}>
                <View style={styles.switchElementContainer}>
                    <Text style={styles.textStyle}>
                        {this.props.leftElement}
                    </Text>
                    <Text style={styles.textStyle}>
                        {this.props.rightElement}
                    </Text>
                </View>
            </View>
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
    switchElementContainer: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'space-between',
        width: window.width - 40
    },
    textStyle: {
        fontSize: 20
    }
});

export default LableSettings;
