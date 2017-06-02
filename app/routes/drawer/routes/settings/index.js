import SettingsScene from './settingsScene/';
import GeneralAppInfo from './generalAppInfo/';
import UserInfo from './userInfo/';
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
