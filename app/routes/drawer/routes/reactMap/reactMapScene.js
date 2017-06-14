import React, { Component, PropTypes } from 'react';
import { View, StyleSheet, Switch } from 'react-native';
import Header from '../../../../components/header.js';
import MapView from 'react-native-maps';
import UsersMarkers from '../../../../utils/usersMarkers';
import EventsMarkers from '../../../../utils/eventsMarkers';
import { prepareUsersMarkers, prepareEventsMarkers } from '../../../../utils/tools';

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
            currentMarkersShow: true
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
    currentView = () => {
        if (this.state.currentMarkersShow) {
            return (this.state.usersMarkers.map((marker, i) => {
                const markerPrepered = prepareUsersMarkers(marker);
                return (<MapView.Marker key={i}
                  {...markerPrepered}
            />);
            }))
        } else {
            return (this.state.eventsMarkers.map((marker, i) => {
                const markerPrepered = prepareEventsMarkers(marker);
                return (<MapView.Marker key={i} pinColor={'#bada55'}
                  {...markerPrepered}
                />);
            }))
        }
    }
    currentView1 = () => (this.state.eventsMarkers.map((marker, i) => {
        const markerPrepered = prepareEventsMarkers(marker);
        return (<MapView.Marker key={i} pinColor={'#bada55'}
          {...markerPrepered}
        />);
    }))
    render () {
        return (
            <View style={{ flex: 1 }}>
                <Header leftIcon="bars" navigatorLeft={() => this.props.navigation.navigate('DrawerOpen')} title="React Map" />
                <Switch onValueChange={(value) => {
                    this.setState({ currentMarkersShow: !this.state.currentMarkersShow });
                }} value={this.state.currentMarkersShow} />
                <View style={styles.container}>
                    <MapView
                      style={{
                          ...StyleSheet.absoluteFillObject
                      }}
                      region={{
                          latitude: this.state.lat,
                          longitude: this.state.long,
                          latitudeDelta: 0.0092,
                          longitudeDelta: 0.0041
                      }} showsUserLocation>
                        {this.currentView()}
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
    }
});

export default ReactMapScene;
