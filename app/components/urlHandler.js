import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import { Text, TouchableOpacity, StyleSheet, Linking } from 'react-native';

class urlHandler extends Component {
    static propTypes = {
        webViewEnable: PropTypes.bool,
        setUrl: PropTypes.string,
        webViewHanlder: PropTypes.func
    }
    goTo = () => {
        if (!this.props.webViewEnable) {
            Linking.openURL(this.props.setUrl);
        } else {
            this.props.webViewHanlder();
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
const mapStateToProps = ({ webView }) => {
    return {
        webViewEnable: webView.webViewEnable
    };
};
export default connect(mapStateToProps)(urlHandler);
