import React, { Component } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Dimensions, WebView, Linking } from 'react-native';
const window = Dimensions.get('window');

class webViewScene extends Component {
    render () {
        return (
            <View style={styles.webViewStyle}>
                <WebView
                  source={{uri: params.webViewLink}}
                />
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#FFF',
        height: window.height,
    },
    webViewStyle: {
        height: window.height - 80
    }
});
export default webViewScene;
