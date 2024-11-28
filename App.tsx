import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { View, Text, StyleSheet } from 'react-native';
import { registerRootComponent } from 'expo';

// Tela de boas-vindas
const WelcomeScreen = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Cidadão Conectado</Text>
      <Text style={styles.subtitle}>Acompanhe problemas urbanos com facilidade</Text>
    </View>
  );
};

// Tela do mapa (ainda sem funcionalidade)
const MapScreen = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Mapa Interativo</Text>
      <Text style={styles.subtitle}>Aqui estará o mapa da cidade</Text>
    </View>
  );
};

// Tela de relatório (ainda sem funcionalidade)
const ReportScreen = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Relatar Problema</Text>
      <Text style={styles.subtitle}>Descreva os problemas urbanos que deseja relatar</Text>
    </View>
  );
};

// Componente principal do aplicativo
export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Bem-vindo" component={WelcomeScreen} />
        <Stack.Screen name="Mapa" component={MapScreen} />
        <Stack.Screen name="Relatório" component={ReportScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

// Registra o componente principal para Expo
registerRootComponent(App);

// Estilos básicos para as telas
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#f8f9fa',
  },
  title: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#4a4e69',
    marginBottom: 10,
  },
  subtitle: {
    fontSize: 16,
    color: '#22223b',
    textAlign: 'center',
    paddingHorizontal: 20,
  },
});
