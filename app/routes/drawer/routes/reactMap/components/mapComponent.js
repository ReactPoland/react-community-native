import React, { Component, PropTypes } from 'react';
import { StyleSheet } from 'react-native';
import MapView from 'react-native-maps';
import { prepareUsersMarkers, prepareEventsMarkers } from '../../../../../utils/tools';

class MapComponent extends Component {
    constructor (props) {
        super(props)
        this.state = {
            markersArray: [],
            currentRegion: this.props.region
        }
    }
    static propTypes = {
        usersMarkers: PropTypes.array,
        eventsMarkers: PropTypes.array,
        region: PropTypes.function
    };
    regionChange = (currentRegion) => {
        this.setState({ currentRegion });
    }
    componentWillReceiveProps (nextProps) {
        this.setState({
            currentRegion: nextProps.region
        });
    }
    updateMarkers = (value) => {
        console.log(this.props.region)
        if (this.props.switchMap) {
            const markersArray = this.props.usersMarkers.map((marker, i) => {
                const markerPrepered = prepareUsersMarkers(marker);
                return (<MapView.Marker key={i}
                  {...markerPrepered}
            />);
            });
            this.setState({ markersArray });
        } else {
            const markersArray = this.props.eventsMarkers.map((marker, i) => {
                const markerPrepered = prepareEventsMarkers(marker);
                return (<MapView.Marker key={i} pinColor={'#bada55'}
                  {...markerPrepered}
                />);
            });
            this.setState({ markersArray });
        }
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
            </MapView>
        );
    }
}

export default MapComponent;
