import React, { Component, PropTypes } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { COLOR, ThemeProvider } from 'react-native-material-ui';
import Container from '../../container';
import Header from '../../../../components/header.js';
const uiTheme = {
    palette: {
        primaryColor: COLOR.grey500,
        accentColor: COLOR.grey500
    }
};

class ArticlesScene extends Component {
    static propTypes = {
        navigation: PropTypes.object
    };
    render () {
        return (
            <ThemeProvider uiTheme={uiTheme}>
                <Container>
                    <Header leftIcon="bars" navigatorLeft={() => this.props.navigation.navigate('DrawerOpen')} title="React Articles" />
                    <View style={styles.container}>
                        <Text style={styles.welcome}>
                            Welcome to Articles!
                        </Text>
                    </View>
                </Container>
            </ThemeProvider>
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

export default ArticlesScene;
