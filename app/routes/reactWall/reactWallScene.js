import React, { Component } from 'react'
import { View, Text, StyleSheet, ScrollView, ListView } from 'react-native'
import { COLOR, ThemeProvider, Toolbar } from 'react-native-material-ui'
import Container from '../drawer/container'
import WallArticle from './wallArticle'
import Articles from '../../utils/articles'

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
      color: 'black',
      marginLeft: 80,
    },
    leftElementContainer: {
      marginLeft: 5,
    },
  },
};
const articlesArray = [];
class reactWallSceen extends Component {
    constructor(props) {
      super(props)
      const dataSource = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});
      this.state = {
        dataSource: dataSource.cloneWithRows(articlesArray),

      }
    }
    onPressWebView = (webViewLink, id) => {
      const link = webViewLink.find(( el, i) => {
        id = parseInt(id)
         if (id === i) return true
      })
      console.log(link)
      this.props.navigation.navigate('WebView' , { webViewLink: link })
    }
    componentWillMount(){
      Articles.getRovers().then((res) => {
        articlesArray = res
        this.setState({
          dataSource:this.state.dataSource.cloneWithRows(articlesArray),
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
