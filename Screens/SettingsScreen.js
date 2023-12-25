// SettingsScreen.js
import React, { useState } from 'react';
import { View, Switch, Text, TouchableOpacity } from 'react-native';

export default function SettingsScreen({ navigation }) {
  const changeLanguage = () => {
    navigation.navigate('LanguageSelection');
  };

  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text style={{ marginBottom: 20 }}>Settings Screen</Text>

      <TouchableOpacity
        onPress={changeLanguage}
        style={{
          backgroundColor: '#4287f5',
          paddingHorizontal: 20,
          paddingVertical: 15,
          borderRadius: 8,
        }}
      >
        <Text style={{ color: 'white' }}>Change Language</Text>
      </TouchableOpacity>

      <View style={{ marginTop: 30 }}>
        <Text>Other Settings or Information:</Text>
        {/* Add more Text or components here */}
      </View>
    </View>
  );
}
