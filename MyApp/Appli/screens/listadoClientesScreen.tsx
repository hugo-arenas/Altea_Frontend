import React from 'react'
import { Image, ScrollView, StatusBar, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { GradientBackground } from '../componentes/GradientBackground';

const listadoClientesScreen = () => {
    return (
        <GradientBackground>
            <Text style = {mainStyles.titleText}>Clientes</Text>
            <ScrollView style={styles.scrollView}>


                <TouchableOpacity >
                <Image source={require('@recursos/images/noticiaUno.png')}
                    style={styleImage.imageNoticias}/>
                </TouchableOpacity>

                <TouchableOpacity >
                <Image source={require('@recursos/images/noticiaDos.png')}
                    style={styleImage.imageNoticias}/>
                </TouchableOpacity>

                <TouchableOpacity >
                <Image source={require('@recursos/images/noticiaTres.png')}
                    style={styleImage.imageNoticias}/>
                </TouchableOpacity>

                <TouchableOpacity >
                <Image source={require('@recursos/images/noticiaUno.png')}
                    style={styleImage.imageNoticias}/>
                </TouchableOpacity>

                <TouchableOpacity >
                <Image source={require('@recursos/images/noticiaDos.png')}
                    style={styleImage.imageNoticias}/>
                </TouchableOpacity>

                <TouchableOpacity >
                <Image source={require('@recursos/images/noticiaTres.png')}
                    style={styleImage.imageNoticias}/>
                </TouchableOpacity>

                <TouchableOpacity >
                <Image source={require('@recursos/images/noticiaUno.png')}
                    style={styleImage.imageNoticias}/>
                </TouchableOpacity>

                <TouchableOpacity >
                <Image source={require('@recursos/images/noticiaDos.png')}
                    style={styleImage.imageNoticias}/>
                </TouchableOpacity>

                <TouchableOpacity >
                <Image source={require('@recursos/images/noticiaTres.png')}
                    style={styleImage.imageNoticias}/>
                </TouchableOpacity>

                <TouchableOpacity >
                <Image source={require('@recursos/images/noticiaUno.png')}
                    style={styleImage.imageNoticias}/>
                </TouchableOpacity>

                <TouchableOpacity >
                <Image source={require('@recursos/images/noticiaDos.png')}
                    style={styleImage.imageNoticias}/>
                </TouchableOpacity>

                <TouchableOpacity >
                <Image source={require('@recursos/images/noticiaTres.png')}
                    style={styleImage.imageNoticias}/>
                </TouchableOpacity>

                

      </ScrollView>
        </GradientBackground>
    )
    
};
export default listadoClientesScreen;

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


  const styleImage = StyleSheet.create({
    imageRecomendaciones: {
        height:150, 
        width:300, 
        marginRight: 10, resizeMode: 'stretch',
        display:"flex",
        borderRadius:3,
    },
    imageNoticias: {
        height:100, 
        width:400, 
        marginTop: 15, resizeMode: 'stretch',
        display:"flex",
        borderRadius:3,
    },
  });