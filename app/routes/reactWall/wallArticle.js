import React, { Component } from 'react'
import { View, Text, StyleSheet, Dimensions } from 'react-native'

const window = Dimensions.get('window');
class WallArticle extends Component {
    render () {
        return (
            <View style={styles.container}>
              <Text style={styles.titleStyle}>TITLE</Text>
              <View style={styles.articleContent}>
                <View style={styles.titleLine}></View>
                <Text style={styles.articleTextStyle}> Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec mattis pretium massa. Aliquam erat volutpat. Nulla facilisi.
                  Donec vulputate interdum sollicitudin. Nunc
                  lacinia auctor quam sed pellentesque. Aliquam dui mauris, mattis quis lacus id, pellentesque lobortis odio.
                </Text>
              </View>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        marginTop: 10,
        height: 250,
        width: window.width-20,
        backgroundColor: '#EBEBEB'
    },
    titleStyle: {
        fontWeight: '400',
        fontSize: 20,
        color: 'black',
        textAlign: 'center',
        margin: 10
    },
    titleLine: {
        borderBottomWidth: 1,
        color: 'black',
        borderColor: '#000000',
    },
    articleContent: {
        marginLeft: 20,
        marginRight: 20,
    },
    articleTextStyle: {
      marginTop: 10,
      fontWeight: '300',
      textAlign: 'left',
      color: 'black',
      fontSize: 17,
    },

});

export default WallArticle;
