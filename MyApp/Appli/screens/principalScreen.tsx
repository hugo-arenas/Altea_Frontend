import { NavigationContainer } from '@react-navigation/native';
import { StackScreenProps } from '@react-navigation/stack';
import React from 'react'
import { Image, ScrollView, StyleSheet, Text, View, ImageBackground, TouchableOpacity } from 'react-native';
import { GradientBackground } from '../componentes/GradientBackground';


interface Props extends StackScreenProps<any,any>{};

const principalScreen = ({navigation}: Props) => {
   
    const customDataNoticias = require('@recursos/noticias.json');

    const customDataRecomendaciones = require('@recursos/recomendaciones.json');

    return (
        <GradientBackground>
            <Text style = {mainStyles.titleText}>Material Psicoeducativo</Text>
            <ScrollView contentContainerStyle={styles.contentContainer} horizontal={true}>

                <TouchableOpacity onPress={ () => navigation.navigate('Noticia',  {
                    id: customDataNoticias.id[0],
                    title:customDataNoticias.title[0],
                    cuerpo:customDataNoticias.cuerpo[0]
                })} >
                <Image source={require('@recursos/images/noticiaUno.png')}
                    style={styleImage.imageNoticias}/>
                </TouchableOpacity>

                <TouchableOpacity onPress={ () => navigation.navigate('Noticia', {
                    id: customDataNoticias.id[1],
                    title:customDataNoticias.title[1],
                    cuerpo:customDataNoticias.cuerpo[1]
                })}>
                <Image source={require('@recursos/images/noticiaDos.png')}
                    style={styleImage.imageNoticias}/>
                </TouchableOpacity>

                <TouchableOpacity onPress={ () => navigation.navigate('Noticia', {
                    id: customDataNoticias.id[2],
                    title:customDataNoticias.title[2],
                    cuerpo:customDataNoticias.cuerpo[2]
                })}>
                <Image source={require('@recursos/images/noticiaTres.png')}
                    style={styleImage.imageNoticias}/>
                </TouchableOpacity>

                <TouchableOpacity onPress={ () => navigation.navigate('Noticia', {
                    id: customDataNoticias.id[3],
                    title:customDataNoticias.title[3],
                    cuerpo:customDataNoticias.cuerpo[3]
                })}>
                <Image source={require('@recursos/images/noticiaCuatro.png')}
                    style={styleImage.imageNoticias}/>
                </TouchableOpacity>

                <TouchableOpacity onPress={ () => navigation.navigate('Noticia', {
                    id: customDataNoticias.id[4],
                    title:customDataNoticias.title[4],
                    cuerpo:customDataNoticias.cuerpo[4]
                })}>
                <Image source={require('@recursos/images/noticiaCinco.png')}
                    style={styleImage.imageNoticias}/>
                </TouchableOpacity>

                <TouchableOpacity onPress={ () => navigation.navigate('Noticia', {
                    id: customDataNoticias.id[5],
                    title:customDataNoticias.title[5],
                    cuerpo:customDataNoticias.cuerpo[5]
                })}>
                <Image source={require('@recursos/images/noticiaSeis.png')}
                    style={styleImage.imageNoticias}/>
                </TouchableOpacity>

                <TouchableOpacity onPress={ () => navigation.navigate('Noticia', {
                    id: customDataNoticias.id[6],
                    title:customDataNoticias.title[6],
                    cuerpo:customDataNoticias.cuerpo[6]
                })}>
                <Image source={require('@recursos/images/noticiaSiete.png')}
                    style={styleImage.imageNoticias}/>
                </TouchableOpacity>

            </ScrollView>
                        
            

            <Text style = {mainStyles.titleText}>Recomendaciones</Text>
            <ScrollView contentContainerStyle={styles.contentContainer} horizontal={true}>
            <TouchableOpacity onPress={ () => navigation.navigate('RecomendacionScreen',  {
                    id: customDataRecomendaciones.id[0],
                    title:customDataRecomendaciones.title[0],
                    cuerpo: customDataRecomendaciones.cuerpo[0]
                })}>
                <Image source={require('@recursos/images/recomendacionUno.png')}
                    style={styleImage.imageRecomendaciones}/>
                </TouchableOpacity>
              
                <TouchableOpacity onPress={ () => navigation.navigate('RecomendacionScreen',  {
                    id: customDataRecomendaciones.id[1],
                    title:customDataRecomendaciones.title[1],
                    cuerpo: customDataRecomendaciones.cuerpo[1]
                })}>
                <Image source={require('@recursos/images/recomendacionDos.png')}
                    style={styleImage.imageRecomendaciones}/>
                </TouchableOpacity>

                <TouchableOpacity onPress={ () => navigation.navigate('RecomendacionScreen',  {
                    id: customDataRecomendaciones.id[2],
                    title:customDataRecomendaciones.title[2],
                    cuerpo: customDataRecomendaciones.cuerpo[2]
                })}>
                <Image source={require('@recursos/images/noticiaTres.png')}
                    style={styleImage.imageRecomendaciones}/>
                </TouchableOpacity>

                <TouchableOpacity onPress={ () => navigation.navigate('RecomendacionScreen',  {
                    id: customDataRecomendaciones.id[3],
                    title:customDataRecomendaciones.title[3],
                    cuerpo: customDataRecomendaciones.cuerpo[3]
                })}>
                <Image source={require('@recursos/images/noticiaCuatro.png')}
                    style={styleImage.imageRecomendaciones}/>
                </TouchableOpacity>

                <TouchableOpacity onPress={ () => navigation.navigate('RecomendacionScreen',  {
                    id: customDataRecomendaciones.id[4],
                    title:customDataRecomendaciones.title[4],
                    cuerpo: customDataRecomendaciones.cuerpo[4]
                })}>
                <Image source={require('@recursos/images/noticiaCinco.png')}
                    style={styleImage.imageRecomendaciones}/>
                </TouchableOpacity>

                <TouchableOpacity onPress={ () => navigation.navigate('RecomendacionScreen',  {
                    id: customDataRecomendaciones.id[5],
                    title:customDataRecomendaciones.title[5],
                    cuerpo: customDataRecomendaciones.cuerpo[5]
                })}>
                <Image source={require('@recursos/images/noticiaSeis.png')}
                    style={styleImage.imageRecomendaciones}/>
                </TouchableOpacity>

                <TouchableOpacity onPress={ () => navigation.navigate('RecomendacionScreen',  {
                    id: customDataRecomendaciones.id[6],
                    title:customDataRecomendaciones.title[6],
                    cuerpo: customDataRecomendaciones.cuerpo[6]
                })}>
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
    },

    containerCenter: {
        paddingTop: 10,
        alignItems: 'center',
        marginBottom: 25,
    },

    titleText: {
        fontSize: 25,
        marginTop: 15,
        marginBottom: 15,
        fontFamily: "Roboto-Medium",
        color: '#FFFF',
        fontWeight: 'bold',
    },

    descriptionText: {
        fontSize: 15,
        marginTop: 130,
        marginBottom: 15,
        fontFamily: "Roboto-Medium",
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
        fontFamily: 'Roboto-Medium',
    },

    txtTransparent: {
        fontSize: 14,
        fontFamily: 'Roboto-Medium',
    },
    
})

const styles = StyleSheet.create({
    contentContainer: {
      maxHeight: 150,
      backgroundColor: 'rgba(0,0,0,0.2)',
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
        marginRight: 10, resizeMode: 'stretch',
        display:"flex",
        borderRadius:3,
    },
  });
