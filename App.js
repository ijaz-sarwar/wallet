import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import 'react-native-gesture-handler';
import LoginScreen from './screens/LoginScreen';
import RegistrationScreen from './screens/RegistrationScreen';

import CardItem from './screens/CardItem.js';
import TimeStamp from './screens/TimeStamp';


const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          headerShown: false,
        }}>
        <Stack.Screen name="LoginScreen" component={LoginScreen} />
        <Stack.Screen name="RegistrationScreen" component={RegistrationScreen} />
        <Stack.Screen name="CardItem" component={CardItem} />
        <Stack.Screen name="TimeStamp" component={TimeStamp} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
