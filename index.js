/**
 * @format
 */

import {AppRegistry} from 'react-native';
import App from './App';
import {name as appName} from './app.json';
//解决app 出现闪退现象
import 'react-native-gesture-handler';
import Icon from 'react-native-vector-icons/FontAwesome';
Icon.loadFont();
//关闭⚠️警告
console.disableYellowBox = true;
AppRegistry.registerComponent(appName, () => App);
