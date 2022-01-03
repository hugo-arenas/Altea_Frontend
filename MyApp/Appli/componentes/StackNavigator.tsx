import React from 'react';

import { createStackNavigator } from '@react-navigation/stack';
import { noticiaScreen } from '../screens/noticiaScreen';
import RegistroScreen from '../screens/RegistroScreen';

export type RootStackParams = {
    noticiaScreen: { id: number, nombre: string },
    RegistroScreen: undefined,
}


const Stack = createStackNavigator<RootStackParams>();

export const StackNavigator = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerStyle: {
          elevation: 0,
          shadowColor: 'transparent'
        },
        cardStyle: {
          backgroundColor: 'white'
        }
      }}
    >
      
      <Stack.Screen name="noticiaScreen" component={ noticiaScreen } />
      <Stack.Screen name="RegistroScreen" component={ RegistroScreen } />
    </Stack.Navigator>
  );
}