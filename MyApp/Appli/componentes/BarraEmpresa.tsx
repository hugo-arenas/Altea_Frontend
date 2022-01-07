import * as React from 'react';
import { Image, StyleSheet, Text, View,} from 'react-native';

import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import VistaPerfilEmpresa from '../screens/VistaPerfilEmpresa';
import principalScreen from '../screens/principalScreen';
import { LogoTitle } from './LogoTitle';
import { StackScreenProps } from '@react-navigation/stack';
import noticiaScreen from '../screens/noticiaScreen';
const Tab = createBottomTabNavigator();

interface RouterParams{
  nombre: string;
  correo: string
}

interface Props extends StackScreenProps<any,any>{};

export const BarraEmpresa = ({route}: Props) => {
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
      <Tab.Screen name="Perfil" component={VistaPerfilEmpresa} initialParams={{correo}} options={{
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
      }}
      />
    </Tab.Navigator>
  );
}

export default BarraEmpresa;