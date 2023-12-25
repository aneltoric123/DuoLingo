// App.js

import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import LanguageSelectionScreen from './Screens/LanguageSelectionScreen';
import HomeScreen from './Screens/HomeScreen';
import LecturesScreen from './Screens/LecturesScreen';
import ExercisesScreen from './Screens/ExercisesScreen.js';
import SettingsScreen from './Screens/SettingsScreen.js';



const Stack = createStackNavigator();

export default function App() {
  return (
    <DarkModeProvider>
    <NavigationContainer>
      <Stack.Navigator initialRouteName="LanguageSelection">
        <Stack.Screen name="LanguageSelection" component={LanguageSelectionScreen} />
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="Lectures" component={LecturesScreen} />
        <Stack.Screen name="Exercises" component={ExercisesScreen} />
  <Stack.Screen name="Settings" component={SettingsScreen} />
        
        

      </Stack.Navigator>
    </NavigationContainer>
    </DarkModeProvider>
  );
}
