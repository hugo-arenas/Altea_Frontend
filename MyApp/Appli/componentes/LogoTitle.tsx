import React from 'react'
import { Image, StyleSheet, View } from 'react-native';

interface Props {
    children: JSX.Element | JSX.Element[]
}

export const LogoTitle = ({children}: Props) => {
    return (
        <Image
          style={{ width: 140, height: 50, flex:1, resizeMode: 'contain' }}
          source={require('@recursos/images/logoLargo.png')}
        />
        
      );
}
