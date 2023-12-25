import React, { useState } from 'react';
import { StyleSheet, View, Text, TextInput, TouchableOpacity } from 'react-native';

const wordBank = {
  Angleščina: ['apple', 'banana', 'orange', 'grape'],
  Nemščina: ['apfel', 'banane', 'orange', 'traube'],
  Španščina: ['manzana', 'plátano', 'naranja', 'uva'],
  Francoščina: ['pomme', 'banane', 'orange', 'raisin'],
  Slovenščina: ['jabolka', 'banana', 'pomaranča', 'grozdje'],
};

export default function ExercisesScreen({ route }) {
  const { selectedLanguage } = route.params;
  const [currentWordIndex, setCurrentWordIndex] = useState(0);
  const [userInput, setUserInput] = useState('');
  const [feedback, setFeedback] = useState('');

  const wordsForSelectedLanguage = wordBank[selectedLanguage.name];
  const slovenianWords = wordBank['Slovenščina'];

  const currentWord = wordsForSelectedLanguage[currentWordIndex];
  const correspondingSlovenianWord = slovenianWords[currentWordIndex];

  const handleNextWord = () => {
    const newIndex = (currentWordIndex + 1) % wordsForSelectedLanguage.length;
    setCurrentWordIndex(newIndex);
    setUserInput('');
    setFeedback('');
  };

  const handleGuess = () => {
    if (userInput.toLowerCase() === correspondingSlovenianWord.toLowerCase()) {
      setFeedback('Correct!');
    } else {
      setFeedback('Try again!');
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.header}>Exercises</Text>
      <Text>{currentWord}</Text>
      <TextInput
        style={styles.input}
        onChangeText={(text) => setUserInput(text)}
        value={userInput}
        placeholder="Enter your guess"
      />
      <TouchableOpacity style={styles.button} onPress={handleGuess}>
        <Text style={styles.buttonText}>Guess</Text>
      </TouchableOpacity>
      <Text>{feedback}</Text>
      <TouchableOpacity style={styles.nextButton} onPress={handleNextWord}>
        <Text style={styles.buttonText}>Next</Text>
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
  input: {
    height: 40,
    width: 200,
    borderColor: 'gray',
    borderWidth: 1,
    marginBottom: 10,
    paddingHorizontal: 10,
  },
  button: {
    backgroundColor: '#4287f5',
    paddingHorizontal: 20,
    paddingVertical: 15,
    borderRadius: 8,
    marginTop: 15,
  },
  nextButton: {
    backgroundColor: '#34eb6e',
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
