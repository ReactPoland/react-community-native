import { DrawerNavigator, StackNavigator } from 'react-navigation';
import { Dimensions } from 'react-native';
import DrawerMenu from './drawerMenu';
import ReactWall from './routes/reactWall/';
import ReactMap from './routes/reactMap/';
import Settings from './routes/settings/';

const window = Dimensions.get('window');
// here add sceen for navigation
const stackNavigator = StackNavigator({
    ReactWall: { screen: ReactWall },
    ReactMap: { screen: ReactMap },
    Settings: { screen: Settings }
}, {
    headerMode: 'none'
});
const drawerNavigator = DrawerNavigator({
    Home: { screen: ReactWall },
    Stack: { screen: stackNavigator }
}, {
    contentComponent: DrawerMenu,
    contentOptions: {
        inactiveTintColor: '#e91e63'
    },
    drawerWidth: (2 / 3 * window.width)
});
export default drawerNavigator;
