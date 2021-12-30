import * as React from 'react';
import { Image, StyleSheet, Text, View,} from 'react-native';

import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import vistaVacia from '../screens/vistaVacia';

import VistaPerfilEmpresa from '../screens/VistaPerfilEmpresa';
const Tab = createBottomTabNavigator();

function MyTabs() {
  return (
    <Tab.Navigator screenOptions={({ route }) => ({
        tabBarStyle: {
          backgroundColor: '#D49AED',
          height: 60,
      },
      tabBarShowLabel: false
      
    })}>
      <Tab.Screen name='Home'component={vistaVacia} options={{
          tabBarIcon: ({focused}) =>(
              <View style={{alignItems:'center', justifyContent: 'center'}}>
                  <Image source={require('@recursos/images/casa.png')}
                  style={{ height:30, width:30}}/>
              </View>
          ),
          headerShown: true, //para ocultar la barra superior que indica la pestaña en la que nos encontramos
      }}/>
      <Tab.Screen name="Perfil Empresa" component={VistaPerfilEmpresa} options={{
          tabBarIcon: ({focused}) =>(
              <View style={{alignItems:'center', justifyContent: 'center'}}>
                  <Image source={require('@recursos/images/user.png')}
                  style={{ height:30, width:30}}/>
              </View>
          ),
          headerShown: false, //para ocultar la barra superior que indica la pestaña en la que nos encontramos
      }}/>
      
    </Tab.Navigator>
  );
}

export default function App() {
  return (
    <NavigationContainer>
      <MyTabs/>
    </NavigationContainer>
  );
}
