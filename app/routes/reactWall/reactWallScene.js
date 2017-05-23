import React, { Component } from 'react'
import { View, Text, StyleSheet, ScrollView } from 'react-native'
import { COLOR, ThemeProvider, Toolbar } from 'react-native-material-ui'
import Container from '../drawer/container'
import WallArticle from './wallArticle'
const uiTheme = {
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
      color: 'black',
      marginLeft: 80,
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
                leftElement="menu"
                onLeftElementPress={() => this.props.navigation.navigate('DrawerOpen')}
                centerElement="ReactWall"
              />
              <View style={styles.container}>
                <ScrollView>
                  <WallArticle />
                  <WallArticle />
                  <WallArticle />
                  <View style={styles.scrollEndLine}></View>
                </ScrollView>
              </View>
            </Container>
          </ThemeProvider>
        );
    }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
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
  scrollEndLine: {
    height: 10,
  }
});

export default reactWallSceen;
