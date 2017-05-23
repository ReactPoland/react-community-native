import React, { Component } from 'react';
import { View, Text, StyleSheet, Dimensions } from 'react-native';
import { COLOR, ThemeProvider, Toolbar } from 'react-native-material-ui';
import Container from '../../drawer/container';
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
class generalAppInfoScene extends Component {
  render () {
      return (
        <ThemeProvider uiTheme={uiTheme}>
          <Container>
            <Toolbar
              leftElement="arrow-back"
              onLeftElementPress={() => this.props.navigation.navigate('Home')}
              centerElement="AppInfo"
            />
            <View style={styles.container}>
              <View style={styles.touchableStyle}>
                <View style={styles.viewStyle}>
                  <Text style={[styles.textStyle, {marginTop: 10}]}>
                    Version:
                  </Text>
                  <Text style={[styles.textStyle, {marginTop: 10}]}>
                    0.0.1
                  </Text>
                </View>
              </View>
              <View style={styles.touchableStyle}>
                <View style={styles.viewStyle}>
                  <Text style={[styles.textStyle, {marginTop: 10}]}>
                    Build:
                  </Text>
                  <Text style={[styles.textStyle, {marginTop: 10}]}>
                    1
                  </Text>
                </View>
              </View>
              <View style={styles.touchableStyle}>
                <View style={styles.viewStyle}>
                  <Text style={[styles.textStyle, {marginTop: 10}]}>
                    Authors
                  </Text>
                  <Text style={[styles.textStyle, {marginTop: 10}]}>
                    ReactPoland
                  </Text>
                </View>
              </View>
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
    width: window.width,
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
    width:  window.width - 40,
  },
  textStyle: {
    fontSize: 20,
    fontFamily: 'Cochin',
  }
});

export default generalAppInfoScene;
