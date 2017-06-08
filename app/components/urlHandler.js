import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import { Text, TouchableOpacity, StyleSheet, Linking } from 'react-native';

class urlHandler extends Component {
    static propTypes = {
        webViewEnable: PropTypes.bool,
        setUrl: PropTypes.string,
        webViewHanlder: PropTypes.func,
        displayText: PropTypes.string
    }
    openUrl = () => {
        if (!this.props.webViewEnable) {
            Linking.openURL(this.props.setUrl);
        } else {
            this.props.webViewHanlder();
        }
    }
    render () {
        return (
            <TouchableOpacity onPress={this.openUrl} >
                <Text style={styles.textStyle}>
                    {this.props.displayText}
                </Text>
            </TouchableOpacity>
        );
    }
}
const styles = StyleSheet.create({
    textStyle: {
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
