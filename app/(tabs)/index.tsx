import { View, Text, Button, StyleSheet } from 'react-native';
import { useState } from 'react';
import { Audio } from 'expo-av';

export default function HomeScreen() {
  const [sound, setSound] = useState(null);
  const [playing, setPlaying] = useState(false);

  async function playSound() {
    const { sound } = await Audio.Sound.createAsync(
      {
        uri: 'https://www.soundhelix.com/examples/mp3/SoundHelix-Song-1.mp3',
      },
      { shouldPlay: true }
    );
    setSound(sound);
    setPlaying(true);
  }

  async function pauseSound() {
    if (sound) {
      await sound.pauseAsync();
      setPlaying(false);
    }
  }

  return (
    <View style={styles.container}>
      <Text style={styles.title}>PlayLite 🎧</Text>

      {!playing ? (
        <Button title="Play Audio" onPress={playSound} />
      ) : (
        <Button title="Pause Audio" onPress={pauseSound} />
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    fontSize: 24,
    marginBottom: 20,
  },
});