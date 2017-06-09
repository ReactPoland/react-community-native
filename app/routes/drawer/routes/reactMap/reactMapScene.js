import React, { Component, PropTypes } from 'react';
import { View, StyleSheet } from 'react-native';
import Header from '../../../../components/header.js';
import MapView from 'react-native-maps';
import UsersMarkers from '../../../../utils/usersMarkers';
import { prepareMarkers } from '../../../../utils/tools';

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
            isLoading: false
        };
    }
    componentWillMount () {
        navigator.geolocation.clearWatch(this.watchID);
        const usersMarkers = UsersMarkers
        .getMarkers()
        .then((res) => {
            this.setState({ usersMarkers: res })
            return usersMarkers
        })
        navigator.geolocation.getCurrentPosition((position) => {
            const lat = parseFloat(position.coords.latitude);
            const long = parseFloat(position.coords.longitude);
            this.setState({ lat, long });
        });
        this.watchID = navigator.geolocation.watchPosition((position) => {
            const lat = parseFloat(position.coords.latitude);
            const long = parseFloat(position.coords.longitude);
            this.setState({ lat, long });
        });
    }
    componentDidMount () {
    }
    render () {
        const currentView = (this.state.isLoading) ? <View /> : this.state.usersMarkers.map((marker, i) => {
            return (<MapView.Marker key={i}
              {...marker}
            />);
          }
        );
        return (
            <View style={{ flex: 1 }}>
                <Header leftIcon="bars" navigatorLeft={() => this.props.navigation.navigate('DrawerOpen')} title="React Map" />
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
                        {currentView}
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
