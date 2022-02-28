/**
 * Sample React Native App Only Stack Navigation between screens
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import {useColorScheme} from 'react-native';

import 'react-native-gesture-handler';
import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import SplashScreen from './src/screens/SplashScreen';
import Home from './src/screens/Home';

const Stack = createNativeStackNavigator();

const App = () => {
  const isDarkMode = useColorScheme() === 'dark';
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Welcome"
          component={SplashScreen}
          options={{title: 'Welcome'}}
        />
        <Stack.Screen
          name="Home"
          component={Home}
          options={{title: 'Home Page'}}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
