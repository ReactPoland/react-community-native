import React, { Component } from 'react'
import { View, Text, StyleSheet, Dimensions, TouchableOpacity, StackNavigator } from 'react-native'
import Icon from 'react-native-vector-icons/FontAwesome';
import WebView from '../webView/'
const myIcon = (<Icon name="external-link" size={20} color='black'/>)
const window = Dimensions.get('window');
const content = ""
const data = ""
const linkArray = []
class WallArticle extends Component {
  render () {
        data = this.props.data.title
        if(this.props.data.content){
          content = this.props.data.content.nodes[0].nodes[0].text
          linkArray.push("https://react-community-stage.herokuapp.com/article/" + this.props.data.id + "/" + this.props.data.slug)
        }
        else {
          content = this.props.data.description
          linkArray.push(this.props.data.linkArray)
        }
        return (
            <View style={styles.container}>
              <Text numberOfLines={1} style={styles.titleStyle}>{data}</Text>
              <View style={styles.articleContent}>
                <View style={styles.titleLine}></View>
                <Text numberOfLines={7} style={styles.articleTextStyle}>{content}
                </Text>
              <View style={styles.webSiteAbsolute}>
                <View style={styles.webSite} />
                  <TouchableOpacity onPress={ () =>
                    {
                      this.props.handleOnPress(linkArray, this.props.rowId)
                      linkArray = []
                    }}>
                    <View>
                      <Text style={styles.webSiteText}>{myIcon}   Website</Text>
                    </View>
                  </TouchableOpacity>
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
