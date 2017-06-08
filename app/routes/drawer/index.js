import { DrawerNavigator } from 'react-navigation';
import { Dimensions } from 'react-native';
import DrawerMenu from './drawerMenu';
import ReactWall from '../reactWall/';
import ReactMap from './routes/reactMap/';
import Settings from './routes/settings/';
import Articles from './routes/articles/';
import BestPractices from './routes/bestPractices/';
import Events from './routes/events/';
import Tutorials from './routes/tutorials/';

const window = Dimensions.get('window');

const drawerNavigator = DrawerNavigator({
    ReactWall: { screen: ReactWall },
    ReactMap: { screen: ReactMap },
    Settings: { screen: Settings },
    Articles: { screen: Articles },
    BestPractices: { screen: BestPractices },
    Events: { screen: Events },
    Tutorials: { screen: Tutorials }
}, {
    contentComponent: DrawerMenu,
    contentOptions: {
        inactiveTintColor: '#e91e63'
    },
    headerMode: 'none',
    drawerWidth: (2 / 3 * window.width)
});

export default drawerNavigator;
