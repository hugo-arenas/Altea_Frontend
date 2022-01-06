import React from 'react'
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import RegistroScreen from '../screens/RegistroScreen';
import BarraEmpresa from '../componentes/BarraEmpresa';
import noticiaScreen from '../screens/noticiaScreen';
import principalScreen from '../screens/principalScreen';
import recomendacionScreen from '../screens/recomendacionScreen';
import { LogoTitle } from './LogoTitle';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name='BarraEmpresa' component={BarraEmpresa} options={{
          headerShown: false, //para ocultar la barra superior que indica la pestaña en la que nos encontramos
      }}/>
        <Stack.Screen name='Registro' component={RegistroScreen}/>
        <Stack.Screen name='Noticia' component={noticiaScreen}options={{headerStyle: {
          backgroundColor: '#D49AED',
        },
        headerTitle: (props)  => <LogoTitle {...props} />,
        
        headerShown: true,}}
        />
        <Stack.Screen name='PrincipalScreen' component={principalScreen}/>
        <Stack.Screen name='RecomendacionScreen' component={recomendacionScreen}options={{headerStyle: {
          backgroundColor: '#D49AED',
        },
        headerTitle: (props)  => <LogoTitle {...props} />,
        
        headerShown: true,}}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
}