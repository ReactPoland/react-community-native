import { StackNavigator } from 'react-navigation';
import LoginScreen from './login';
import DrawerScreen from './drawer';
import WebViewScreen from './webView';

const MainAppStack = StackNavigator({
    Login: {
        screen: LoginScreen,
        path: 'login'
    },
    Drawer: {
        screen: DrawerScreen,
        path: 'drawer'
    },
    WebView: {
        screen: WebViewScreen,
        path: 'webView'
    }
}, {
    headerMode: 'none'
});

export default MainAppStack;
