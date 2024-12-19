import React from 'react';
import { StyleSheet, View, Text, TouchableOpacity } from 'react-native';

const AberturaForms = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Sua ajuda está aqui.</Text>
      <Text style={styles.text}>Responda o questionário sobre o</Text>
      <Text style={styles.text}>que está sentindo. Você será</Text>
      <Text style={styles.text}>encaminhado para um chat com</Text>
      <Text style={styles.text}>um funcionário da rede Sesi que</Text>
      <Text style={styles.text}>te dará o apoio necessário.</Text>
      <TouchableOpacity style={styles.button}>
        <Text style={styles.buttonText}>Vamos começar</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#FFFF00',
    borderRadius: 10,
    padding: 20,
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    color: '#000',
    fontSize: 16,
    marginVertical: 4,
  },
  button: {
    backgroundColor: '#000',
    paddingVertical: 12,
    paddingHorizontal: 24,
    borderRadius: 8,
    marginTop: 16,
  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
});

export default AberturaForms;
