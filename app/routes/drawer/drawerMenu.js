import React, { Component } from 'react'
import {
    AppRegistry,
    StyleSheet,
    Text,
    StatusBar,
    View
} from 'react-native'
import { COLOR,  ThemeProvider, Toolbar, Drawer, Avatar } from 'react-native-material-ui'
import Container from './container'

const uiTheme = {
  palette: {
    primaryColor: '#B38381',
    accentColor: '#B38381'
  },
  toolbar: {
    container: {
      height: 70,
      paddingTop: 20,
    },
  },
  avatar: {
    constainer: {
      backgroundColor: '#333'
    }
  }
};

export default class DrawerMenu extends Component {
  constructor(props, context) {
    super(props, context);
    this.state = {
      active: 'peopel',
    };
  }
  render() {
    return (
      <ThemeProvider uiTheme={uiTheme}>
        <Container>
          <StatusBar translucent />
          <Toolbar
                    onLeftElementPress={() => this.props.navigation.navigate('DrawerClose')}
                    centerElement="Menu"
                  />
          <View>
            <Drawer>
              <Drawer.Header>
                <Drawer.Header.Account
                            style={{
                                container: { backgroundColor: '#fafafa' },
                            }}
                            avatar={<Avatar text={'K'} />}
                            accounts={[
                                { avatar: <Avatar text="H" /> },
                                { avatar: <Avatar text="L" /> },
                            ]}
                            footer={{
                                dense: true,
                                centerElement: {
                                    primaryText: 'Kevin Le',
                                    secondaryText: 'kevin@codeprototype.com',
                                },
                                rightElement: 'arrow-drop-down',
                              }}
                        />
              </Drawer.Header>
            </Drawer>
          </View>
        </Container>
      </ThemeProvider>
    )
  }
}
