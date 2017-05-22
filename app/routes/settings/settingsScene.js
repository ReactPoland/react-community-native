import React, { Component } from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
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
                <View style={styles.touchableStyle}>
                  <Text>
                    User Info
                  </Text>
                </View>
                <TouchableOpacity style={styles.touchableStyle} onPress={() => this.props.navigation.navigate('General')}
                  title="User Info">
                  <View>
                    <Text>
                      User Info
                    </Text>
                  </View>
                </TouchableOpacity>
                <TouchableOpacity style={styles.touchableStyle} onPress={() => this.props.navigation.navigate('UserInfo')}
                  title="User Info">
                  <View>
                    <Text>
                      User Info
                    </Text>
                  </View>
                </TouchableOpacity>
                <TouchableOpacity style={styles.touchableStyle} onPress={() => this.props.navigation.navigate('LogOut')}
                  title="User Info">
                  <View>
                    <Text>
                      User Info
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
  touchableStyle: {
    height: 50,
    width: 420,
    backgroundColor: '#bababa',
    display: 'flex',
    paddingLeft: 20,
    paddingRight: 20,
    marginTop: 10,
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
  LogOut: {
    screen: LogOut,
    path: 'general'
  }
}, {
    headerMode: 'none'
});

export default MainAppStack;
