import React from 'react';
import { ScrollView, View, Text, StyleSheet } from 'react-native';

const App = () => {
  return (
    <ScrollView contentContainerStyle={styles.container}>
      {/* Header */}
      <View style={styles.header}>
        <Text style={styles.h1}>Luis Daniel Alejandro Bordon</Text>
        <Text style={styles.contactInfo}>(139) 97612-572 | luzhof9.lb@gmail.com</Text>
      </View>

      {/* Sobre Mí */}
      <View style={styles.section}>
        <Text style={styles.h2}>SOBRE MÍ</Text>
        <Text style={styles.paragraph}>
          Sou um Garçom experiente, tenho conhecimento de preparação de bebidas, resocição e controle de estoque, com mais de 3 anos de experiência em bares e restaurantes.
        </Text>
      </View>

      {/* Experiencia Laboral */}
      <View style={styles.section}>
        <Text style={styles.h2}>EXPERIÊNCIA LABORAL</Text>
        
        <View style={styles.item}>
          <Text style={styles.h3}>Garçom Senior</Text>
          <Text style={styles.date}>Restaurante Lorem Ipsum | Jan 2020 - Presente</Text>
          <Text style={styles.paragraph}>• Atendimento ao cliente com excelência</Text>
          <Text style={styles.paragraph}>• Preparação de coquetéis artesanais</Text>
        </View>
      </View>

      {/* Habilidades */}
      <View style={styles.section}>
        <Text style={styles.h2}>HABILIDADES</Text>
        <View style={styles.skillsContainer}>
          <Text style={styles.skill}>Trabalho em equipe</Text>
          <Text style={styles.skill}>Comunicação</Text>
          <Text style={styles.skill}>Atendimento ao cliente</Text>
        </View>
      </View>

      {/* Idiomas */}
      <View style={styles.section}>
        <Text style={styles.h2}>IDIOMAS</Text>
        <View style={styles.languagesContainer}>
          <View style={styles.languageCard}>
            <Text style={styles.h3}>Espanhol</Text>
            <Text>Nativo</Text>
          </View>
          <View style={styles.languageCard}>
            <Text style={styles.h3}>Português</Text>
            <Text>Avançado</Text>
          </View>
        </View>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 20,
    backgroundColor: '#f9f9f9'
  },
  header: {
    marginBottom: 20,
    borderBottomWidth: 2,
    borderBottomColor: '#3498db',
    paddingBottom: 20
  },
  h1: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#2c3e50',
    textAlign: 'center',
    marginBottom: 5
  },
  h2: {
    fontSize: 20,
    fontWeight: '600',
    color: '#3498db',
    marginTop: 20,
    marginBottom: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#eee',
    paddingBottom: 5
  },
  h3: {
    fontSize: 16,
    fontWeight: '600',
    color: '#34495e',
    marginBottom: 5
  },
  section: {
    marginBottom: 20
  },
  item: {
    marginBottom: 15
  },
  date: {
    color: '#7f8c8d',
    fontStyle: 'italic',
    fontSize: 14,
    marginBottom: 5
  },
  paragraph: {
    marginBottom: 5,
    fontSize: 14
  },
  contactInfo: {
    textAlign: 'center',
    color: '#3498db'
  },
  skillsContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: 10
  },
  skill: {
    backgroundColor: '#ecf0f1',
    padding: 8,
    borderRadius: 15,
    fontSize: 14,
    margin: 3
  },
  languagesContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: 15
  },
  languageCard: {
    backgroundColor: '#f0f8ff',
    padding: 15,
    borderRadius: 8,
    borderLeftWidth: 4,
    borderLeftColor: '#3498db',
    minWidth: 150
  }
});

export default App;