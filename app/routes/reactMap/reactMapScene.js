import React, { Component } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Dimensions, Switch } from 'react-native';
import { COLOR, ThemeProvider, Toolbar } from 'react-native-material-ui';
import { StackNavigator } from 'react-navigation';
import MapView from 'react-native-maps'
import Container from '../drawer/container';
const window = Dimensions.get('window');
const SCREEN_HEIGHT = window.height
const SCREEN_WIDTH = window.width
const ASPECT_RATIO = window.width/window.height
const LATTITUDE_DELTA = 0.0922
const LONGTITUDE_DELTA = LATTITUDE_DELTA * ASPECT_RATIO

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
      initialPosition: {
        latitude: 0,
        longitude: 0,
        latitudeDelta: 0,
        longitudeDelta: 0
      },
      markerPosition: {
        latitude: 0,
        longitudeDelta: 0,
      }
    }
  }

  componentDidMount() {
    navigator.geolocation.getCurrentPosition((position) => {
      var lat = parseFloat(position.coords.latitude)
      var long = parseFloat(position.coords.longitude)
      console.log('geolocation work')
      var initialRegion = {
        latitude: lat,
        longitude: long,
        latitudeDelta: LATTITUDE_DELTA,
        longitudeDelta: LONGTITUDE_DELTA
      }
      this.setState({ initialRegion: initialRegion })
      this.setState({ markerPosition: initialRegion})
    },
    (error) => alert(JSON.stringify(error)),
    {enableHighAccuracy: true, timeout: 200000, maximumAge: 1000})

    this.watchID = navigator.geolocation.watchPosition((position) => {
      var lat = parseFloat(position.coords.latitude)
      var long = parseFloat(position.coords.longitude)

      var lastRegion = {
        latitude: lat,
        longitude: long,
        longitudeDelta: LONGTITUDE_DELTA,
        latitudeDelta: LATTITUDE_DELTA
      }

      this.setState({initialPosition: lastRegion})
      this.setState({markerPosition: lastRegion})
    })
  }

  componentWillMount() {
    navigator.geolocation.clearWatch(this.watchID)
  }

  render () {
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
              <MapView
                style={styles.map}
                initialRegion={this.state.initialPosition}
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
  },
  map: {
    height: window.height/2,
    width: window.width,
    borderWidth: 1,
    borderColor: 'black',
  }
});

export default ReactMapScene;
