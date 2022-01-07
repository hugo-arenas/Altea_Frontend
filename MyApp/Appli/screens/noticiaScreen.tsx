import React from 'react'
import { ScrollView, StatusBar, Text, View } from 'react-native';
import { StyleSheet } from 'react-native';
import { GradientBackground } from '../componentes/GradientBackground';
import { StackScreenProps } from '@react-navigation/stack';

interface RouterParams{
    id: number;
    nombre: string
}
interface Props extends StackScreenProps<any,any>{};

export const noticiaScreen = ( {route}: Props) => {


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

export default noticiaScreen;

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