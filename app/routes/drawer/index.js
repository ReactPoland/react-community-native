import DrawerScene from './drawerScene';
import { DrawerNavigator, StackNavigator } from 'react-navigation'
import DrawerMenu from './drawerMenu'
import ReactWall from '../reactWall/'
import ReactMap from '../reactMap/'

// here add sceen for navigation
const stackNavigator = StackNavigator({
  ReactWall: { screen: ReactWall },
  ReactMap: { screen: ReactMap },
}, {
  headerMode: 'none'
})
const drawerNavigator = DrawerNavigator({
  Home: { screen: ReactWall },
  Stack: { screen: stackNavigator }
}, {
  contentComponent: DrawerMenu,
  contentOptions: {
    inactiveTintColor: '#e91e63'
  }
})
export default drawerNavigator;
