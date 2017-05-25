import React, { Component } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Dimensions, WebView, Linking } from 'react-native';
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
      height: 80,
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
                onLeftElementPress={() => this.props.navigation.navigate('Drawer')}
                centerElement="site"
                rightElement="exit-to-app"
                onRightElementPress={() => Linking.openURL('http://react-community-stage.herokuapp.com/article/22/test-article')}
              />
              <View style={styles.container}>
                <WebView
                  source={{uri: 'http://react-community-stage.herokuapp.com/article/22/test-article'}}
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
});



export default webViewScene;
