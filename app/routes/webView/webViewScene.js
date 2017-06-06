import React, { Component, PropTypes } from 'react';
import { View, StyleSheet, Dimensions, WebView, Linking } from 'react-native';
import Header from '../../components/header.js';
const window = Dimensions.get('window');

class webViewScene extends Component {
    static propTypes = {
        navigation: PropTypes.object
    };
    cutUrl = (url) => {
        let hostname;
        if (url.indexOf('://') > -1) {
            hostname = url.split('/')[2];
        } else {
            hostname = url.split('/')[0];
        }
        hostname = hostname.split(':')[0];
        hostname = hostname.split('?')[0];
        let domain = hostname;
        const splitArr = domain.split('.');
        const arrLen = splitArr.length;
        if (arrLen > 2) {
            return (domain = splitArr[arrLen - 2] + '.' + splitArr[arrLen - 1]);
        }
        return domain;
    }
    render () {
        const { params } = this.props.navigation.state;
        const url = params.setUrl;
        const domain = this.cutUrl(url);
        return (
            <View style={styles.webViewStyle}>
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
    container: {
        backgroundColor: '#FFF',
        height: window.height
    },
    webViewStyle: {
        height: window.height - 20
    }
});

export default webViewScene;
