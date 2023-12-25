// SettingsScreen.js
import React, { useState } from 'react';
import { View, Switch, Text, TouchableOpacity, Modal, StyleSheet } from 'react-native';

export default function SettingsScreen({ navigation }) {
  const [isModalVisible, setIsModalVisible] = useState(false);

  const changeLanguage = () => {
    navigation.navigate('LanguageSelection');
  };

  const aboutText = "Duolingo is an amazing app! :)"; // Replace with your about text

  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <TouchableOpacity onPress={changeLanguage} style={styles.button}>
        <Text>Change Language</Text>
      </TouchableOpacity>

      <TouchableOpacity onPress={() => setIsModalVisible(true)} style={styles.button}>
        <Text>About</Text>
      </TouchableOpacity>

      <Modal
        animationType="slide"
        transparent={true}
        visible={isModalVisible}
        onRequestClose={() => {
          setIsModalVisible(false);
        }}
      >
        <View style={styles.centeredView}>
          <View style={styles.modalView}>
            <Text>{aboutText}</Text>
            <TouchableOpacity onPress={() => setIsModalVisible(false)}>
              <Text>Close</Text>
            </TouchableOpacity>
          </View>
        </View>
      </Modal>
    </View>
  );
}

const styles = StyleSheet.create({
  button: {
    backgroundColor: '#4287f5',
    paddingHorizontal: 20,
    paddingVertical: 15,
    borderRadius: 8,
    marginTop: 15,
  },
  centeredView: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 22,
  },
  modalView: {
    margin: 20,
    backgroundColor: 'white',
    borderRadius: 20,
    padding: 35,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
});
