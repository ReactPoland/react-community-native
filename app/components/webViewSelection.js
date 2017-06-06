import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import { Text, TouchableOpacity, StyleSheet, Linking } from 'react-native';

class webViewComponent extends Component {
    static propTypes = {
        webViewEnable: PropTypes.bool,
        setUrl: PropTypes.string,
        onHandlePress: PropTypes.func
    }
    goTo = () => {
        if (!this.props.webViewEnable) {
            Linking.openURL(this.props.setUrl);
        } else {
            this.props.onHandlePress();
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
