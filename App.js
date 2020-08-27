import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator }from '@react-navigation/stack';

import HomeScreen from './screens/HomeScreen'
import UserScreen from './screens/UserScreen'
import AboutScreen from './screens/AboutScreen'

const Stack = createStackNavigator();

const App = () => {
  return(
    <NavigationContainer>
      <Stack.Navigator>       
        <Stack.Screen 
          name='Home' 
          component={HomeScreen}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name='User'
          component={UserScreen}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name='About'
          component={AboutScreen}
          options={{headerShown: false}}
        />
      </Stack.Navigator>
    </NavigationContainer> 
  );  
}
export default App;