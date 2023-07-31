/**
 * @format
 */

import { AppRegistry, Text } from 'react-native';
import { name as appName } from './app.json';
import WelcomeScreen from './screens/WelcomeScreen';

AppRegistry.registerComponent(appName, () => () => {
    const welcomeData = { name: "John" };
    return <WelcomeScreen {...welcomeData} />
});
