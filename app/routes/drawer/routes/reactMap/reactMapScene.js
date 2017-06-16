import React, { Component, PropTypes } from 'react';
import { View, StyleSheet, Switch, Text } from 'react-native';
import Header from '../../../../components/header.js';
import MapView from 'react-native-maps';
import UsersMarkers from '../../../../utils/usersMarkers';
import EventsMarkers from '../../../../utils/eventsMarkers';
import { prepareUsersMarkers, prepareEventsMarkers } from '../../../../utils/tools';
let switchPosition = false;

class ReactMapScene extends Component {
    static propTypes = {
        navigation: PropTypes.object
    };
    constructor (props) {
        super(props);
        this.state = {
            lat: 0,
            long: 0,
            usersMarkers: [],
            eventsMarkers: [],
            currentMarkersShow: true,
            markersArray: []
        };
    }
    componentDidMount () {
        navigator.geolocation.clearWatch(this.watchID);
        UsersMarkers
          .getMarkers()
          .then((res) => {
              this.setState({ usersMarkers: res });
          }, (error) => {
              console.log(error);
          });
        EventsMarkers
          .getMarkers()
          .then((res) => {
              this.setState({ eventsMarkers: res });
          }, (error) => {
              console.log(error);
          });
        navigator.geolocation.getCurrentPosition((position) => {
            const lat = parseFloat(position.coords.latitude);
            const long = parseFloat(position.coords.longitude);
            this.setState({ lat, long });
        }, (error) => {
            console.log(error);
        },
            {
                enableHighAccuracy: true, timeout: 20000, maximumAge: 10000
            });
        navigator.geolocation.watchPosition((position) => {
            const lat = parseFloat(position.coords.latitude);
            const long = parseFloat(position.coords.longitude);
            this.setState({ lat, long });
        });
    }
    componentWillMount () {
        navigator.geolocation.clearWatch(this.watchID);
    }
    updateMarkers = (value) => {
        if (value)
        {
            const markersArray = this.state.usersMarkers.map((marker, i) => {
                const markerPrepered = prepareUsersMarkers(marker);
                return (<MapView.Marker key={i}
                  {...markerPrepered}
            />);
            })
            this.setState({ markersArray })
        } else {
            const markersArray = this.state.eventsMarkers.map((marker, i) => {
                const markerPrepered = prepareEventsMarkers(marker);
                return (<MapView.Marker key={i} pinColor={'#bada55'}
                  {...markerPrepered}
                />);
            })
            this.setState({ markersArray })
        }
    }
    regionChange = (region) => {
        this.setState({ lat: region.latitude, long: region.longitude })
    }
    render () {
        return (
            <View style={{ flex: 1 }}>
                <Header leftIcon="bars" navigatorLeft={() => this.props.navigation.navigate('DrawerOpen')} title="React Map" />
                <View style={styles.touchableElementStyle}>
                    <View style={styles.switchElementContainer}>
                        <Text style={[
                            styles.textStyle, {
                            }
                        ]}>
                          Switch Map
                        </Text>
                        <Switch onValueChange={(value) => {
                            this.updateMarkers(value)
                            switchPosition = !switchPosition
                        }} value={switchPosition} />
                    </View>
                </View>
                <View style={styles.container}>
                    <MapView
                      style={{
                          ...StyleSheet.absoluteFillObject
                      }}
                      region={{
                          latitude: this.state.lat,
                          longitude: this.state.long,
                          latitudeDelta: 20,
                          longitudeDelta: 20
                      }}
                      onRegionChange={this.regionChange}
                      showsUserLocation>
                        {this.state.markersArray}
                    </MapView>
                </View>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#F5FCFF'
    },
    welcome: {
        fontSize: 20,
        textAlign: 'center',
        margin: 10
    },
    touchableElementStyle: {
        height: 50,
        width: window.width,
        backgroundColor: '#EEE',
        flexDirection: 'row',
        alignItems: 'center',
        paddingLeft: 20,
        paddingRight: 20,
        marginTop: 10,
        marginBottom: 10
    },
    switchElementContainer: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'space-between',
        width: window.width - 40
    },
    textStyle: {
        fontSize: 20,
        fontFamily: 'Cochin'
    }
});

export default ReactMapScene;
