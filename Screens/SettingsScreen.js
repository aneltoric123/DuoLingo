// SettingsScreen.js
import React, { useState } from 'react';
import { View, Switch, Text, TouchableOpacity } from 'react-native';
import { DarkModeContext } from '../darkmodecontext';
export default function SettingsScreen({ navigation }) {
  const {isDarkMode, toggleDarkMode } = useContext(DarkModeContext);

    const changeLanguage = () => {
      navigation.navigate('LanguageSelection');
    };

  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>Dark Mode</Text>
      <Switch value={isDarkMode} onValueChange={toggleDarkMode} />

      <TouchableOpacity onPress={changeLanguage} style={{backgroundColor: '#4287f5',
    paddingHorizontal: 20,
    paddingVertical: 15,
    borderRadius: 8,
    marginTop: 15, }}>
        <Text>Change Language</Text>
      </TouchableOpacity>
    </View>
  );
}


