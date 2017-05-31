import React, { Component, PropTypes } from 'react';
import { View, StyleSheet, Dimensions } from 'react-native';
import { ThemeProvider } from 'react-native-material-ui';
import Header from '../../../../../components/header';
import LableSettings from '../../../../../components/lableSettings';
import Container from '../../../container';
const window = Dimensions.get('window');

class generalAppInfoScene extends Component {
    static propTypes = {
        navigation: PropTypes.object
    };
    static defaultProps = {
        name: 'Mary'
    };
    render () {
        return (
            <ThemeProvider>
                <Container>
                    <Header leftIcon="arrow-left" navigatorLeft={() => this.props.navigation.navigate('Home')} title="General Info" />
                    <View style={styles.container}>
                        <LableSettings leftElement="Version:" rightElement="0.0.1" />
                        <LableSettings leftElement="Build:" rightElement="1" />
                        <LableSettings leftElement="Authors:" rightElement="ReactPoland" />
                    </View>
                </Container>
            </ThemeProvider>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#FFF',
        height: window.height
    }
});

export default generalAppInfoScene;
