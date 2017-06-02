import React, { Component, PropTypes } from 'react';
import {
    StyleSheet,
    StatusBar,
    View,
    Image,
    TouchableOpacity
} from 'react-native';
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
            <View>
                <StatusBar translucent />
                <View style={{ marginTop: 20 }} />
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
                              osition: 'absolute', marginTop: 25, marginLeft: 60, width: 150, height: 150, borderRadius: 150
                          }}
                          source={
                          {
                              uri: 'https://avatars3.githubusercontent.com/u/23702215?v=3&s=460'
                          }}
                          />
                    </View>
                </View>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1
    },
    userIco: {
        height: 200
    },
    header: {
        backgroundColor: '#B38381'
    },
    welcome: {
        fontSize: 20,
        textAlign: 'center',
        margin: 10
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
