/**
 * @format
 */

import {AppRegistry} from 'react-native';
import App from './App';
import {name as appName} from './app.json';
import {HomeScreen} from './src/modules';

AppRegistry.registerComponent(appName, () => HomeScreen);
