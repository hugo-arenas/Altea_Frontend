import { NavigationContainer } from '@react-navigation/native';
import { StackScreenProps } from '@react-navigation/stack';
import React from 'react'
import { Image, ScrollView, StyleSheet, Text, View, ImageBackground, TouchableOpacity } from 'react-native';
import { GradientBackground } from '../componentes/GradientBackground';


interface Props extends StackScreenProps<any,any>{};

const estadisticasScreen = ({navigation}: Props) => {
   
    
    return (
        <GradientBackground>
            <Text style = {mainStyles.titleText}>Estadisticas</Text>
            <View style={loginStyles.logo}>
                <Image source={require('@recursos/images/estadisticasImage.png')}
                style={loginStyles.logo}/>    
            </View>
        </GradientBackground>
    )
    
};
export default estadisticasScreen;


const mainStyles = StyleSheet.create({

    container: {
        flex: 1,
        alignItems: 'center',
        backgroundColor: 'linear-gradient(180deg, #FF814B 0%, #FAC3AC 100%)',
    },

    containerCenter: {
        paddingTop: 10,
        alignItems: 'center',
        marginBottom: 25,
    },

    titleText: {
        fontSize: 35,
        marginTop: 15,
        marginBottom: 15,
        fontFamily: "roboto-medium",
        color: '#FFFF',
        fontWeight: 'bold',
    },

    descriptionText: {
        fontSize: 15,
        marginTop: 130,
        marginBottom: 15,
        fontFamily: "Poppins-SemiBold",
        color: '#FFFF',
        fontWeight: 'bold',
    },
    btnMain: {
        width: 280,
        marginTop: 40,
        marginBottom: 20,
        alignItems: 'center',
        borderRadius: 60
    },

    btnTransparent: {
        backgroundColor: 'rgba(52, 52, 52, 0)',
        width: 280,
        borderWidth: 2,
        marginBottom: 20,
        borderRadius: 60
    },

    btntxt: {
        textAlign: 'center',
        fontSize: 17,
        paddingVertical: 15,
        fontFamily: 'Poppins-Bold',
    },

    txtTransparent: {
        fontSize: 14,
        fontFamily: 'Poppins-Light',
    },
    
})

  const loginStyles = StyleSheet.create({

    logo: {
        height:550, 
        width:400, 
        marginRight: 10, resizeMode: 'stretch',
        display:"flex",
        borderRadius:3,
    },
})