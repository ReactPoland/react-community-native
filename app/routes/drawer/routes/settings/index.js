import SettingsScene from './settingsScene';
import { StackNavigator } from 'react-navigation';
import GeneralAppInfo from './generalAppInfo/';
import UserInfo from './userInfo/';

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
