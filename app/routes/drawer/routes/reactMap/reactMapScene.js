import React, { Component, PropTypes } from 'react';
import { View, StyleSheet, Switch, Text } from 'react-native';
import Header from 'app/components/header.js';
import MapComponent from './components/mapComponent';
import MapView from 'react-native-maps';
import { connect } from 'react-redux';
import { getUsers, getEvents, switchMapMarkers } from 'app/redux/reducers/reactMap';
import { prepareUsersMarkers, prepareEventsMarkers } from './utils/tools';

class ReactMapScene extends Component {
    static propTypes = {
        navigation: PropTypes.object,
        usersMarkers: PropTypes.array,
        eventsMarkers: PropTypes.array,
        dispatch: PropTypes.func,
        switchMapMarkersPosition: PropTypes.bool
    };
    constructor (props) {
        super(props);
        this.state = {
            usersMarkers: [],
            eventsMarkers: [],
            currentMarkersShow: true,
            markersArray: []
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
            this.updateMarkers(nextProps);
        }
        if (nextProps.switchMapMarkersPosition !== this.props.switchMapMarkersPosition) {
            this.updateMarkers(nextProps);
        }
    }
    updateMarkers = (nextProps) => {
        if (nextProps.switchMapMarkersPosition) {
            const markersArray = nextProps.usersMarkers.map((marker, i) => {
                const markerPrepered = prepareUsersMarkers(marker);
                return (<MapView.Marker key={i}
                  {...markerPrepered}
            />);
            });
            this.setState({ markersArray });
        } else {
            const markersArray = nextProps.eventsMarkers.map((marker, i) => {
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
                            this.props.dispatch(switchMapMarkers(value));
                        }} value={this.props.switchMapMarkersPosition} />
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
        eventsMarkers: reactMap.eventsMarkers,
        switchMapMarkersPosition: reactMap.switchMapPosition
    };
};

export default connect(mapStateToProps)(ReactMapScene);
