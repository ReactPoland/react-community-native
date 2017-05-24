import React, { Component } from 'react'
import { View, Text, StyleSheet, Dimensions, TouchableWithoutFeedback } from 'react-native'
import Icon from 'react-native-vector-icons/FontAwesome';
const myIcon = (<Icon name="external-link" size={20} color='black'/>)

const window = Dimensions.get('window');
class WallArticle extends Component {
    render () {
        return (
            <View style={styles.container}>
              <Text numberOfLines={1} style={styles.titleStyle}></Text>
              <View style={styles.articleContent}>
                <View style={styles.titleLine}></View>
                <Text numberOfLines={7} style={styles.articleTextStyle}>
                </Text>
              <View style={styles.webSiteAbsolute}>
                <View style={styles.webSite} />
                  <TouchableWithoutFeedback><View><Text style={styles.webSiteText}>{myIcon}   Website</Text></View></TouchableWithoutFeedback>
                <View style={styles.webSite} />
              </View>
              </View>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        marginTop: 10,
        height: 270,
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
        marginBottom: 10,
    },
    webSite: {
        width: 125,
        marginTop: 5,
        borderTopWidth: 1,
        borderColor: '#000000',
        paddingTop: 5,
    },
    webSiteAbsolute: {
      position: 'absolute',
      marginTop: 165,
    },
    webSiteText: {
        marginLeft: 10,
        fontSize: 20,
        color: 'black'
    }
});

export default WallArticle;
