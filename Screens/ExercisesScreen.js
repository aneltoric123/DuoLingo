import React, { useState } from 'react';

import { StyleSheet, View, Text, TextInput, TouchableOpacity } from 'react-native';

const initialWordBank = {
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
  const [wordBank, setWordBank] = useState(initialWordBank);

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

  const [showAddWordPopup, setShowAddWordPopup] = useState(false);
  const [newWordSelectedLanguage, setNewWordSelectedLanguage] = useState('');
  const [newWordSlovenian, setNewWordSlovenian] = useState('');

  const handleAddWord = () => {
    const updatedWordBank = {
      ...wordBank,
      [selectedLanguage.name]: [...wordsForSelectedLanguage, newWordSelectedLanguage],
      Slovenščina: [...slovenianWords, newWordSlovenian],
    };

    setWordBank(updatedWordBank);
    setNewWordSelectedLanguage('');
    setNewWordSlovenian('');
    setShowAddWordPopup(false);
  };

  const handleClosePopup = () => {
    setShowAddWordPopup(false);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.header}>Vaje</Text>
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

      {/* Popup for adding a new word */}
      {showAddWordPopup && (
        <View style={styles.popup}>
          <TouchableOpacity style={styles.closeButton} onPress={handleClosePopup}>
            <Text style={styles.closeButtonText}>X</Text>
          </TouchableOpacity>
          <Text style={styles.header}>Dodaj novo besedo</Text>
          <TextInput
            style={styles.input}
            onChangeText={(text) => setNewWordSelectedLanguage(text)}
            value={newWordSelectedLanguage}
            placeholder={`Nova ${selectedLanguage.name} beseda`}
          />
          <TextInput
            style={styles.input}
            onChangeText={(text) => setNewWordSlovenian(text)}
            value={newWordSlovenian}
            placeholder="Slovenski prevod"
          />
          <TouchableOpacity style={styles.button} onPress={handleAddWord}>
            <Text style={styles.buttonText}>Dodaj Besedo</Text>
          </TouchableOpacity>
        </View>
      )}

      {/* Button to toggle the add word popup */}
      {!showAddWordPopup && (
        <TouchableOpacity
          style={styles.addButton}
          onPress={() => setShowAddWordPopup(!showAddWordPopup)}
        >
          <Text style={styles.buttonText}>Dodaj novo besedo</Text>
        </TouchableOpacity>
      )}
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
  popup: {
    position: 'absolute',
    top: '30%',
    left: '10%',
    width: '80%',
    backgroundColor: '#fff',
    padding: 20,
    borderRadius: 10,
    elevation: 5,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
  },
  addButton: {
    backgroundColor: '#34eb6e',
    paddingHorizontal: 20,
    paddingVertical: 15,
    borderRadius: 8,
    marginTop: 15,
  },
  closeButton: {
    position: 'absolute',
    top: 5,
    right: 5,
    padding: 5,
  },
  closeButtonText: {
    fontSize: 18,
    fontWeight: 'bold',
  },
});
