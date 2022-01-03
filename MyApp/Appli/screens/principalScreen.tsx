import { NavigationContainer } from '@react-navigation/native';
import { StackScreenProps } from '@react-navigation/stack';
import React/*, {useEffect, useState} */from 'react'
import { Image, ScrollView, StyleSheet, Text, View, ImageBackground, TouchableOpacity } from 'react-native';
import { GradientBackground } from '../componentes/GradientBackground';
import {StackNavigator} from '../componentes/StackNavigator';


interface Props extends StackScreenProps<any,any>{};

const principalScreen = ({navigation}: Props) => {
   
    
    return (
        <GradientBackground>
            <Text style = {mainStyles.titleText}>Noticias</Text>
            <ScrollView contentContainerStyle={styles.contentContainer} horizontal={true}>

                <TouchableOpacity >
                <Image source={require('@recursos/images/noticiaUno.png')}
                    style={styleImage.imageRecomendaciones}/>
                </TouchableOpacity>

                <TouchableOpacity>
                <Image source={require('@recursos/images/noticiaDos.png')}
                    style={styleImage.imageRecomendaciones}/>
                </TouchableOpacity>

                <TouchableOpacity>
                <Image source={require('@recursos/images/noticiaTres.png')}
                    style={styleImage.imageRecomendaciones}/>
                </TouchableOpacity>

                <TouchableOpacity>
                <Image source={require('@recursos/images/noticiaCuatro.png')}
                    style={styleImage.imageRecomendaciones}/>
                </TouchableOpacity>

                <TouchableOpacity>
                <Image source={require('@recursos/images/noticiaCinco.png')}
                    style={styleImage.imageRecomendaciones}/>
                </TouchableOpacity>

                <TouchableOpacity>
                <Image source={require('@recursos/images/noticiaSeis.png')}
                    style={styleImage.imageRecomendaciones}/>
                </TouchableOpacity>

                <TouchableOpacity>
                <Image source={require('@recursos/images/noticiaSiete.png')}
                    style={styleImage.imageRecomendaciones}/>
                </TouchableOpacity>

            </ScrollView>
                        
            

            <Text style = {mainStyles.titleText}>Recomendaciones</Text>
            <ScrollView contentContainerStyle={styles.contentContainer} horizontal={true}>
            <TouchableOpacity>
                <Image source={require('@recursos/images/noticiaUno.png')}
                    style={styleImage.imageRecomendaciones}/>
                </TouchableOpacity>
              
                <TouchableOpacity>
                <Image source={require('@recursos/images/noticiaDos.png')}
                    style={styleImage.imageRecomendaciones}/>
                </TouchableOpacity>

                <TouchableOpacity>
                <Image source={require('@recursos/images/noticiaTres.png')}
                    style={styleImage.imageRecomendaciones}/>
                </TouchableOpacity>

                <TouchableOpacity>
                <Image source={require('@recursos/images/noticiaCuatro.png')}
                    style={styleImage.imageRecomendaciones}/>
                </TouchableOpacity>

                <TouchableOpacity>
                <Image source={require('@recursos/images/noticiaCinco.png')}
                    style={styleImage.imageRecomendaciones}/>
                </TouchableOpacity>

                <TouchableOpacity>
                <Image source={require('@recursos/images/noticiaSeis.png')}
                    style={styleImage.imageRecomendaciones}/>
                </TouchableOpacity>

                <TouchableOpacity>
                <Image source={require('@recursos/images/noticiaSiete.png')}
                    style={styleImage.imageRecomendaciones}/>
                </TouchableOpacity>
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

const styles = StyleSheet.create({
    contentContainer: {
      maxHeight: 200,
      backgroundColor: 'rgba(0,0,0,0.05)',
    }
  });

  const styleImage = StyleSheet.create({
    imageRecomendaciones: {
        height:150, 
        width:300, 
        marginRight: 10, resizeMode: 'stretch',
        display:"flex",
        borderRadius:3,
    },
    imageNoticias: {
        height:150, 
        width:300,
        borderRadius:3,
        marginRight: 0.5,
    }
  });
