import SettingsScene from './routes/settingsScene/';
import GeneralAppInfo from './routes/generalAppInfo/';
import UserInfo from './routes/userInfo/';
import { StackNavigator } from 'react-navigation';

const SettingsStackScene = StackNavigator({
    Home: {
        screen: SettingsScene,
        path: 'drawer'
    },
    General: {
        screen: GeneralAppInfo,
        path: 'general'
    },
    UserInfo: {
        screen: UserInfo,
        path: 'general'
    }
}, { headerMode: 'none' });

export default SettingsStackScene;
