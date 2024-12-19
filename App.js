import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import Home from './pages/home';
import SaudeMental from './pages/saudemental';
import Assedio from './pages/assedio';
import AberturaForms from './pages/aberturaforms';
import Bullying from './pages/bullying';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="Home"
        screenOptions={{
          headerStyle: { backgroundColor: '#f8d348' },
          headerTintColor: '#333',
          headerTitleStyle: { fontWeight: 'bold' },
        }}
      >
        <Stack.Screen
          name="Home"
          component={Home}
          options={{ title: 'Página Inicial' }}
        />
        <Stack.Screen
          name="SaudeMental"
          component={SaudeMental}
          options={{ title: 'Saúde Mental' }}
        />
        <Stack.Screen
          name="Bullying"
          component={Bullying}
          options={{ title: 'Bullying e Outras Agressões' }}
        />
        <Stack.Screen
          name="Assedio"
          component={Assedio}
          options={{ title: 'Assédio' }}
        />
        <Stack.Screen
          name="AberturaForms"
          component={AberturaForms}
          options={{ title: 'Abertura de Formulários' }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
