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
      color: 'black',
      fontSize: 55,
    },
    leftElementContainer: {
      fontSize: 55,
    },
    titleText: {
      marginTop: 20,
      color: 'black',
    },
    centerElementContainer:
    {
      position: 'absolute',
      width: window.width - 160,
      height: 80,
      marginLeft: 80,
      marginRight: 80,
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center'
    },
    leftElementContainer: {
      marginLeft: 5,
    },
  },
};

class reactWallSceen extends Component {
    render () {
        return (
          <ThemeProvider uiTheme={uiTheme}>
            <Container>
              <Toolbar
                leftElement="arrow-back"
                onLeftElementPress={() => this.props.navigation.navigate('Home')}
                centerElement="User"
              />
              <View style={styles.container}>
                <View style={styles.touchableStyle}>
                  <View style={styles.viewStyle}>
                    <Text style={[styles.textStyle, {marginTop: 10}]}>
                      Nick:
                    </Text>
                    <Text style={[styles.textStyle, {marginTop: 10}]}>
                      User Nick
                    </Text>
                  </View>
                </View>
                <View style={styles.touchableStyle}>
                  <View style={styles.viewStyle}>
                    <Text style={[styles.textStyle, {marginTop: 10}]}>
                      Name:
                    </Text>
                    <Text style={[styles.textStyle, {marginTop: 10}]}>
                      User Name
                    </Text>
                  </View>
                </View>
                <View style={styles.touchableStyle}>
                  <View style={styles.viewStyle}>
                    <Text style={[styles.textStyle, {marginTop: 10}]}>
                      Surname:
                    </Text>
                    <Text style={[styles.textStyle, {marginTop: 10}]}>
                      User Surname
                    </Text>
                  </View>
                </View>
                <View style={styles.touchableStyle}>
                  <View style={styles.viewStyle}>
                    <Text style={[styles.textStyle, {marginTop: 10}]}>
                      Email:
                    </Text>
                    <Text style={[styles.textStyle, {marginTop: 10}]}>
                      User Email
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

export default reactWallSceen;
