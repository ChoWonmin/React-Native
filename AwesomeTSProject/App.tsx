/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * Generated with the TypeScript template
 * https://github.com/react-native-community/react-native-template-typescript
 *
 * @format
 */
import {createAppContainer} from 'react-navigation';
import {createStackNavigator} from '@react-navigation/stack';

import type Home from './src/view/Home';
import type Profile from './src/view/Profile';

type RootStackParamList = {
  Home: undefined;
  Profile: {userId: string};
  Feed: {sort: 'latest' | 'top'} | undefined;
};

const RootStack = createStackNavigator<RootStackParamList>();

<RootStack.Navigator initialRouteName="Home">
  <RootStack.Screen name="Home" component={Home} />
  <RootStack.Screen
    name="Profile"
    component={Profile}
    initialParams={{userId: user.id}}
  />
  <RootStack.Screen name="Feed" component={Feed} />
</RootStack.Navigator>;

export default createAppContainer(AppNavigator);
