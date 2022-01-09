import React from 'react'
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import RegistroScreen from '../screens/RegistroScreen';
import BarraEmpresa from '../componentes/BarraEmpresa';
import noticiaScreen from '../screens/noticiaScreen';
import principalScreen from '../screens/principalScreen';
import recomendacionScreen from '../screens/recomendacionScreen';
import { LogoTitle } from './LogoTitle';
import BarraUsuario from './BarraUsuario';
import estadisticasScreen from '../screens/estadisticasScreen';
import BarraSuperusuario from './BarraSuperusuario';
import Login from '../screens/Login';
import listadoClientesScreen from '../screens/listadoClientesScreen';
import LoginEmpresa from '../screens/LoginEmpresa';
import VistaPerfilEmpresa from '../screens/VistaPerfilEmpresa';
import VistaPerfilUsuario from '../screens/VistaPerfilUsuario';
import LoginSuper from '../screens/LoginSuper';
import VistaPerfilSuperusuario from '../screens/VistaPerfilSuperusuario';
import sintomasScreen from '../screens/sintomasScreen';
import resultadoSintomasScreen from '../screens/resultadoSintomasScreen';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        
        initialRouteName='Login' //Indica la ventana con la cual inicia la aplicación

      >
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
        <Stack.Screen name='BarraUsuario' component={BarraUsuario} options={{
          headerShown: false, //para ocultar la barra superior que indica la pestaña en la que nos encontramos
      }}/>

        <Stack.Screen name='EstadisticasScreen' component={estadisticasScreen} options={{headerStyle: {
          backgroundColor: '#D49AED',
        },
        headerTitle: (props)  => <LogoTitle {...props} />,
        
        headerShown: true,}}/>

      <Stack.Screen name='BarraSuperusuario' component={BarraSuperusuario} options={{
          headerShown: false, //para ocultar la barra superior que indica la pestaña en la que nos encontramos
      }}/>

      <Stack.Screen name='Login' component={Login} options={{
          headerShown: false, //para ocultar la barra superior que indica la pestaña en la que nos encontramos
      }}/>

      <Stack.Screen name='RegistroScreen' component={RegistroScreen} options={{
          headerShown: false, //para ocultar la barra superior que indica la pestaña en la que nos encontramos
      }}/>

      <Stack.Screen name='listadoClientesScreen' component={listadoClientesScreen} options={{
          headerShown: false, //para ocultar la barra superior que indica la pestaña en la que nos encontramos
      }}/>

      <Stack.Screen name='LoginEmpresa' component={LoginEmpresa} options={{
          headerShown: false, //para ocultar la barra superior que indica la pestaña en la que nos encontramos
      }}/>

      <Stack.Screen name='VistaPerfilEmpresa' component={VistaPerfilEmpresa} options={{
          headerShown: false, //para ocultar la barra superior que indica la pestaña en la que nos encontramos
      }}/>

      <Stack.Screen name='VistaPerfilUsuario' component={VistaPerfilUsuario} options={{
          headerShown: false, //para ocultar la barra superior que indica la pestaña en la que nos encontramos
      }}/>

      <Stack.Screen name='LoginSuper' component={LoginSuper} options={{
          headerShown: false, //para ocultar la barra superior que indica la pestaña en la que nos encontramos
      }}/>
      <Stack.Screen name='VistaPerfilSuperusuario' component={VistaPerfilSuperusuario} options={{
          headerShown: false, //para ocultar la barra superior que indica la pestaña en la que nos encontramos
      }}/>
      <Stack.Screen name='sintomasScreen' component={sintomasScreen} options={{
          headerShown: false, //para ocultar la barra superior que indica la pestaña en la que nos encontramos
      }}/>
      <Stack.Screen name='resultadoSintomasScreen' component={resultadoSintomasScreen} options={{headerStyle: {
          backgroundColor: '#D49AED',
        },
        headerTitle: (props)  => <LogoTitle {...props} />,
        
        headerShown: true,}}/>
    
      </Stack.Navigator>
    </NavigationContainer>
  );
}