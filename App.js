import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { TouchableOpacity, Text } from 'react-native';

import FontAwesome from "@expo/vector-icons/FontAwesome";
import { Feather } from '@expo/vector-icons';

import HomeScreen from './screens/HomeScreen';
import CinematicaScreen from './screens/CinematicaScreen';
import VelocidadScreen from './screensCinematica/VelocidadScreen';
import MruCalculateScreen from './screensCinematica/MruCalculateScreen';
import CalcVelocidadScreen from './screensVelocidad/CalcVelocidadScreen';
import CalcDistanciaScreen from './screensVelocidad/CalcDistanciaScreen';
import VelocidadCalculateScreen from './screensCinematica/VelocidadCalculateScreen';
import MruaCalculateScreen from './screensCinematica/MruaCalculateScreen';
import NewtonScreen from './screens/NewtonScreen';

const Stack = createNativeStackNavigator();

export default function App() {

  const renderHeaderRightButtons = () => (
    <TouchableOpacity onPress={() => console.log('Botón presionado')}>
      <Feather name="info" size={24} color="black" />
    </TouchableOpacity>
  );

  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="KaPhysics" component={HomeScreen}
        options={{
        headerShown: true,
        headerTintColor: '#D91040',
        headerStyle: { backgroundColor: '#fff' },
        headerTitle: 'Inicio',
        headerTitleStyle: {color: '#000'},
        headerRight: () => renderHeaderRightButtons(),
        }}>
        </Stack.Screen>

        <Stack.Screen name="Cinematica" component={CinematicaScreen} options={
          {headerTintColor: '#D91040',
          headerTitle: 'Cinematica',
          headerTitleStyle: {
            color: '#000'
          }}}>
          </Stack.Screen>
        <Stack.Screen name="Newton" component={NewtonScreen} options={
          {headerTintColor: '#D91040',
          headerTitle: 'Leyes de Newton',
          headerTitleStyle: {
            color: '#000'
          }}}>
          </Stack.Screen>
        
        <Stack.Screen name='Velocidad' component={VelocidadScreen} options={
          {headerTintColor: '#D91040',
          headerTitle: 'Velocidad',
          headerTitleStyle: {
            color: '#000'
          }}
        }></Stack.Screen>

        <Stack.Screen name='VelocidadCalculateScreen' component={VelocidadCalculateScreen} options={
          {headerTintColor: '#D91040',
          headerTitle: 'Velocidad',
          headerTitleStyle: {
            color: '#000'
          }}
        }></Stack.Screen>

        <Stack.Screen name='MRU' component={MruCalculateScreen} options={
          {headerTintColor: '#D91040',
          headerTitle: 'MRU',
          headerTitleStyle: {
            color: '#000'
          }}
        }></Stack.Screen>

        <Stack.Screen name='MRUA' component={MruaCalculateScreen} options={
          {headerTintColor: '#D91040',
          headerTitle: 'MRUA',
          headerTitleStyle: {
            color: '#000'
          }}
        }></Stack.Screen>

      </Stack.Navigator>
    </NavigationContainer>
  );
};