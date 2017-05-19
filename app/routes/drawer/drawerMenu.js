import React, { Component } from 'react'
import {
    AppRegistry,
    StyleSheet,
    Text,
    StatusBar,
    View,
    Image,
    TouchableOpacity
} from 'react-native'
import { COLOR,  ThemeProvider, Toolbar, Drawer, Avatar } from 'react-native-material-ui'
import Container from './container'
import Icon from 'react-native-vector-icons/FontAwesome'

const uiTheme = {
  palette: {
    primaryColor: '#000000',
    accentColor: '#000',
    canvasColor: '#B38381'
  },
  toolbar: {
    container: {
      backgroundColor: "#B38381",
      height: 0,
    },
  },
  typography: {
    display: 'flex',
    justifyContent: 'center',
  }
};
const uiThemeSection = {
    palette: {
      primaryColor: '#FFFFFFF',
      accentColor: '#FFFFFF',
    },
};
const settingsIcon = (<Image
  style={{marginLeft: 10, marginTop: 10, width: 40, height: 40,}}
  source={{uri: 'http://www.myiconfinder.com/uploads/iconsets/128-128-03a6912f2105fa73cd2e7798bd0a7ffa-gear.png'}}
/>)
export default class DrawerMenu extends Component {
  constructor(props, context) {
    super(props, context);
    this.state = {
      active: 'ReactWall',
    };
  }
  render() {
    return (
      <ThemeProvider uiTheme={uiTheme}>
        <Container>
          <StatusBar translucent />
          <Toolbar />
          <View style={styles.container}>
            <Drawer style={{ container: { backgroundColor: '#B38381' }}}>
              <View style={styles.userIco}>
                <TouchableOpacity onPress= {() => {
                    this.setState({ active: 'Settings' });
                    this.props.navigation.navigate('Settings');
                  }}>
                  <Image
                    style={{marginLeft: 10, marginTop: 10, width: 40, height: 40,}}
                    source={{uri: 'http://www.myiconfinder.com/uploads/iconsets/128-128-03a6912f2105fa73cd2e7798bd0a7ffa-gear.png'}}
                  />
                </TouchableOpacity>
                <Image
                  style={{position: 'absolute', marginTop: 15, marginLeft: 75, width: 200, height: 200, borderRadius: 150}}
                  source={{uri: 'https://avatars3.githubusercontent.com/u/23702215?v=3&s=460'}}
                />
              </View>
                <Drawer.Section uiTheme={uiThemeSection}
                              style={{
                                  container: { backgroundColor: '#B38381' }
                              }}
                              divider
                              items={[
                                  {
                                      value: 'ReactWall',
                                      active: this.state.active == 'ReactWall',
                                      onPress: () => {
                                          this.setState({ active: 'ReactWall' });
                                          this.props.navigation.navigate('ReactWall');
                                        },
                                    },
                                  {
                                      value: 'ReactMap',
                                      active: this.state.active == 'ReactMap',
                                      onPress: () => {
                                          this.setState({ active: 'ReactMap' });
                                          this.props.navigation.navigate('ReactMap');
                                        },
                                    },
                                  {
                                      value: 'Best Practices',
                                      active: this.state.active == 'Best Practices',
                                      onPress: () => {
                                          this.setState({ active: 'Best Practices' });
                                          this.props.navigation.navigate('Best Practices');
                                        },
                                    },
                                  {
                                      value: 'Tutorials',
                                      active: this.state.active == 'Tutorials',
                                      onPress: () => {
                                          this.setState({ active: 'Tutorials' });
                                          this.props.navigation.navigate('Tutorials');
                                        },
                                    },
                                  {
                                      value: 'Articles',
                                      active: this.state.active == 'Articles',
                                      onPress: () => {
                                          this.setState({ active: 'Articles' });
                                          this.props.navigation.navigate('Articles');
                                        },
                                    },
                                  {
                                      value: 'Events',
                                      active: this.state.active == 'Events',
                                      onPress: () => {
                                          this.setState({ active: 'Events' });
                                          this.props.navigation.navigate('Events');
                                        },
                                    },
                              ]}
                          />
            </Drawer>
          </View>
        </Container>
      </ThemeProvider>
    )
  }
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
      },
    userIco: {
        height: 230,
    },
    header: {
        backgroundColor: '#B38381',
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
