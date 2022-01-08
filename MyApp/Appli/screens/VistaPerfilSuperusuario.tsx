import React,{useEffect, useState} from "react";
import { GradientBackground } from '../componentes/GradientBackground';
import {
    Text,
    View,
    TouchableOpacity,
    Image,
    Alert,
    TextInput,
    StyleSheet,
} from 'react-native'

import { StackScreenProps } from "@react-navigation/stack";

interface RouterParams{
    nombre: string;
    correo: string
}

interface Props extends StackScreenProps<any,any>{};

const VistaPerfil = ({navigation,route}: Props) => {

    const params = route.params as RouterParams;
    const correo = params.correo;

    const [superusuario, setSuperusuario] = useState([])
    const loadTasks = async () => {
        const res = await fetch(`http://10.0.2.2:8080/superusuarios/${correo}`)
        const data = await res.json()
        console.log(data)
        setSuperusuario(data)
    }

    useEffect(() => {
        loadTasks()
    },[])
    
    return (
        <GradientBackground>
        <View style={[mainStyles.container, {padding: 50}]}>
            <View style={loginStyles.logo}>
                <Image source={require('@recursos/images/perfil.png')}
                style={{ height:200, width:200}}/>
            </View>

            <View style={mainStyles.containerCenter}>
                <Text style={Txtformat.tamanioTitulos}>Nombre       <Text style={Txtformat.tamanioInfo}>{superusuario.nombre}</Text> </Text>
            </View>

            <View style={mainStyles.containerCenter}>
                <Text style={Txtformat.tamanioTitulos}>Correo   <Text style={Txtformat.tamanioInfo}>{correo}</Text> </Text>
            </View>

            <Text style={{fontSize: 15, color:'white'}}>Clientes</Text>
            <TouchableOpacity onPress={ () => navigation.navigate('listadoClientesScreen')}>
                <Image source={require('@recursos/images/clientesLogo.png')}
                    style={styleImage.imageRecomendaciones}/>
            </TouchableOpacity>

        </View>
        </GradientBackground>
    )
    
};
export default VistaPerfil;

const mainStyles = StyleSheet.create({

    container: {
        flex: 1,
        alignItems: 'center',
        backgroundColor: 'linear-gradient(180deg, #FF814B 0%, #FAC3AC 100%)',
    },

    containerCenter: {
        marginBottom: 25,
        backgroundColor: '#ffff',
        height: 50,
        width: 300,
        borderRadius: 50,

    },


    titleText: {
        fontSize: 35,
        marginTop: 15,
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

const TamBtn = StyleSheet.create({
    tamanio: {
        height: 60, 
        width: 60, 
        marginTop: 5, 
        backgroundColor: '#060544',
        borderTopLeftRadius: 50,
        borderTopRightRadius: 50,
        borderBottomRightRadius: 50,
        borderBottomLeftRadius: 50,
    },

})

const Txtformat = StyleSheet.create({

    tamanioTitulos: {
        fontSize: 15, 
        color: '#808080',
        marginLeft: 20,
        fontWeight: 'bold',
        marginTop: 8,
    },
    tamanioInfo:{
        fontSize: 20, 
        color: '#000', 
        fontWeight: 'bold',
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
    input: {
        height: 40,
        width: 250,
        padding: 10,
        backgroundColor: '#FFF',
        textAlign: 'center',
        borderTopLeftRadius: 50,
        borderTopRightRadius: 50,
        borderBottomRightRadius: 50,
        borderBottomLeftRadius: 50,
        marginBottom: 15
    },
  });


  const styleImage = StyleSheet.create({
    imageRecomendaciones: {
        height:80, 
        width:80, 
        marginRight: 10, resizeMode: 'stretch',
        display:"flex",
        borderTopLeftRadius: 100,
        borderTopRightRadius: 100,
        borderBottomRightRadius: 100,
        borderBottomLeftRadius: 100,
    }
  });