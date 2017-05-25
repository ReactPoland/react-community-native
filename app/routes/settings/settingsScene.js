import React, { Component } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Dimensions, Switch } from 'react-native';
import { COLOR, ThemeProvider, Toolbar } from 'react-native-material-ui';
import Container from '../drawer/container';
import { StackNavigator } from 'react-navigation';
import GeneralAppInfo from '../settings/generalAppInfo/'
import UserInfo from './userInfo'
import Login from '../login'


const window = Dimensions.get('window');
const uiTheme = {
  palette: {
    primaryColor: COLOR.grey500,
    accentColor: COLOR.grey500,
  },
  toolbar: {
    container: {
      height: 80,
      paddingTop: 20,
      backgroundColor: '#EBEBEB',
    },
    leftElement: {
      color: 'black'
    },
    titleText: {
      color: 'black',
      marginLeft: 80,
    }
  },
};

class SettingsScene extends Component {
    render () {
        return (
          <ThemeProvider uiTheme={uiTheme}>
            <Container>
              <Toolbar
                leftElement="menu"
                onLeftElementPress={() => this.props.navigation.navigate('DrawerOpen')}
                centerElement="Settings"
              />
              <View style={styles.container}>
                <View style={styles.touchableStyle}>
                  <View style={styles.viewStyle}>
                    <Text style={[styles.textStyle, {marginTop: 10}]}>
                      Open website in App
                    </Text>
                    <Switch/>
                  </View>
                </View>
                <TouchableOpacity style={styles.touchableStyle} onPress={() => this.props.navigation.navigate('UserInfo')}
                  title="User Info">
                  <View>
                    <Text style={styles.textStyle}>
                      User Info
                    </Text>
                  </View>
                </TouchableOpacity>
                <TouchableOpacity style={styles.touchableStyle} onPress={() => this.props.navigation.navigate('General')}
                  title="User Info">
                  <View>
                    <Text style={styles.textStyle}>
                      General App Info
                    </Text>
                  </View>
                </TouchableOpacity>
                <TouchableOpacity style={styles.touchableStyle} onPress={() => this.props.navigation.navigate('Login')}
                  title="User Info">
                  <View>
                    <Text style={styles.textStyle}>
                      LogOut
                    </Text>
                  </View>
                </TouchableOpacity>
              </View>
            </Container>
          </ThemeProvider>
        );
    }
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#FFF',
    height: window.height,
  },
  header: {
    backgroundColor: '#455A64',
  },
  touchableStyle: {
    height: 50,
    width:  window.width,
    backgroundColor: '#EBEBEB',
    display: 'flex',
    justifyContent: 'center',
    paddingLeft: 20,
    paddingRight: 20,
    marginTop: 10,
  },
  viewStyle: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: window.width - 40,
  },
  textStyle: {
    fontSize: 20,
    fontFamily: 'Cochin',
  }
});

const MainAppStack = StackNavigator({
  Home: {
    screen: SettingsScene,
    path: 'drawer'
    },
  General: {
    screen: GeneralAppInfo,
    path: 'general'
  },
  UserInfo: {
    screen: UserInfo,
    path: 'general'
  },
  Login: {
    screen: Login,
    path: 'login'
  }
}, {
    headerMode: 'none'
});

export default MainAppStack;
