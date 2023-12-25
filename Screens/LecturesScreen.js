import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import Video from 'react-native-video';

const languageVideos = {
  Angleščina: 'https://www.youtube.com/watch?v=QXVzmzhxWWc',
  Nemščina: 'https://www.youtube.com/watch?v=6Ka_3Rq8JZ4',
  Spanščina: 'https://www.youtube.com/watch?v=qE-03EATjho',
  Francoščina: 'https://www.youtube.com/watch?v=9q7nx6kzvD0',
};

export default function LecturesScreen({ route }) {
  const { selectedLanguage } = route.params;
  const videoURL = languageVideos[selectedLanguage.name];

  return (
    <View style={styles.container}>
      <Text style={styles.header}>Lectures</Text>
      {videoURL && (
        <Video
          source={{ uri: videoURL }}
          style={styles.videoPlayer}
          controls={true}
          paused={true}
        />
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
  videoPlayer: {
    width: '100%',
    height: 300, // Adjust height as needed
  },
});
