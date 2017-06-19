import React, { Component, PropTypes } from 'react';
import { StyleSheet } from 'react-native';
import MapView from 'react-native-maps';

const LATITUDE = 37.78825;
const LONGITUDE = -122.4324;
const LATITUDE_DELTA = 20;
const LONGITUDE_DELTA = 20;

class MapComponent extends Component {
    constructor (props) {
        super(props);
        this.state = {
            currentRegion: {
                latitude: LATITUDE,
                longitude: LONGITUDE,
                latitudeDelta: LATITUDE_DELTA,
                longitudeDelta: LONGITUDE_DELTA
            },
            lat: 0,
            long: 0,
            usersMarkers: [],
            eventsMarkers: [],
            currentMarkersShow: true,
            markersArray: []
        };
    }
    static propTypes = {
        markers: PropTypes.oneOfType([
            PropTypes.func,
            PropTypes.array
        ])
    };
    componentDidMount () {
        navigator.geolocation.getCurrentPosition((position) => {
            this.setState({ currentRegion: {
                latitude: position.coords.latitude,
                longitude: position.coords.longitude,
                latitudeDelta: LATITUDE_DELTA,
                longitudeDelta: LONGITUDE_DELTA
            } });
        }, (error) => {
            console.log(error);
        },
            {
                enableHighAccuracy: true, timeout: 20000, maximumAge: 10000
            });
        navigator.geolocation.watchPosition((position) => {
            this.setState({ currentRegion: {
                latitude: position.coords.latitude,
                longitude: position.coords.longitude,
                latitudeDelta: LATITUDE_DELTA,
                longitudeDelta: LONGITUDE_DELTA
            } });
        });
    }
    regionChange = (currentRegion) => {
        this.setState({ currentRegion });
    }
    render () {
        return (
            <MapView
              style={{
                  ...StyleSheet.absoluteFillObject
              }}
              region={this.state.currentRegion}
              onRegionChange={this.regionChange}
              showsUserLocation>
                {this.props.markers}
            </MapView>
        );
    }
}

export default MapComponent;
