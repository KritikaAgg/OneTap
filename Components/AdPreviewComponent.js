import React from 'react';
import { View, StyleSheet } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <View style={styles.coloredBox} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  coloredBox: {
    width: 339,
    height: 353,
    backgroundColor: '#8C28D2', // Change this to any color you want
  },
});
