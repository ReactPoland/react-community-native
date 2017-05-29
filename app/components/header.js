import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Toolbar } from 'react-native-material-ui';

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
        marginLeft: 90
    }
};
Header.propTypes = {
    navigatorLeft: PropTypes.func,
    title: PropTypes.string
};

export default Header;
