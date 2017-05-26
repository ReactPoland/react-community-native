import React, { Component } from 'react'
import { View, Text, StyleSheet, ScrollView, ListView, Dimensions } from 'react-native'
import { COLOR, ThemeProvider, Toolbar } from 'react-native-material-ui'
import Container from '../drawer/container'
import WallArticle from './wallArticle'
import Articles from '../../utils/articles'
const window = Dimensions.get('window')
const uiTheme = {
  toolbar: {
    container: {
      height: 80,
      paddingTop: 20,
      backgroundColor: '#EBEBEB',
    },
    leftElement: {
      color: 'black',
      fontSize: 55,
    },
    leftElementContainer: {
      fontSize: 55,
    },
    titleText: {
      marginTop: 20,
      color: 'black',
    },
    centerElementContainer:
    {
      position: 'absolute',
      width: window.width - 160,
      height: 80,
      marginLeft: 80,
      marginRight: 80,
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center'
    },
    leftElementContainer: {
      marginLeft: 5,
    },
  },
};
const productArray = [];
class reactWallSceen extends Component {
    constructor(props) {
      super(props)
      const dataSource = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});
      this.state = {
        dataSource: dataSource.cloneWithRows(productArray),

      }
    }
    onPressWebView = (webViewLink, id) => {
      let link = ""
      webViewLink.some((i, index) => {
        id = parseInt(id)
        if (index === id)
        return link = i
      })
      this.props.navigation.navigate('WebView' , { webViewLink: link })
    }
    componentWillMount(){
      Articles.getRovers().then((res) => {
        productArray = res
        this.setState({
          dataSource:this.state.dataSource.cloneWithRows(productArray),
          isLoading:false
        })
      })
    }

    render () {
      var currentView = (this.state.isLoading)?<View/>:<ListView dataSource={this.state.dataSource}
         renderRow={(rowData, sectionID, rowID) => <WallArticle sectionID={sectionID} rowId={rowID} handleOnPress={this.onPressWebView} data={rowData}/>} />
        return (
          <ThemeProvider uiTheme={uiTheme}>
            <Container>
              <Toolbar
                leftElement="menu"
                onLeftElementPress={() => this.props.navigation.navigate('DrawerOpen')}
                centerElement="ReactWall"
              />
              <View style={styles.container}>
                {currentView}
                <View style={styles.scrollEndLine}/>
              </View>
            </Container>
          </ThemeProvider>
        );
    }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  header: {
    backgroundColor: '#455A64',
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
  scrollEndLine: {
    height: 10,
  }
});

export default reactWallSceen;
