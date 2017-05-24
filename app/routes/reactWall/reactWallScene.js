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

class reactWallSceen extends Component {
    constructor(props) {
      super(props)
      const ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});
      this.state = {
        articles: {},
        dataSource: ds.cloneWithRows([
          {title: 'TITLE', art: 'balbalbalbal'},
          {title: 'TITLE', art: 'testst'},
          {title: 'Lorrrrreeeeeee ippppppppppppppppsummmmmmm', art: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut et mi ut libero venenatis consequat vitae in velit. Maecenas in tristique nibh. Pellentesque diam ex, sodales ac erat ut, ullamcorper scelerisque nunc. Interdum et malesuada fames ac ante ipsum primis in faucibus. Integer laoreet ex vel elit efficitur volutpat. Donec dolor magna, porttitor et massa sit amet, ornare lobortis odio. Suspendisse potenti. Morbi pellentesque ante sit amet tortor pulvinar sodales. Maecenas eu vestibulum ex. Phasellus vitae purus eros. Vestibulum sed erat a orci cursus eleifend.'},
        ])
      }
    }

    componentWillMount(){
      Articles.getRovers().then((res) => {
        this.setState({ articles: res})
      })
    }

    render () {
      console.log("articles: " + this.state.articles)
        return (
          <ThemeProvider uiTheme={uiTheme}>
            <Container>
              <Toolbar
                leftElement="menu"
                onLeftElementPress={() => this.props.navigation.navigate('DrawerOpen')}
                centerElement="ReactWall"
              />
              <View style={styles.container}>
                <ListView
                  dataSource={this.state.dataSource}
                  renderRow={(rowData) => <WallArticle data={rowData}/>}
                />
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
