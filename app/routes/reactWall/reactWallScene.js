import React, { Component } from 'react';
import { View, StyleSheet } from 'react-native';
import Header from '../../components/header';
import UrlHandler from '../../components/urlHandler';
import PropTypes from 'prop-types';

class ReactWallSceen extends Component {
    static propTypes = {
        navigation: PropTypes.object
    };
    render () {
        return (
            <View style={{ flex: 1 }}>
                <Header leftIcon="bars" navigatorLeft={() => this.props.navigation.navigate('DrawerOpen')} title="React Wall" />
                <View style={styles.container}>
                    <UrlHandler displayText="go to webView" setUrl={'http://google.pl'} webViewHanlder={() => this.props.navigation.navigate('WebView', { setUrl: 'https://www.google.pl' })} />
                </View>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#FFF'
    }
});

export default ReactWallSceen;
