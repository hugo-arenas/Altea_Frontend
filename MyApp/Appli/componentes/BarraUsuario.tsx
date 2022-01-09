import * as React from 'react';
import { Image, StyleSheet, Text, View,} from 'react-native';

import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import vistaVacia from '../screens/vistaVacia';
import VistaPerfilUsuario from '../screens/VistaPerfilUsuario';
import Login from '../screens/Login'
import { LogoTitle } from '../componentes/LogoTitle';
import principalScreen from '../screens/principalScreen';

import Chatbot from '../screens/Chatbot';
import { StackScreenProps } from '@react-navigation/stack';
import sintomasScreen from '../screens/sintomasScreen';

const Tab = createBottomTabNavigator();

interface RouterParams{
  nombre: string;
  correo: string
}

interface Props extends StackScreenProps<any,any>{};

export const BarraUsuario = ({route}: Props) => {
  const params = route.params as RouterParams;
  console.log(params.correo);
  const correo = params.correo;
  return (
    <Tab.Navigator screenOptions={({ route }) => ({
        tabBarStyle: {
          backgroundColor: '#D49AED',
          height: 60,
      },
      tabBarShowLabel: false
      
    })}>
      <Tab.Screen name='Home'component={principalScreen} options={{
          tabBarIcon: ({focused}) =>(
              <View style={{alignItems:'center', justifyContent: 'center'}}>
                  <Image source={require('@recursos/images/casa.png')}
                  style={{ height:30, width:30}}/>
              </View>
          ),
          headerStyle: {
            backgroundColor: '#D49AED',
          },
          headerTitle: (props)  => <LogoTitle {...props} />,

          headerShown: true, //para ocultar la barra superior que indica la pestaña en la que nos encontramos
      }}/>
      <Tab.Screen name='lista'component={sintomasScreen} options={{
          tabBarIcon: ({focused}) =>(
              <View style={{alignItems:'center', justifyContent: 'center'}}>
                  <Image source={require('@recursos/images/list.png')}
                  style={{ height:30, width:30}}/>
              </View>
          ),
          headerStyle: {
            backgroundColor: '#D49AED',
          },
          headerTitle: (props)  => <LogoTitle {...props} />,

          headerShown: true, //para ocultar la barra superior que indica la pestaña en la que nos encontramos
      }}/>
      <Tab.Screen name="perfil" component={VistaPerfilUsuario} initialParams={{correo}} options={{
          tabBarIcon: ({focused}) =>(
              <View style={{alignItems:'center', justifyContent: 'center'}}>
                  <Image source={require('@recursos/images/user.png')}
                  style={{ height:30, width:30}}/>
              </View>
          ),
          headerStyle: {
            backgroundColor: '#D49AED',
          },
          headerTitle: (props)  => <LogoTitle {...props} />,

          headerShown: true, //para ocultar la barra superior que indica la pestaña en la que nos encontramos
      }}/>
      <Tab.Screen name="Chatbot"component={Chatbot} options={{
          tabBarIcon: ({focused}) =>(
              <View style={{alignItems:'center', justifyContent: 'center'}}>
                  <Image source={require('@recursos/images/chatbot.png')}
                  style={{ height:30, width:30}}/>
              </View>
          ),
          headerStyle: {
            backgroundColor: '#D49AED',
          },
          headerTitle: (props)  => <LogoTitle {...props} />,

          headerShown: true,
      }}/>
    </Tab.Navigator>
  );
}

export default BarraUsuario;