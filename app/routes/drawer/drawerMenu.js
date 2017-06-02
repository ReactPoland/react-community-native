import React, { Component, PropTypes } from 'react';
import {
    StyleSheet,
    View,
    Image,
    TouchableOpacity
} from 'react-native';
import DrawerMenuElement from '../../components/drawerMenuElement.js';
import Icon from 'react-native-vector-icons/FontAwesome';

export default class DrawerMenu extends Component {
    constructor (props, context) {
        super(props, context);
        this.state = {
            active: 'ReactWall'
        };
    }
    static propTypes = {
        navigation: PropTypes.object
    };
    render () {
        return (
            <View style={styles.container}>
                <View style={styles.userIco}>
                    <TouchableOpacity style={styles.settingsIco} onPress={() => {
                        this.setState({ active: 'Settings' });
                        this.props.navigation.navigate('Settings');
                    }
                    }>
                        <Icon name="cog" size={35} color="#000" style={{ marginLeft: 10, marginTop: 10, width: 30, height: 40 }} />
                    </TouchableOpacity>
                    <Image
                      style={
                      {
                          position: 'absolute', marginTop: 25, marginLeft: 60, width: 150, height: 150, borderRadius: 150
                      }}
                      source={
                      {
                          uri: 'https://avatars3.githubusercontent.com/u/23702215?v=3&s=460'
                      }}
                      />
                </View>
                <View>
                    <DrawerMenuElement onPressFunc={() => {
                        if (this.state.active !== 'ReactWall') {
                            this.props.navigation.navigate('ReactWall');
                        } else {
                            this.props.navigation.navigate('DrawerClose');
                        }
                    }}
                      text="ReactWall" />
                    <DrawerMenuElement onPressFunc={() => {
                        if (this.state.active !== 'ReactMap') {
                            this.props.navigation.navigate('ReactMap');
                        } else {
                            this.props.navigation.navigate('DrawerClose');
                        }
                    }}
                      text="ReactMap" />
                    <DrawerMenuElement onPressFunc={() => {
                        if (this.state.active !== 'BestPractices') {
                            this.props.navigation.navigate('BestPractices');
                        } else {
                            this.props.navigation.navigate('DrawerClose');
                        }
                    }}
                      text="BestPractices" />
                    <DrawerMenuElement onPressFunc={() => {
                        if (this.state.active !== 'Tutorials') {
                            this.props.navigation.navigate('Tutorials');
                        } else {
                            this.props.navigation.navigate('DrawerClose');
                        }
                    }}
                      text="Tutorials" />
                    <DrawerMenuElement onPressFunc={() => {
                        if (this.state.active !== 'Articles') {
                            this.props.navigation.navigate('Articles');
                        } else {
                            this.props.navigation.navigate('DrawerClose');
                        }
                    }}
                      text="Articles" />
                    <DrawerMenuElement onPressFunc={() => {
                        if (this.state.active !== 'Events') {
                            this.props.navigation.navigate('Events');
                        } else {
                            this.props.navigation.navigate('DrawerClose');
                        }
                    }}
                      text="Events" />
                </View>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#B38381'
    },
    touch: {
        borderTopWidth: 1,
        borderColor: '#8A8A8A'
    },
    touchLast: {
        borderBottomWidth: 1,
        borderColor: '#8A8A8A'
    },
    text: {
        marginLeft: 25,
        fontSize: 20
    },
    userIco: {
        height: 200
    },
    header: {
        backgroundColor: '#B38381'
    },
    instructions: {
        textAlign: 'center',
        color: '#333333',
        marginBottom: 5
    },
    settingsIco: {
        width: 45
    }
});
