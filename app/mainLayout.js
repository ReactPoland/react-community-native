import React, { Component } from 'react';
import { View, StatusBar } from 'react-native';
import Root from './routes/root';

class MainLayout extends Component {
    render () {
        return (
            <View style={{ flex: 1 }}>
                <StatusBar barStyle={'default'} />
                <Root />
            </View>
        );
    }
}

export default MainLayout;
