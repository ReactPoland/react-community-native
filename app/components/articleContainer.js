import React, { Component, PropTypes } from 'react';
import { View, Text, StyleSheet, Dimensions, TouchableWithoutFeedback } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
const myIcon = (<Icon name="external-link" size={20} color="black" />);
const window = Dimensions.get('window');
const content = null;
class WallArticle extends Component {
    static propTypes = {
        data: PropTypes.oneOfType([
            PropTypes.string,
            PropTypes.object
        ])
    };
    render () {
        const { title, text } = this.props.data;
        return (
            <View style={styles.containerForArticle}>
                <Text numberOfLines={1} style={styles.titleTextStyle}>{title}</Text>
                <View style={styles.containerForArticleText}>
                    <View style={styles.lineUnderTitle} />
                    <Text numberOfLines={7} style={styles.articleTextStyle}>{content}
                        {text}
                    </Text>
                    <View style={styles.positionWebViewElement}>
                        <View style={styles.webViewElementLine} />
                        <TouchableWithoutFeedback><View><Text style={styles.webSiteTextStyle}>{myIcon}  Website</Text></View></TouchableWithoutFeedback>
                        <View style={styles.webViewElementLine} />
                    </View>
                </View>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    containerForArticle: {
        marginTop: 10,
        height: 270,
        width: window.width - 20,
        backgroundColor: '#EEE'
    },
    titleTextStyle: {
        fontWeight: '400',
        fontSize: 20,
        color: 'black',
        textAlign: 'center',
        margin: 10
    },
    lineUnderTitle: {
        borderBottomWidth: 1,
        borderColor: '#000'
    },
    containerForArticleText: {
        marginLeft: 20,
        marginRight: 20
    },
    articleTextStyle: {
        marginTop: 10,
        fontWeight: '300',
        textAlign: 'left',
        color: 'black',
        fontSize: 17,
        marginBottom: 10
    },
    webViewElementLine: {
        width: 125,
        marginTop: 5,
        borderTopWidth: 1,
        borderColor: '#000000',
        paddingTop: 5
    },
    positionWebViewElement: {
        position: 'absolute',
        marginTop: 165
    },
    webSiteTextStyle: {
        marginLeft: 10,
        fontSize: 20,
        color: 'black'
    }
});

export default WallArticle;
