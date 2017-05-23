import DrawerScene from './drawerScene';
import { DrawerNavigator, StackNavigator } from 'react-navigation'
import { Dimensions } from 'react-native';
import DrawerMenu from './drawerMenu'
import ReactWall from '../reactWall/'
import ReactMap from '../reactMap/'
import Settings from '../settings/'
import Articles from '../articles/'
import Events from '../events/'
import Tutorials from '../tutorials'
import BestPractices from '../bestPractices'

const window = Dimensions.get('window');
// here add sceen for navigation
const stackNavigator = StackNavigator({
  ReactWall: { screen: ReactWall },
  ReactMap: { screen: ReactMap },
  Settings: { screen: Settings },
  Articles: { screen: Articles },
  Events: { screen: Events },
  Tutorials: { screen: Tutorials },
  BestPractices: { screen: BestPractices },
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
  },
  drawerWidth: (2/3*window.width),
})
export default drawerNavigator;
