
import React from 'react';
import { StyleSheet, View, Text } from 'react-native';

export default function ExercisesScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.header}>Exercises</Text>
    
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
});
