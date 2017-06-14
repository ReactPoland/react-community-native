import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import { Text, TouchableOpacity, StyleSheet, Linking } from 'react-native';

class urlHandler extends Component {
    static propTypes = {
        webViewEnable: PropTypes.bool,
        setUrl: PropTypes.string,
<<<<<<< HEAD
        webViewHanlder: PropTypes.func
    }
    goTo = () => {
=======
        webViewHanlder: PropTypes.func,
        displayText: PropTypes.string
    }
    openUrl = () => {
>>>>>>> master
        if (!this.props.webViewEnable) {
            Linking.openURL(this.props.setUrl);
        } else {
            this.props.webViewHanlder();
        }
    }
    render () {
        return (
<<<<<<< HEAD
            <TouchableOpacity onPress={this.goTo} >
                <Text style={styles.welcome}>
                    Welcome to ReactWall!
=======
            <TouchableOpacity onPress={this.openUrl} >
                <Text style={styles.textStyle}>
                    {this.props.displayText}
>>>>>>> master
                </Text>
            </TouchableOpacity>
        );
    }
}
const styles = StyleSheet.create({
<<<<<<< HEAD
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#FFF'
    },
    welcome: {
=======
    textStyle: {
>>>>>>> master
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
