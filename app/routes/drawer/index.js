import DrawerScene from './drawerScene';
import { DrawerNavigator } from 'react-navigation'
import DrawerMenu from './drawerMenu'


const drawerNavigator = DrawerNavigator({
  Home: { screen: DrawerScene }
}, {
  contentComponent: DrawerMenu
})


export default drawerNavigator;
