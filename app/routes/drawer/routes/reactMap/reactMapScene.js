import React, { Component, PropTypes } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import Header from '../../../../components/header.js';
import MapView from 'react-native-maps';

class ReactMapScene extends Component {
    static propTypes = {
        navigation: PropTypes.object
    };
    constructor (props) {
        super(props);
        this.state = {
                lat: 0,
                long: 0,
        }
    }
    componentDidMount () {
        navigator.geolocation.getCurrentPosition((position) => {
            var lat = parseFloat(position.coords.latitude)
            var long = parseFloat(position.coords.longitude)
            this.setState({ lat, long })
        })
        this.watchID = navigator.geolocation.watchPosition((position) => {
            var lat = parseFloat(position.coords.latitude)
            var long = parseFloat(position.coords.longitude)
            this.setState({ lat, long })
        })
    }

    componentWillMount () {
        navigator.geolocation.clearWatch(this.watchID)
    }
    render () {
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
                      }} showsUserLocation />
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
