import React/*, {useEffect, useState} */from 'react'
import { Image, ScrollView, StyleSheet, Text, View } from 'react-native';
import { GradientBackground } from '../componentes/GradientBackground';
//import * as Font from 'expo-font'


const principalScreen = () => {
    /*const [fontsLoaded, setFontsLoaded] = useState(false);

    useEffect(() => {
        if(!fontsLoaded){
            Font.loadAsync({
                'roboto-medium': require('@recursos/fonts/Roboto-Medium.ttf')
            });

        }
    });*/
    return (
        <GradientBackground>
            <Text style = {mainStyles.titleText}>Noticias</Text>
            <ScrollView contentContainerStyle={styles.contentContainer} horizontal={true}>
            <Image source={require('@recursos/images/noticiaUno.png')}
                    style={{ height:250, width:250}}/>  
            
            <Image source={require('@recursos/images/noticiaDos.png')}
                    style={{ height:250, width:250}}/>  

            </ScrollView>
        </GradientBackground>
    )
    
};
export default principalScreen;


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

const TamBtn = StyleSheet.create({
    tamanio: {
        height: 40, 
        width: 200, 
        marginTop: 5, 
        backgroundColor: '#060544',
        borderTopLeftRadius: 50,
        borderTopRightRadius: 50,
        borderBottomRightRadius: 50,
        borderBottomLeftRadius: 50,
    },

})

const Txtformat = StyleSheet.create({

    tamanio: {
        fontSize: 20, 
        color: '#fff', 
        textAlign: 'center', 
        marginTop: 5,
    }
})

const loginStyles = StyleSheet.create({

    logo: {
        paddingTop: 50,
        alignItems: 'center',
        marginBottom: 15,
    },
})

const styles = StyleSheet.create({
    contentContainer: {
      paddingVertical: 20
    }
  });