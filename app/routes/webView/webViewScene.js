import React, { Component, PropTypes } from 'react';
import { View, StyleSheet, Dimensions, WebView, Linking } from 'react-native';
import Header from '../../components/header.js';
import GetDomain from '../../utils/tools';
const window = Dimensions.get('window');

class webViewScene extends Component {
    static propTypes = {
        navigation: PropTypes.object
    };
    render () {
        const { params } = this.props.navigation.state;
        const url = params.setUrl;
        const domain = GetDomain(url);
        return (
            <View style={styles.webViewContainer}>
                <Header leftIcon="arrow-left" navigatorLeft={() => this.props.navigation.goBack()} title={domain}
                  renderRight rightIcon="external-link" navigatorRight={() => Linking.openURL(url)} />
                <WebView
                  style={styles.webViewStyle}
                  source={{ url }}
                />
            </View>
        );
    }
}

const styles = StyleSheet.create({
    webViewContainer: {
        height: window.height - 20
    }
});

export default webViewScene;
