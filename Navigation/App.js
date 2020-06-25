import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import {SafeAreaProvider} from 'react-native-safe-area-context';

import HomeScreen from './screens/HomeScreen';
import PostScreen from './screens/PostScreen';
import StackScreen from './screens/StackScreen';
import ComponetScreen from './screens/ComponetScreen';
import RoomScreen from './screens/RoomScreen';

const Stack = createStackNavigator();

function MyStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Room" component={RoomScreen} />
      <Stack.Screen name="Home" component={HomeScreen} />
      <Stack.Screen name="Post" component={PostScreen} />

      <Stack.Screen name="Componet" component={ComponetScreen} />
      <Stack.Screen name="Stack" component={StackScreen} />
    </Stack.Navigator>
  );
}

export default function App() {
  return (
    <SafeAreaProvider>
      <NavigationContainer>
        <MyStack />
      </NavigationContainer>
    </SafeAreaProvider>
  );
}
