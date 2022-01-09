import React from 'react'
import { Image, ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { Colors } from 'react-native/Libraries/NewAppScreen';
import { GradientBackground } from '../componentes/GradientBackground';

const resultadoSintomasScreen = () => {
    return (
        <GradientBackground>
            <Text style={stylesTwo.formulario}> Resultado monitoreo emocional</Text>
            <ScrollView >
                <Text style={{marginHorizontal:20, marginTop:5}}>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque ut vulputate neque. Etiam volutpat, turpis sed sodales ultrices, augue neque auctor lectus, sed malesuada nisi augue sed quam. Suspendisse id velit nec mauris mattis tempus. Suspendisse pretium tincidunt ipsum, eu suscipit odio elementum vitae. Etiam id felis non tortor condimentum elementum. Morbi maximus ornare purus ac efficitur. Nullam sodales semper viverra. Aenean a euismod nisl, at sodales dolor.

Phasellus vehicula, quam sit amet maximus fermentum, massa tellus tristique ligula, sit amet sodales ex tellus sit amet nunc. Proin scelerisque magna eu efficitur rutrum. Duis accumsan posuere neque, vitae blandit enim fringilla in. Vestibulum vestibulum at justo quis faucibus. Nam faucibus purus non ultricies pharetra. Integer feugiat ex nec enim tincidunt malesuada. In auctor vehicula aliquet. Vivamus dictum euismod quam at venenatis. Sed sodales est in arcu gravida viverra. Fusce id lectus augue. Etiam convallis quam leo, sit amet elementum nisl 
scelerisque at. Proin molestie interdum velit, sit amet porttitor quam mattis sed. Nulla facilisi.
                </Text>

                <View style={loginStyles.logo}>
                    
                <Image source={require('@recursos/images/recomendacion.png')}
                    style={{ height:150, width:300, resizeMode: 'stretch', borderRadius:3}}/> 
                </View>
            </ScrollView>
        </GradientBackground>
    )
    
};
export default resultadoSintomasScreen;

const stylesTwo = StyleSheet.create({
 
    formulario: {
      color: '#4F4F4F',
      fontSize: 25,
      marginTop: 20,
      fontWeight: '600',
      padding: 4,
      paddingRight: 12,
      textAlign: 'center',
    }
   
});

const loginStyles = StyleSheet.create({

    logo: {
        paddingTop: 50,
        alignItems: 'center',
        marginBottom: 15,
        
    },
})