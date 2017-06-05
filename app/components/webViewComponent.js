import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { Text, TouchableOpacity, StyleSheet, Linking } from 'react-native';
import WebView from '../routes/webView';

class webViewComponent extends Component {
    goTo = () => {
        if (this.props.webViewEnable) {
            Linking.openURL(this.props.setUrl)
        } else {
            this.props.onHandlePress()
        }
    }
    render () {
        return (
            <TouchableOpacity onPress={this.goTo} >
                <Text style={styles.welcome}>
                    Welcome to ReactWall!
                </Text>
            </TouchableOpacity>
        );
    }
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#FFF'
    },
    welcome: {
        fontSize: 20,
        textAlign: 'center',
        margin: 10
    }
});
const mapStateToProps = ({ switcher }) => {
    return {
        webViewEnable: switcher.webViewEnable
    };
};
export default connect(mapStateToProps)(webViewComponent);
