import { StackNavigator } from 'react-navigation';
import LoginScreen from './login';
import DrawerScreen from './drawer';
import WebViewScreen from './webView';

const MainAppStack = StackNavigator({
    WebView: {
      screen: WebViewScreen,
      path: 'webView'
    },
    Drawer: {
      screen: DrawerScreen,
      path: 'drawer'
    },
    Login: {
        screen: LoginScreen,
        path: 'login'
    },
}, {
    headerMode: 'none'
});

export default MainAppStack;
