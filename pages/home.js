import React from 'react';
import { View, Text, Image, StyleSheet, TouchableOpacity } from 'react-native';

export default function Home({ navigation }) {
  return (
    <View style={styles.container}>
      {/* Header */}
      <View style={styles.header}>
        <Text style={styles.greeting}>Bom dia, Érika!</Text>
        <Text style={styles.subGreeting}>Não esqueça de registrar suas emoções!</Text>
        <TouchableOpacity
          onPress={() => alert('Notificações clicadas!')}
          style={styles.notificationIcon}
        >
          <Image source={require('../img/mdi_bell.png')} style={styles.notificationText} />
        </TouchableOpacity>
      </View>

      {/* Botões lado a lado */}
      <View style={styles.cardsContainer}>
        {/* Saúde Mental */}
        <TouchableOpacity
          style={[styles.card, styles.saudeMentalBotao]}
          onPress={() => navigation.navigate('SaudeMental')}
        >
          <Text style={styles.cardText}>Saúde Mental</Text>
          <View style={styles.cardImage}>
            <Text style={styles.icon}>🛋️</Text>
          </View>
        </TouchableOpacity>

        {/* Bullying */}
        <TouchableOpacity
          style={[styles.card, styles.bullyingBotao]}
          onPress={() => navigation.navigate('Bullying')}
        >
          <Text style={styles.cardText}>Bullying e outras agressões</Text>
          <View style={styles.cardImage}>
            <Text style={styles.icon}>😔</Text>
          </View>
        </TouchableOpacity>

        {/* Assédio */}
        <TouchableOpacity
          style={[styles.card, styles.assedioBotao]}
          onPress={() => navigation.navigate('Assedio')}
        >
          <Text style={styles.cardText}>Assédio</Text>
          <View style={styles.cardImage}>
            <Text style={styles.icon}>🚨</Text>
          </View>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#F8C9D7', padding: 20 },
  header: { marginBottom: 20 },
  greeting: { fontSize: 28, fontWeight: 'bold', color: '#333' },
  subGreeting: { fontSize: 16, color: '#666', marginTop: 5 },
  notificationIcon: { position: 'absolute', top: 10, right: 10, padding: 10 },
  notificationText: { width: 25, height: 25 },

  // Container para os botões lado a lado
  cardsContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
  },
  card: {
    width: '30%', // 3 cards por linha
    height: 150,
    borderRadius: 15,
    padding: 15,
    marginBottom: 15,
    justifyContent: 'center',
    alignItems: 'center',
    elevation: 5,
  },
  saudeMentalBotao: { backgroundColor: '#ADE8F4' },
  bullyingBotao: { backgroundColor: '#F9E79F' },
  assedioBotao: { backgroundColor: '#FFB6C1' }, // Rosa claro
  cardText: { fontSize: 16, fontWeight: 'bold', color: '#333', textAlign: 'center' },
  cardImage: { marginTop: 10 },
  icon: { fontSize: 36 },
});
