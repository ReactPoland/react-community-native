import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { connect } from 'react-redux';
import { setDummyError } from '../../redux/reducers/login';

class LoginScene extends Component {
    componentDidMount () {
        this.handleDummyError();
    }

    handleDummyError = () => {
        setInterval(() => {
            const { errorToken } = this.props;
            const dummyErrorState = !(errorToken);
            this.props.dispatch(setDummyError(dummyErrorState));
        }, 5000);
    }

    render () {
        const { errorToken } = this.props;
        return (
            <View style={styles.container}>
                <Text style={styles.welcome}>
                  Welcome to LoginScene!
                </Text>
                <Text> {errorToken} </Text>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#F5FCFF'
    },
    welcome: {
        fontSize: 20,
        textAlign: 'center',
        margin: 10
    }
});

const mapStateToProps = ({ login }) => {
    return {
        errorToken: login.errorToken
    };
};

export default connect(mapStateToProps)(LoginScene);
