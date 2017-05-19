import DrawerScene from './drawerScene';
import { DrawerNavigator, StackNavigator } from 'react-navigation'
import DrawerMenu from './drawerMenu'

//here add sceen for navigation
// const stackNavigator = StackNavigator({
//   // ReactWall: { screen: ReactWall },
//   // ReactMap: { screen: ReactMap },
//   // BestPractices: { screen: BestPractices },
//   // Tutorials: { screen: Tutorials },
//   // Articles: { screen: Articles },
// }, {
//   headerMode: 'none'
// })
const drawerNavigator = DrawerNavigator({
  Home: { screen: DrawerScene },
  // Stack: { screen: stackNavigator }
}, {
  contentComponent: DrawerMenu,
  contentOptions: {
    inactiveTintColor: '#e91e63'
  }
})


export default drawerNavigator;
