import React, { Component, PropTypes } from 'react';
import { View, StyleSheet, Switch, Text } from 'react-native';
import Header from 'app/components/header.js';
import MapComponent from './components/mapComponent';
import MapView from 'react-native-maps';
import { connect } from 'react-redux';
import { getUsers, getEvents } from 'app/redux/reducers/reactMap';
import { prepareMarkers } from './utils/tools';

class ReactMapScene extends Component {
    static propTypes = {
        navigation: PropTypes.object,
        usersMarkers: PropTypes.array,
        eventsMarkers: PropTypes.array,
        dispatch: PropTypes.func
    };
    constructor (props) {
        super(props);
        this.state = {
            usersMarkers: [],
            eventsMarkers: [],
            markersArray: [],
            switchMapMarkersPosition: false
        };
    }
    componentDidMount () {
        this.handleData();
    }
    handleData = () => {
        this.props.dispatch(getUsers());
        this.props.dispatch(getEvents());
    }
    componentWillReceiveProps (nextProps) {
        if (Array.isArray(nextProps.usersMarkers) && Array.isArray(nextProps.eventsMarkers)) {
            this.handleMarkers(nextProps);
        }
    }
    handleMarkers = (nextProps) => {
        let markersArray = null;
        if (this.state.switchMapMarkersPosition) {
            markersArray = nextProps.usersMarkers.map((marker, i) => {
                return this.createMarkers(marker, i)
            });
        } else {
            markersArray = nextProps.eventsMarkers.map((marker, i) => {
                return this.createMarkers(marker, i)
            });
        }
        this.setState({ markersArray });
    }
    createMarkers = (marker, i) => {
        const markerPrepered = prepareMarkers(marker);
        return (<MapView.Marker key={i} pinColor={'#bada55'}
          {...markerPrepered}
        />);
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
                            this.setState({ switchMapMarkersPosition: value });
                            this.handleMarkers(this.props);
                        }} value={this.state.switchMapMarkersPosition} />
                    </View>
                </View>
                <View style={styles.container}>
                    <MapComponent markers={this.state.markersArray}
                      switchMap={this.state.test}
                      region={this.state.currentRegion}
                      updateRegion={this.regionChange}
                    />
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

const mapStateToProps = ({ reactMap }) => {
    return {
        usersMarkers: reactMap.usersMarkers,
        eventsMarkers: reactMap.eventsMarkers
    };
};

export default connect(mapStateToProps)(ReactMapScene);
