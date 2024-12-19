import React, { useState, useEffect } from 'react';
import { View, Text, Image, StyleSheet, TextInput, TouchableOpacity, ScrollView } from 'react-native';

const Page1 = () => {
  const [comment, setComment] = useState('');
  const [commentsList, setCommentsList] = useState([]);
  const [currentSlide, setCurrentSlide] = useState(0);

  const slides = [
    {
      img: require('../img/9.png'),
      title: 'Comentários Inapropriados',
      text: 'Fazer piadas ou comentários sexuais indesejados que deixam a pessoa desconfortável.',
    },
    {
      img: require('../img/10.png'),
      title: 'Avanços Sexuais Indesejados',
      text: 'Aproximações ou propostas sexuais indesejadas, especialmente após recusa, são consideradas assédio.',

    },
    {
      img: require('../img/11.png'),
      title: 'Toques Não Desejados',
      text: 'Contato físico não consensual, como abraços e toques, pode ocorrer em diversos ambientes.',
    },
    {
      img: require('../img/12.png'),
      title: 'Imagens ou Mensagens Inapropriadas',
      text: 'Envio de fotos, vídeos ou mensagens de conteúdo sexual sem o consentimento da outra pessoa.',
    },
    {
      img: require('../img/13.png'),
      title: 'Coerção ou Intimidação Sexual',
      text: 'Fazer ameaças ou coagir alguém a realizar atos sexuais em troca de favores ou benefícios.',
    },
    {
      img: require('../img/14.png'),
      title: 'Conversa Sexual Não Solicitada',
      text: 'Falar inadequadamente sobre desejos ou fantasias sexuais é considerado assédio.',
    },
    {
      img: require('../img/15.png'),
      title: 'Comentários sobre o Comportamento Sexual',
      text: 'O assédio pode resultar em afastamento social, queda no desempenho escolar e depressão.',
    },
    {
      img: require('../img/16.png'),
      title: 'Olhares Invasivos ou Gestos Sugestivos',
      text: 'Olhares fixos ou gestos de conotação sexual que causam desconforto são assédio.',
    },
    {
      img: require('../img/17.png'),
      title: 'Pressão para se Vestir de Forma Provocativa',
      text: 'Sugestões ou exigências para que a pessoa use roupas de maneira sexualizada ou provocativa.',
    },
    {
      img: require('../img/18.png'),
      title: 'Relações de Poder Desiguais',
      text: 'O assédio sexual ocorre em contextos de poder desequilibrado, gerando pressão para aceitar atos indesejados.',
    },
  ];

  const carouselItems = [
    'Ouça com Empatia',
    'Acredite na Vítima',
    'Incentive a Denúncia',
    'Ofereça Ajuda Prática',
    'Fique ao Lado Dela em Público',
    'Ensine Sobre Limites e Assertividade',
    'Promova um Ambiente Seguro',
    'Encaminhe para Recursos de Apoio',
    'Fique Atento ao Comportamento da Pessoa',
    'Respeite a Decisão da Vítima',
  ];

  const [feedback, setFeedback] = useState('');
  const [feedbackList, setFeedbackList] = useState([]);

  const handleFeedbackSubmit = () => {
    if (feedback.trim()) {
      setFeedbackList([...feedbackList, feedback]);
      setFeedback(''); // Limpa o campo de input
    }
  };


  const handleCommentSubmit = () => {
    if (comment.trim()) {
      setCommentsList([...commentsList, comment]);
      setComment('');
    }
  };

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 3000); // Troca a cada 3 segundos

    return () => clearInterval(interval); // Limpa o intervalo ao desmontar
  }, []);

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <View style={styles.header}>
        <Image source={require('../img/mdi_bell.png')} style={styles.icon} />
      </View>
      <View style={styles.intro}>
        <Image source={require('../img/PROJETO SEMESTRAL 4° (13) 1.png')} style={styles.introImg} />
        <View>
          <Text style={styles.title}>Proteja-se contra o assédio</Text>
          <Text style={styles.subtitle}>Solicite ajuda a gestão escolar e saiba como se proteger.</Text>
        </View>
      </View>
      <View style={[styles.box, styles.yellowBox]}>
        <Image source={require('../img/PROJETO SEMESTRAL 4° (25) 1.png')} style={styles.boxIcon} />
        <View>
          <Text style={styles.boxTitle}>Precisa de ajuda?</Text>
          <TouchableOpacity style={styles.button}>
            <Text style={styles.buttonText}>CLIQUE AQUI AGORA</Text>
          </TouchableOpacity>
        </View>
      </View>
      <View style={[styles.box, styles.blueBox]}>
        <Image source={require('../img/PROJETO SEMESTRAL 4° (31) 1.png')} style={styles.boxIcon} />
        <View>
          <Text style={styles.boxTitle}>Estratégias de proteção</Text>
          <Text style={styles.boxText}>Descubra mais sobre como se proteger dos assédios na escola!</Text>
          <TouchableOpacity style={styles.button}>
            <Text style={styles.buttonText}>saiba como se proteger!</Text>
          </TouchableOpacity>
        </View>
      </View>
      <Text style={styles.h2}>Como identificar o assédio?</Text>
      <Text style={styles.h2Text}>Identificar assédio facilita seu combate.</Text>
      <View style={styles.carousel}>
        <View
          style={[
            styles.carouselSlide,
            currentSlide % 2 === 0 ? styles.rowReverse : null, // Alterna a ordem
          ]}
        >
          <Image source={slides[currentSlide].img} style={styles.carouselImage} />
          <View style={styles.carouselTextContainer}>
            <Text style={styles.carouselTitle}>{slides[currentSlide].title}</Text>
            <Text style={styles.carouselText}>{slides[currentSlide].text}</Text>
          </View>
        </View>
        <View style={styles.indicators}>
          {slides.map((_, index) => (
            <View
              key={index}
              style={[
                styles.indicator,
                index === currentSlide ? styles.activeIndicator : null,
              ]}
            />
          ))}
        </View>
        <Text style={styles.h2}>Como apoiar vítimas de assédio?</Text>
        <Text style={styles.h2Text}>
          Apoiar alguém que está sendo assediado é fundamental para ajudá-lo a se sentir seguro e validado.
        </Text>
        <View style={styles.carousel}>
          <Text style={styles.carouselText}>{carouselItems[currentSlide]}</Text>
          <View style={styles.indicators}>
            {carouselItems.map((_, index) => (
              <View
                key={index}
                style={[
                  styles.indicator,
                  index === currentSlide ? styles.activeIndicator : null,
                ]}
              />
            ))}
          </View>
        </View>
      </View>
      <View style={styles.feedbackSection}>
        <TextInput
          style={styles.feedbackInput}
          placeholder="Compartilhe sua experiência!"
          value={feedback}
          onChangeText={setFeedback}
          multiline
        />
        <TouchableOpacity style={styles.submitFeedback} onPress={handleFeedbackSubmit}>
          <Text style={styles.buttonText}>Enviar</Text>
        </TouchableOpacity>
        <View style={styles.feedbackDisplay}>
          {feedbackList.map((f, index) => (
            <View key={index} style={styles.feedbackItem}>
              {/* <Image source={require('./assets/default-profile.png')} style={styles.profileImage} /> */}
              <Text style={styles.feedbackText}>{f}</Text>
            </View>
          ))}
        </View>
      </View>
      <View style={styles.footer}>
        {/* Adicione os ícones do rodapé */}
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
    backgroundColor: '#9554BD',
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
    backgroundColor: '#9554BD',
  },
  blueBox: {
    backgroundColor: '#f9f9f9', // Defina a cor do box azul aqui
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
    backgroundColor: '#EFD4FF',
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
    textAlign: 'left',
  },
  h2Text: {
    fontSize: 16,
    color: '#555',
    textAlign: 'left',
  },
  feedbackSection: {
    marginTop: 20,
  },
  feedbackInput: {
    width: '100%',
    padding: 10,
    borderRadius: 10,
    borderColor: '#EFD4FF',
    borderWidth: 1,
    backgroundColor: '#EFD4FF',
    marginBottom: 10,
  },
  submitFeedback: {
    backgroundColor: '#9554BD',
    borderRadius: 10,
    padding: 10,
    alignItems: 'center',
  },
  feedbackDisplay: {
    marginTop: 20,
  },
  feedbackItem: {
    flexDirection: 'row',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: '#ddd',
    borderRadius: 10,
    padding: 10,
    backgroundColor: '#f9f9f9',
    marginBottom: 10,
  },
  profileImage: {
    width: 40,
    height: 40,
    borderRadius: 20,
    marginRight: 10,
  },
  feedbackText: {
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
    // backgroundColor: '#EAC8FF',
  },
  carouselSlide: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 10,
    backgroundColor: '#EAC8FF',
    borderRadius: 8,
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
    textAlign: 'center',
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
  carouselText: {
    fontSize: 15,
    fontWeight: 'regular',
    textAlign: 'center',
    marginVertical: 10,
    color: '#555',
  },
  indicator: {
    width: 8,
    height: 8,
    borderRadius: 4,
    backgroundColor: '#EAC8FF',
    marginHorizontal: 4,
  },
  activeIndicator: {
    backgroundColor: '#500573',
  },
});

export default Page1;
