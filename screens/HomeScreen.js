import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, ScrollView } from 'react-native';

import IconButton from '../components/IconButton';
import PhysicTheme from '../components/PhysicsTheme';

export default function HomeScreen({ navigation }) {

  return (
    <ScrollView style={styles.scrollView}>
      <View style={styles.container}>
        
        <View style={styles.header}>
          <Text style={styles.title}>KaPhysicsApp</Text>
        </View>

        
          <View style={styles.subtitleContainer}>
            <Text style={styles.subtitle}>Fisica I</Text>
          </View>
          <Text style={styles.description}>Explora las fórmulas y conoce la teoría. Resuelve problemas con la calculadora.</Text>

          <PhysicTheme title={"Cinematica"} colorButton={"#000"}
            label={"Posición, velocidad, aceleración, tiempo, distancia y más."} icon={'bolt'}
            onPress={() => navigation.navigate("Cinematica")} />

          <PhysicTheme title={"Leyes de Newton"} colorButton={"#000"}
            label={"Primera, segunda y tercera Ley de Newton."} icon={'bolt'}
            onPress={() => navigation.navigate("Newton")} />

          <PhysicTheme title={"Trabajo y energía"} colorButton={"#000"}
            label={"Trabajo realizado por una fuerza, energía cinética y potencial, conservación de la energía mecánica."} icon={'bolt'} />

          <PhysicTheme title={"Ley de gravitación universal"} colorButton={"#000"}
            label={"Fuerza gravitatoria, peso y caída libre."} icon={'bolt'} />

          <PhysicTheme title={"Fluidos"} colorButton={"#000"}
            label={"Presión, densidad, principio de Pascal y principio de Arquímedes."} icon={'bolt'} />
          
        <StatusBar style="auto" />
      </View>
      </ScrollView>
  );
}

const styles = StyleSheet.create({
  scrollView: {
    backgroundColor: '#fff',
    height: '100%',
  },

  container: {
    flex: 1,
    backgroundColor: '#fff',
    paddingTop: 20, // Ajuste del espacio superior
    paddingHorizontal: 20, // Ajuste del espacio lateral
    paddingBottom: 62, // Padding para el final de la Screen
  },

  header: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 10,
  },

  title: {
    fontSize: 24,
    fontWeight: 'bold',
    textAlign: 'left',
    color: '#D91040',
    marginLeft: 0, // Espacio entre el ícono y el título
  },

  subtitle: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#000',
  },

  subtitleContainer: {
    backgroundColor: '#fff',
    top: 0,
    paddingBottom: 12,
    paddingTop: 12,
  },

  description: {
    fontSize: 16,
    textAlign: 'center',
    top: 8,
  }
});
