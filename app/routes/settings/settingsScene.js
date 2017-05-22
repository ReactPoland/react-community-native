import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { COLOR, ThemeProvider, Toolbar } from 'react-native-material-ui';
import Container from '../drawer/container';
import { StackNavigator } from 'react-navigation';
import GeneralAppInfo from '../settings/generalAppInfo/'
import LogOut from './logOut'
import UserInfo from './userInfo'

const uiTheme = {
  palette: {
    primaryColor: COLOR.grey500,
    accentColor: COLOR.grey500,
  },
  toolbar: {
    container: {
      height: 80,
      paddingTop: 20,
      backgroundColor: '#bababa',
    },
    leftElement: {
      color: 'black'
    },
    titleText: {
      color: 'black',
      marginLeft: 90,
    }
  },
};

class SettingsScene extends Component {
    render () {
        const { errorToken } = this.props;
        return (
          <ThemeProvider uiTheme={uiTheme}>
            <Container>
              <Toolbar
                leftElement='arrow'
                onLeftElementPress={() => this.props.navigation.navigate('DrawerOpen')}
                centerElement="Settings"
              />
              <View style={styles.container}>
                <Text style={styles.welcome}>
                  Welcome to ReactWall!
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
    backgroundColor: '#F5FCFF',
  },
  header: {
    backgroundColor: '#455A64',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});

const MainAppStack = StackNavigator({
  Home: {
    screen: SettingsScene,
    path: 'drawer'
    },
}, {
    headerMode: 'none'
});

export default MainAppStack;
