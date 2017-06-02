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
    constructor (props, contextStyle) {
        super(props, contextStyle);
        this.state = {
            drawerElements: ['ReactWall', 'ReactMap', 'BestPractices', 'Tutorials', 'Articles', 'Events'],
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
                    <TouchableOpacity style={styles.settingIco} onPress={() => {
                        this.setState({ active: 'Settings' });
                        this.props.navigation.navigate('Settings');
                    }
                    }>
                        <Icon name="cog" size={35} color="#000" style={styles.cogStyle} />
                    </TouchableOpacity>
                    <Image
                      style={styles.gitImg}
                      source={
                      {
                          uri: 'https://avatars3.githubusercontent.com/u/23702215?v=3&s=460'
                      }}
                      />
                </View>
                <View>
                    {this.state.drawerElements.map((item, i) => {
                        return <DrawerMenuElement key={i} onPressFunc={() => {
                            if (this.state.active !== item) {
                                this.props.navigation.navigate(item);
                                this.setState({ active: item });
                            } else {
                                this.props.navigation.navigate('DrawerClose');
                            }
                        }}
                          text={item} />;
                    })}
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
    textStyle: {
        marginLeft: 25,
        fontSize: 20
    },
    cogStyle: {
        marginLeft: 10,
        marginTop: 10,
        width: 30,
        height: 40
    },
    gitImg: {
        position: 'absolute',
        marginTop: 25,
        marginLeft: 60,
        width: 150,
        height: 150,
        borderRadius: 150
    },
    userIco: {
        height: 200
    },
    settingIco: {
        width: 45
    }
});
