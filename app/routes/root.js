import { StackNavigator } from 'react-navigation';
import LoginScreen from './login';
import DrawerScreen from './drawer';
import WebViewScreen from './webView';

const MainAppStack = StackNavigator({
    Drawer: {
<<<<<<< HEAD
      screen: DrawerScreen,
      path: 'drawer'
    },
    WebView: {
      screen: WebViewScreen,
      path: 'webView'
=======
        screen: DrawerScreen,
        path: 'drawer'
>>>>>>> RCN-2
    },
    Login: {
        screen: LoginScreen,
        path: 'login'
    },
}, {
    headerMode: 'none'
});

export default MainAppStack;
