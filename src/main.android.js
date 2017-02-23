import { UIManager, AppRegistry } from 'react-native';

import Main from './main.native';

UIManager.setLayoutAnimationEnabledExperimental(true);
AppRegistry.registerComponent('reactToEverything', () => Main);
