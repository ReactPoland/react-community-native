import { StackNavigator } from 'react-navigation';
import LoginScreen from './login';
import DrawerScreen from './drawer';
import WebViewScreen from './webView';

const MainAppStack = StackNavigator({
    Drawer: {
        screen: DrawerScreen,
        path: 'drawer'
    },
    WebView: {
      screen: WebViewScreen,
      path: 'webView'
    },
    Login: {
        screen: LoginScreen,
        path: 'login'
    },
}, {
    headerMode: 'none'
});

export default MainAppStack;
