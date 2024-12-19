import React, { useState, useEffect } from 'react';
import { View, Text, Image, StyleSheet, TextInput, TouchableOpacity, ScrollView } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const Bullying = () => {
  const navigation = useNavigation();

  const [comment, setComment] = useState('');
  const [commentsList, setCommentsList] = useState([]);
  const [currentSlide, setCurrentSlide] = useState(0);

  const slides = [
    { img: require('../img/1.png'), title: 'Agressões físicas', text: 'Bullying físico envolve agressões repetidas que causam ferimentos e danos.' },
    { img: require('../img/2.png'), title: 'Agressões verbais', text: 'O bullying verbal inclui insultos, ameaças e provocações para assustar ou humilhar a vítima.' },
    { img: require('../img/3.png'), title: 'Bullying psicológico ou emocional', text: 'O bullying emocional destrói a reputação da vítima com boatos e isolamento, usando culpa e medo.' },
    { img: require('../img/4.png'), title: 'Exclusão social', text: 'O bullying social exclui a vítima de atividades e conversas, fazendo-a sentir-se invisível.' },
    { img: require('../img/5.png'), title: 'Bullying cibernético', text: 'O bullying cibernético envolve mensagens ofensivas e publicações humilhantes, causando perseguição.' },
    { img: require('../img/6.png'), title: 'Diferença entre conflito e bullying', text: 'Conflitos ocasionais não são bullying, que envolve desequilíbrio de poder e controle do agressor.' },
    { img: require('../img/7.png'), title: 'Mudanças no comportamento da vítima', text: 'O bullying pode resultar em afastamento social, queda no desempenho escolar e depressão.' },
    { img: require('../img/8.png'), title: 'Identificação do bullying', text: 'Reconhecer sinais de bullying é crucial para garantir a proteção e bem-estar do aluno.' },
  ];

  const handleCommentSubmit = () => {
    if (comment.trim()) {
      setCommentsList([...commentsList, comment]);
      setComment('');
    }
  };

  const handleNavigateToForms = () => {
    console.log('Botão clicado! Navegando para AberturaForms...');
    navigation.navigate('AberturaForms');
  };

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <View style={styles.header}>
        <Image source={require('../img/mdi_bell.png')} style={styles.icon} />
      </View>
      <View style={styles.intro}>
        <Image source={require('../img/PROJETO SEMESTRAL 4° (11) 1.png')} style={styles.introImg} />
        <View>
          <Text style={styles.title}>Bullying e outras agressões</Text>
          <Text style={styles.subtitle}>Solicite ajuda à gestão escolar e saiba como se proteger.</Text>
        </View>
      </View>
      <View style={[styles.box, styles.yellowBox]}>
        <Image source={require('../img/PROJETO SEMESTRAL 4° (25) 1.png')} style={styles.boxIcon} />
        <View>
          <Text style={styles.boxTitle}>Precisa de ajuda?</Text>
          <TouchableOpacity style={styles.button} onPress={handleNavigateToForms}>
            <Text style={styles.buttonText}>CLIQUE AQUI AGORA</Text>
          </TouchableOpacity>
        </View>
      </View>
      <View style={[styles.box, styles.blueBox]}>
        <Image source={require('../img/PROJETO SEMESTRAL 4° (29) 1.png')} style={styles.boxIcon} />
        <View>
          <Text style={styles.boxTitle}>Como lidar com o bullying?</Text>
          <Text style={styles.boxText}>Descubra mais sobre como reagir ao bullying na escola!</Text>
          <TouchableOpacity style={styles.button}>
            <Text style={styles.buttonText}>SAIBA COMO REAGIR!</Text>
          </TouchableOpacity>
        </View>
      </View>
      <Text style={styles.h2}>Como identificar o bullying?</Text>
      <Text style={styles.h2Text}>Identificar bullying é essencial para a solução.</Text>
      <View style={styles.carousel}>
        <View style={[styles.carouselSlide, currentSlide % 2 === 0 ? styles.rowReverse : null]}>
          <Image source={slides[currentSlide].img} style={styles.carouselImage} />
          <View style={styles.carouselTextContainer}>
            <Text style={styles.carouselTitle}>{slides[currentSlide].title}</Text>
            <Text style={styles.carouselText}>{slides[currentSlide].text}</Text>
          </View>
        </View>
        <View style={styles.indicators}>
          {slides.map((_, index) => (
            <View key={index} style={[styles.indicator, index === currentSlide ? styles.activeIndicator : null]} />
          ))}
        </View>
      </View>

      <View style={styles.commentSection}>
        <TextInput
          style={styles.commentInput}
          placeholder="Digite aqui a sua história de superação!"
          value={comment}
          onChangeText={setComment}
          multiline
        />
        <TouchableOpacity style={styles.submitComment} onPress={handleCommentSubmit}>
          <Text style={styles.buttonText}>Enviar</Text>
        </TouchableOpacity>
        <View style={styles.commentDisplay}>
          {commentsList.map((c, index) => (
            <View key={index} style={styles.commentItem}>
              <Text style={styles.commentText}>{c}</Text>
            </View>
          ))}
        </View>
      </View>
      <View style={styles.footer}>
        <Image source={require('../img/Vector.png')} style={styles.footerIcon} />
        <Image source={require('../img/Vector1 (1).png')} style={styles.footerIcon} />
        <Image source={require('../img/Vector2.png')} style={styles.footerIcon} />
        <Image source={require('../img/Vector3.png')} style={styles.footerIcon} />
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    backgroundColor: '#f8f7f3',
    padding: 20,
  },
  header: {
    alignItems: 'flex-end',
  },
  icon: {
    width: 30,
    height: 30,
    backgroundColor: '#f8d348',
    borderRadius: 10,
  },
  intro: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 20,
  },
  introImg: {
    width: 80,
    height: 80,
    marginRight: 15,
  },
  title: {
    fontSize: 22,
    color: '#333',
  },
  subtitle: {
    fontSize: 16,
    color: '#555',
    marginTop: 10,
  },
  box: {
    borderRadius: 10,
    padding: 15,
    marginTop: 20,
    flexDirection: 'row',
    alignItems: 'center',
  },
  yellowBox: {
    backgroundColor: '#f8d348',
  },
  blueBox: {
    backgroundColor: '#f0f0f0',
  },
  boxIcon: {
    width: 80,
    height: 80,
    marginRight: 15,
  },
  boxTitle: {
    fontSize: 18,
    color: '#333',
  },
  boxText: {
    fontSize: 14,
    color: '#555',
    marginTop: 8,
  },
  button: {
    backgroundColor: '#FFF7B1',
    borderRadius: 25,
    padding: 10,
    marginTop: 15,
  },
  buttonText: {
    color: '#000',
    textAlign: 'center',
  },
  h2: {
    fontSize: 18,
    marginTop: 20,
    fontWeight: 'bold',
  },
  h2Text: {
    fontSize: 16,
    color: '#555',
  },
  commentSection: {
    marginTop: 20,
  },
  commentInput: {
    width: '100%',
    padding: 10,
    borderRadius: 10,
    borderColor: '#FFFBDC',
    borderWidth: 1,
    backgroundColor: '#FFFBDC',
    marginBottom: 10,
  },
  submitComment: {
    backgroundColor: '#E8D100',
    borderRadius: 10,
    padding: 10,
    alignItems: 'center',
  },
  commentDisplay: {
    marginTop: 20,
  },
  commentItem: {
    flexDirection: 'row',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: '#ddd',
    borderRadius: 10,
    padding: 10,
    backgroundColor: '#FFF7B1',
    marginBottom: 10,
  },
  commentText: {
    flex: 1,
  },
  footer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginTop: 30,
    paddingTop: 20,
  },
  footerIcon: {
    width: 25,
    height: 25,
  },
  carousel: {
    marginTop: 20,
    alignItems: 'center',
  },
  carouselSlide: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 10,
    backgroundColor: '#FFFBDC',
  },
  carouselImage: {
    width: 100,
    height: 100,
    marginRight: 15,
    resizeMode: 'contain',
  },
  carouselTextContainer: {
    flex: 1,
  },
  carouselTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 5,
  },
  carouselText: {
    fontSize: 14,
    color: '#555',
  },
  indicators: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginTop: 10,
  },
  indicator: {
    width: 10,
    height: 10,
    borderRadius: 5,
    backgroundColor: '#ccc',
    marginHorizontal: 5,
  },
  activeIndicator: {
    backgroundColor: '#555',
  },
  rowReverse: {
    flexDirection: 'row-reverse',
  },
});

export default Bullying;
