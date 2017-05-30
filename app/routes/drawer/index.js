import { DrawerNavigator, StackNavigator } from 'react-navigation';
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
// here add sceen for navigation
const stackNavigator = StackNavigator({
    ReactWall: { screen: ReactWall },
    ReactMap: { screen: ReactMap },
    Settings: { screen: Settings },
    Articles: { screen: Articles },
    BestPractices: { screen: BestPractices },
    Events: { screen: Events },
    Tutorials: { screen: Tutorials }
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
    drawerWidth: (2 / 3 * window.width),
    transitionConfig: () => ({
        screenInterpolator: sceneProps => {
            const { layout, position, scene } = sceneProps;
            const { index } = scene;

            const translateX = position.interpolate({
                inputRange: [index - 1, index, index + 1],
                outputRange: [layout.initWidth, 0, 0]
            });

            const opacity = position.interpolate({
                inputRange: [index - 1, index - 0.99, index, index + 0.99, index + 1],
                outputRange: [0, 1, 1, 0.3, 0]
            });

            return { opacity, transform: [{ translateX }] }
        }
    })
});

export default drawerNavigator;
