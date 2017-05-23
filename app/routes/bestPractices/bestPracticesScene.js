import React, { Component } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Dimensions, Switch } from 'react-native';
import { COLOR, ThemeProvider, Toolbar } from 'react-native-material-ui';
import { StackNavigator } from 'react-navigation';
import Container from '../drawer/container';
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

class BestPractices extends Component {
  render () {
      const { errorToken } = this.props;
      return (
        <ThemeProvider uiTheme={uiTheme}>
          <Container>
            <Toolbar
              leftElement="menu"
              onLeftElementPress={() => this.props.navigation.navigate('DrawerOpen')}
              centerElement="Best Practices"
            />
            <View style={styles.container}>
              <View style={styles.touchableStyle}>
                <View style={styles.viewStyle}>
                  <Text style={[styles.textStyle, {marginTop: 10}]}>
                    Available soon...
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

export default BestPractices;
