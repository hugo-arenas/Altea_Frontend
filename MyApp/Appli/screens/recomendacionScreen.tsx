import { StackScreenProps } from '@react-navigation/stack';
import React from 'react'
import { ScrollView, StatusBar, Text, View } from 'react-native';
import { StyleSheet } from 'react-native';
import { GradientBackground } from '../componentes/GradientBackground';

interface RouterParams{
    id: number;
    nombre: string
}
interface Props extends StackScreenProps<any,any>{};

export const recomendacionScreen = ( {route}: Props) => {

const params = route.params as RouterParams;
return (
    <GradientBackground>
        <ScrollView style={styles.scrollView}>
    <Text style={styles.text}>
      {
          JSON.stringify(params.nombre, null, 3)
      }
    </Text>

  </ScrollView>
    </GradientBackground>
)
}

export default recomendacionScreen;

const styles = StyleSheet.create({
    container: {
      flex: 1,
      paddingTop: StatusBar.currentHeight,
    },
    scrollView: {
      backgroundColor: 'rgba(0,0,0,0.05)',
      marginHorizontal: 20,
    },
    text: {
      fontSize: 22,
    },
  });