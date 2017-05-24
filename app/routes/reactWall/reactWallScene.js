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
const productArray = [];
class reactWallSceen extends Component {
    constructor(props) {
      super(props)
      const dataSource = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});
      this.state = {
        dataSource: dataSource.cloneWithRows(productArray),

      }
    }

    componentWillMount(){
      Articles.getRovers().then((res) => {
        productArray = res
        console.log('product', productArray)
        this.setState({
          dataSource:this.state.dataSource.cloneWithRows(productArray),
          isLoading:false
        })
      })
    }

    render () {

        console.log('articles', this.state.articles)
        return (
          <ThemeProvider uiTheme={uiTheme}>
            <Container>
              <Toolbar
                leftElement="menu"
                onLeftElementPress={() => this.props.navigation.navigate('DrawerOpen')}
                centerElement="ReactWall"
              />
              <View style={styles.container}>
                <ListView dataSource={this.state.dataSource}
                   renderRow={(rowData) => <WallArticle />} />
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
