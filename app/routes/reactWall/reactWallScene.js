import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { COLOR, ThemeProvider, Toolbar } from 'react-native-material-ui';
import Container from '../drawer/container';
import Icon from 'react-native-vector-icons/Ionicons';
const myIcon = (<Icon name="bars" size={30} color="#900" />)
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

class reactWallSceen extends Component {
    render () {
        const { errorToken } = this.props;
        return (
          <ThemeProvider uiTheme={uiTheme}>
            <Container>
              <Toolbar
                leftElement='arrow'
                onLeftElementPress={() => this.props.navigation.navigate('DrawerOpen')}
                centerElement="ReactWall"
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

export default reactWallSceen;
