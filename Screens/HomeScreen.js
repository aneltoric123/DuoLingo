import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';

export default function HomeScreen({ navigation, route }) {
  const { selectedLanguage } = route.params;
  console.log('Selected Language in HomeScreen:', selectedLanguage);

  const handleNavigation = (screenName) => {
    navigation.navigate(screenName, { selectedLanguage });
  };


  return (
    <View style={styles.container}>
      <Text style={styles.header}> Vi ste izbrali: {selectedLanguage.name}</Text>
     
      <TouchableOpacity
        style={styles.button}
        onPress={() => handleNavigation('Lectures')}
      >
        <Text style={styles.buttonText}>Lectures</Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={styles.button}
        onPress={() => handleNavigation('Exercises')}
      >
        <Text style={styles.buttonText}>Exercises</Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={styles.button}
        onPress={() => handleNavigation('Settings')}
      >
        <Text style={styles.buttonText}>Settings</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#f5f5f5',
  },
  header: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  button: {
    backgroundColor: '#4287f5',
    paddingHorizontal: 20,
    paddingVertical: 15,
    borderRadius: 8,
    marginTop: 15,
  },
  buttonText: {
    color: '#fff',
    fontSize: 18,
  },
});
