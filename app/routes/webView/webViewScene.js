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
    centerElementContainer:
    {
      position: 'relative',
      width: window.width - 160,
      height: 60,
      marginLeft: 80,
      marginRight: 80,
      justifyContent: 'center',
      alignItems: 'center'
    },
    titleText: {
      color: 'black',
      paddingBottom: 20,
    },
    rightElement: {
      color: 'black'
    },
  },
};

class webViewScene extends Component {
    render () {
        const { params } = this.props.navigation.state;
        return (
          <ThemeProvider uiTheme={uiTheme}>
            <Container>
              <Toolbar
                leftElement="arrow-back"
                onLeftElementPress={() => this.props.navigation.navigate('Drawer')}
                centerElement={params.webViewLink}
                rightElement="exit-to-app"
                onRightElementPress={() => Linking.openURL(params.webViewLink)}
              />
              <View style={styles.webViewStyle}>
                <WebView
                  source={{uri: params.webViewLink}}
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
  webViewStyle: {
    height: window.height - 80
  },
});



export default webViewScene;
