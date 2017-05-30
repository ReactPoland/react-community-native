import { StackNavigator } from 'react-navigation';
import LoginScreen from './login';
import DrawerScreen from './drawer';
import WebViewScreen from './webView';

const MainAppStack = StackNavigator({
    Drawer: {
        screen: DrawerScreen,
        path: 'drawer'
    },
    Login: {
        screen: LoginScreen,
        path: 'login'
    },
    WebView: {
        screen: WebViewScreen,
        path: 'webView'
    }
}, {
    headerMode: 'none'
});

export default MainAppStack;
