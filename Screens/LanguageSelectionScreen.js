import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View,TouchableOpacity } from 'react-native';

const languages = [
  { id: 1, name: 'Francoščina', url: 'https://www.youtube.com/watch?v=9q7nx6kzvD0' },
  { id: 2, name: 'Angleščina', url: 'https://www.youtube.com/watch?v=QXVzmzhxWWc' },
  { id: 3, name: 'Nemščina', url: 'https://www.youtube.com/watch?v=6Ka_3Rq8JZ4' },
  { id: 4, name: 'Španščina', url: 'https://www.youtube.com/watch?v=qE-03EATjho' },
];

export default function LanguageSelectionScreen({ navigation }) {
  const handleLanguageSelection = (language) => {
    const selectedLanguage = languages.find((lang) => lang.name === language.name);
    navigation.navigate('Home', { selectedLanguage });
  };
  return (
    
      <View style={styles.container}>
        <Text style={styles.header}>Dobrodošli v DuoLingu!</Text>
        <View style={styles.languageContainer}>
          <Text style={styles.jezikText}>Izberite Jezik!</Text>
          <TouchableOpacity
          style={styles.languageButton}
          onPress={() => handleLanguageSelection({ id: 1, name: 'Francoščina' })}
        >
          <Text style={styles.languageButtonText}>Francoščina</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.languageButton}
          onPress={() => handleLanguageSelection({ id: 2, name: 'Angleščina' })}
        >
          <Text style={styles.languageButtonText}>Angleščina</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.languageButton}
          onPress={() => handleLanguageSelection({ id: 3, name: 'Nemščina' })}
        >
          <Text style={styles.languageButtonText}>Nemščina</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.languageButton}
          onPress={() => handleLanguageSelection({ id: 4, name: 'Španščina' })}
        >
          <Text style={styles.languageButtonText}>Španščina</Text>
        </TouchableOpacity>
        </View>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f5f5f5',
    alignItems: 'center',
    justifyContent: 'center',
  },
  header: {
    fontWeight: 'bold',
    fontSize: 40,
    marginBottom: 30,
    color: '#333',
  },
  jezikText: {
    marginBottom: 20,
    fontWeight: 'bold',
    fontSize: 24,
    textAlign: 'center',
    color: '#444',
  },
  languageContainer: {
    borderWidth: 2,
    borderRadius: 10,
    borderColor: '#ddd',
    width: 300,
    padding: 20,
    backgroundColor: '#fff',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 3,
    },
    shadowOpacity: 0.27,
    shadowRadius: 4.65,
    elevation: 6,
  },
  languageButton: {
    marginBottom: 10,
    borderRadius: 8,
    paddingVertical: 12,
    paddingHorizontal: 20,
    backgroundColor: '#4287f5',
    alignItems: 'center',
  },
  languageButtonText: {
    fontSize: 16,
    fontWeight: 'bold',
    textAlign: 'center',
    color: '#fff',
  },
});
