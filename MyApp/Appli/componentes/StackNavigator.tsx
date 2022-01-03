import React from 'react'
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import RegistroScreen from '../screens/RegistroScreen';

import BarraEmpresa from '../componentes/BarraEmpresa';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name='BarraEmpresa' component={BarraEmpresa} options={{
          headerShown: false, //para ocultar la barra superior que indica la pestaña en la que nos encontramos
      }}/>
        <Stack.Screen name='Registro' component={RegistroScreen}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
}