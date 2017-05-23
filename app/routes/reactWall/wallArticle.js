import React, { Component } from 'react'
import { View, Text, StyleSheet, Dimensions } from 'react-native'

const window = Dimensions.get('window');
class WallArticle extends Component {
    render () {
        return (
            <View style={styles.container}>
              <Text style={styles.titleStyle}>TITLE</Text>
              <View style={styles.titleLine}></View>
              <Text> Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec mattis pretium massa. Aliquam erat volutpat. Nulla facilisi.
                Donec vulputate interdum sollicitudin. Nunc
                lacinia auctor quam sed pellentesque. Aliquam dui mauris, mattis quis lacus id, pellentesque lobortis odio.
              </Text>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        marginTop: 10,
        height: 250,
        width: window.width-20,
        backgroundColor: '#bababa'
    },
    titleStyle: {
        fontSize: 20,
        textAlign: 'center',
        margin: 10
    },
    titleLine: {
        marginLeft: 15,
        marginRight: 15,
        borderBottomWidth: 1,
        borderColor: '#000000',
    }
});

export default WallArticle;
