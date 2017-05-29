import React, { Component } from 'react';
import { Toolbar } from 'react-native-material-ui';

class header extends Component {
    render () {
        return (
            <Toolbar style={toolbarStyle}
              leftElement='arrow'
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
      backgroundColor: '#bababa',
    },
    leftElement: {
      color: 'black'
    },
    titleText: {
      color: 'black',
      marginLeft: 90,
    }
}

export default header;
