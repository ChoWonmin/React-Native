import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';

import HomeScreen from './screens/HomeScreen';
import PostScreen from './screens/PostScreen';
import StackScreen from './screens/StackScreen';
import ComponetScreen from './screens/ComponetScreen';

const Stack = createStackNavigator();

function MyStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Componet" component={ComponetScreen} />
      <Stack.Screen name="Stack" component={StackScreen} />
      <Stack.Screen name="Home" component={HomeScreen} />
      <Stack.Screen name="Post" component={PostScreen} />
    </Stack.Navigator>
  );
}

export default function App() {
  return (
    <NavigationContainer>
      <MyStack />
    </NavigationContainer>
  );
}
