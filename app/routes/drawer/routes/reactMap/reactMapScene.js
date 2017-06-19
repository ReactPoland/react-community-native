import React, { Component, PropTypes } from 'react';
import { View, StyleSheet, Switch, Text } from 'react-native';
import Header from '../../../../components/header.js';
import UsersMarkers from '../../../../utils/usersMarkers';
import EventsMarkers from '../../../../utils/eventsMarkers';
import MapComponent from './components/mapComponent';
import MapView from 'react-native-maps';
import { prepareUsersMarkers, prepareEventsMarkers } from '../../../../utils/tools';

let switchPosition = false;

class ReactMapScene extends Component {
    static propTypes = {
        navigation: PropTypes.object
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
    componentWillMount () {
        UsersMarkers
          .getMarkers()
          .then((res) => {
              this.setState({ usersMarkers: res })
          }, (error) => {
              console.log(error);
          }
        )
        EventsMarkers
          .getMarkers()
          .then((res) => {
              this.setState({ eventsMarkers: res })
              this.updateMarkers(switchPosition)
          }, (error) => {
              console.log(error);
          }
        );
    }
    updateMarkers = (value) => {
        if (value) {
            const markersArray = this.state.usersMarkers.map((marker, i) => {
                const markerPrepered = prepareUsersMarkers(marker);
                return (<MapView.Marker key={i}
                  {...markerPrepered}
            />);
            });
            this.setState({ markersArray });
        } else {
            const markersArray = this.state.eventsMarkers.map((marker, i) => {
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
                            this.updateMarkers(value);
                            switchPosition = !switchPosition;
                        }} value={switchPosition} />
                    </View>
                </View>
                <View style={styles.container}>
                    <MapComponent markers={this.state.markersArray}
                      switchMap={switchPosition}
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

export default ReactMapScene;
