import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Linking } from 'react-native';

export default function LecturesScreen({ route }) {
  const { selectedLanguage } = route.params;
  const { url } = selectedLanguage;

  const openVideoLink = () => {
    if (url) {
      Linking.openURL(url);
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.header}>{`${selectedLanguage.name} lekcija`}</Text>
      <TouchableOpacity onPress={openVideoLink} style={styles.button}>
        <Text style={styles.buttonText}>Gledaj lekcijo na Youtube!</Text>
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
  },
  buttonText: {
    color: '#fff',
    fontSize: 18,
  },
});
