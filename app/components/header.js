import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Toolbar } from 'react-native-material-ui';
import { Dimensions } from 'react-native';
const window = Dimensions.get('window');

class Header extends Component {
    render () {
        return (
            <Toolbar style={toolbarStyle}
              leftElement="menu"
              onLeftElementPress={this.props.navigatorLeft}
              centerElement={this.props.title}
            />
        );
    }
}
const toolbarStyle = {
    container: {
        height: 70,
        paddingTop: 20,
        backgroundColor: '#bababa'
    },
    leftElement: {
        color: 'black'
    },
    titleText: {
        color: 'black',
        marginTop: 20
    },
    centerElementContainer:
    {
        position: 'absolute',
        height: 80,
        width: window.width - 2 / 8 * window.width,
        marginLeft: 1 / 8 * window.width,
        marginRight: 1 / 8 * window.width,
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    }
};
Header.propTypes = {
    navigatorLeft: PropTypes.func,
    title: PropTypes.string
};

export default Header;
