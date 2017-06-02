import { DrawerNavigator, StackNavigator } from 'react-navigation';
import { Dimensions } from 'react-native';
<<<<<<< HEAD
import DrawerMenu from './drawerMenu'
import ReactWall from '../reactWall/'
import ReactMap from '../reactMap/'
import Settings from '../settings/'
import Articles from '../articles/'
import Events from '../events/'
import Tutorials from '../tutorials'
import BestPractices from '../bestPractices'
=======
import DrawerMenu from './drawerMenu';
import ReactWall from '../reactWall/';
import ReactMap from './routes/reactMap/';
import Settings from './routes/settings/';
import Articles from './routes/articles/';
import BestPractices from './routes/bestPractices/';
import Events from './routes/events/';
import Tutorials from './routes/tutorials/';
>>>>>>> RCN-2

const window = Dimensions.get('window');
// here add sceen for navigation
const stackNavigator = StackNavigator({
<<<<<<< HEAD
  ReactWall: { screen: ReactWall },
  ReactMap: { screen: ReactMap },
  Settings: { screen: Settings },
  Articles: { screen: Articles },
  Events: { screen: Events },
  Tutorials: { screen: Tutorials },
  BestPractices: { screen: BestPractices },
=======
    ReactWall: { screen: ReactWall },
    ReactMap: { screen: ReactMap },
    Settings: { screen: Settings },
    Articles: { screen: Articles },
    BestPractices: { screen: BestPractices },
    Events: { screen: Events },
    Tutorials: { screen: Tutorials }
>>>>>>> RCN-2
}, {
    headerMode: 'none',
    transitionConfig: () => ({
        screenInterpolator: sceneProps => {}
    })
});
const drawerNavigator = DrawerNavigator({
    Home: { screen: ReactWall },
    Stack: { screen: stackNavigator }
}, {
    contentComponent: DrawerMenu,
    contentOptions: {
        inactiveTintColor: '#e91e63'
    },
    headerMode: 'none',
    drawerWidth: (2 / 3 * window.width)
});

export default drawerNavigator;
