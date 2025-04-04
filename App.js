import React from 'react';
import { ScrollView, View, Text, Image, StyleSheet } from 'react-native';
import profileImage from './components/imgGh.png'
const App = () => {
  return (
    <ScrollView contentContainerStyle={styles.container}>
      {/* Foto de perfil */}
      <View style={styles.profileContainer}>
        <Image
          source={profileImage}
          style={styles.profileImage}
        />
      </View>

      {/* Header */}
      <View style={styles.header}>
        <Text style={styles.h1}>Luis Daniel Alejandro Bordon</Text>
        <Text style={styles.contactInfo}>(13) 997612-572 | lusho99.lb@gmail.com</Text>
      </View>

      {/* Sobre Mí */}
      <View style={styles.section}>
        <Text style={styles.h2}>SOBRE MIM</Text>
        <Text style={styles.paragraph}>
          Estudante de Desenvolvimento de sistemas que atualmente trabalha na area de restaurantes
        </Text>
      </View>

      {/* Experiencia Laboral */}
      <View style={styles.section}>
        <Text style={styles.h2}>EXPERIÊNCIA LABORAL</Text>
        
        <View style={styles.item}>
          <Text style={styles.h3}>Garçom Senior</Text>
          <Text style={styles.subtitle}>Restaurante | Jan 2020 - Presente</Text>
          <Text style={styles.paragraph}>• Atendimento ao cliente com excelência</Text>
          <Text style={styles.paragraph}>• Preparação de coquetéis artesanais</Text>
        </View>
      </View>

      {/* Habilidades */}
      <View style={styles.section}>
        <Text style={styles.h2}>HABILIDADES</Text>
        <View style={styles.table}>
          <View style={styles.row}>
            <View style={styles.cell}><Text style={styles.tableText}>Trabalho em equipe</Text></View>
            <View style={styles.cell}><Text style={styles.tableText}>Comunicação</Text></View>
          </View>
          <View style={styles.row}>
            <View style={styles.cell}><Text style={styles.tableText}>Atendimento ao cliente</Text></View>
            <View style={styles.cell}><Text style={styles.tableText}>Organização</Text></View>
          </View>
        </View>
      </View>

      {/* Idiomas */}
      <View style={styles.section}>
        <Text style={styles.h2}>IDIOMAS</Text>
        <View style={styles.table}>
          <View style={styles.row}>
            <View style={styles.cell}><Text style={styles.tableText}>Espanhol</Text></View>
            <View style={styles.cell}><Text style={styles.tableText}>Nativo</Text></View>
          </View>
          <View style={styles.row}>
            <View style={styles.cell}><Text style={styles.tableText}>Português</Text></View>
            <View style={styles.cell}><Text style={styles.tableText}>Avançado</Text></View>
          </View>
        </View>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 20,
    backgroundColor: '#f9f9f9',
    paddingBottom: 40
  },
  profileContainer: {
    alignItems: 'center',
    marginBottom: 20
  },
  profileImage: {
    width: 150,
    height: 150,
    borderRadius: 75,
    borderWidth: 3,
    borderColor: '#3498db'
  },
  header: {
    marginBottom: 20,
    borderBottomWidth: 2,
    borderBottomColor: '#3498db',
    paddingBottom: 20,
    alignItems: 'center'
  },
  h1: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#2c3e50',
    marginBottom: 5,
    textAlign: 'center'
  },
  h2: {
    fontSize: 20,
    fontWeight: '600',
    color: '#3498db',
    marginTop: 20,
    marginBottom: 15,
    borderBottomWidth: 1,
    borderBottomColor: '#eee',
    paddingBottom: 5
  },
  h3: {
    fontSize: 18,
    fontWeight: '600',
    color: '#34495e',
    marginBottom: 5
  },
  subtitle: {
    color: '#7f8c8d',
    fontStyle: 'italic',
    fontSize: 14,
    marginBottom: 10
  },
  section: {
    marginBottom: 20
  },
  item: {
    marginBottom: 15
  },
  paragraph: {
    marginBottom: 5,
    fontSize: 14,
    lineHeight: 20
  },
  contactInfo: {
    textAlign: 'center',
    color: '#3498db',
    fontSize: 16
  },
  table: {
    borderWidth: 1,
    borderColor: '#ddd',
    borderRadius: 5,
    marginTop: 10
  },
  row: {
    flexDirection: 'row'
  },
  cell: {
    flex: 1,
    padding: 10,
    borderWidth: 1,
    borderColor: '#ddd'
  },
  tableText: {
    textAlign: 'center'
  }
});

export default App;