import React, { Component, PropTypes } from 'react';
import { StyleSheet } from 'react-native';
import MapView from 'react-native-maps';

class MapComponent extends Component {
    constructor (props) {
        super(props)
        this.state = {
            currentRegion: this.props.region
        }
    }
    static propTypes = {
        region: PropTypes.oneOfType([
            PropTypes.func,
            PropTypes.object
        ]),
        updateRegion: PropTypes.func,
        markers: PropTypes.oneOfType([
            PropTypes.func,
            PropTypes.array
        ])
    };
    componentWillReceiveProps (nextProps) {
        this.setState({
            currentRegion: nextProps.region
        });
    }
    render () {
        return (
            <MapView
              style={{
                  ...StyleSheet.absoluteFillObject
              }}
              region={this.state.currentRegion}
              onRegionChange={this.props.updateRegion}
              showsUserLocation>
                {this.props.markers}
            </MapView>
        );
    }
}

export default MapComponent;
