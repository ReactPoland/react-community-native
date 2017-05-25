import React, { Component } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Dimensions, WebView } from 'react-native';
import { COLOR, ThemeProvider, Toolbar } from 'react-native-material-ui';
import Container from '../drawer/container';
import { StackNavigator } from 'react-navigation';
const window = Dimensions.get('window');

const uiTheme = {
  palette: {
    primaryColor: COLOR.grey500,
    accentColor: COLOR.grey500,
  },
  toolbar: {
    container: {
      height: 60,
      backgroundColor: '#EBEBEB',
    },
    leftElement: {
      color: 'black'
    },
    titleText: {
      color: 'black',
      marginLeft: 80,
    },
    rightElement: {
      color: 'black'
    },
  },
};

class webViewScene extends Component {
    render () {
        return (
          <ThemeProvider uiTheme={uiTheme}>
            <Container>
              <Toolbar
                leftElement="arrow-back"
                onLeftElementPress={() => this.props.navigation.navigate('DrawerOpen')}
                centerElement="site"
                rightElement="exit-to-app"
                onRightElementPress={() => this.props.navigation.navigate('DrawerOpen')}
              />
              <View style={styles.container}>
                <WebView
                  source={{uri: 'http://reactjs.co/'}}
                />
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



export default webViewScene;
