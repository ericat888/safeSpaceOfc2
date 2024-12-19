import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

export default function SaudeMental() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Saúde Mental</Text>
      <Text style={styles.content}>Aqui está a tela de Saúde Mental!</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#E0F7FA',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
  },
  content: {
    fontSize: 16,
  },
});
