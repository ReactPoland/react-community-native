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

class ReactMapScene extends Component {
  constructor(props) {
    super(props);
    this.state = {
      latitude: null,
      longitude: null,
      error: null,
    }
  }
  componentDidMount() {
    navigator.geolocation.getCurrentPosition((position) => {
      this.setState({ latitude: position.coords.latitude,
                      longitude: position.coords.longitude,
                      error: null,
                    })
      },
      (error) => this.setState({ error: error.message }),
      { enableHighAccuract: true, timeout: 20000, maximumAge: 1000},
    )
  }
  render () {
      const { errorToken } = this.props;
      return (
        <ThemeProvider uiTheme={uiTheme}>
          <Container>
            <Toolbar
              leftElement="menu"
              onLeftElementPress={() => this.props.navigation.navigate('DrawerOpen')}
              centerElement="ReactMap"
            />
            <View style={styles.container}>
              <View style={styles.touchableStyle}>
                <View style={styles.viewStyle}>
                  <Text style={[styles.textStyle, {marginTop: 10}]}>
                    Latitude: {this.state.latitude}, longitude: {this.state.longitude}
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

export default ReactMapScene;
