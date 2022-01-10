import React, { useState, useContext} from 'react'
import LinearGradient from 'react-native-linear-gradient';
import { GradientBackground } from '../componentes/GradientBackground';
import {
    Text,
    View,
    TouchableOpacity,
    Image,
    Alert,
    TextInput,
    StyleSheet,
    KeyboardAvoidingView,
} from 'react-native'

import { StackScreenProps } from '@react-navigation/stack';
import BarraUsuario from '../componentes/BarraUsuario';

interface Props extends StackScreenProps<any,any>{};

const Login = ({navigation}: Props) => {

    const [correo,setCorreo]=useState('');
    const [contra,setContra]=useState('');

    function validacion(){
        navigation.navigate('BarraUsuario', {correo})
    }

    const Inicio = async () => {
        console.log(correo)
        console.log(contra)
        const encodedCorreo = encodeURIComponent(correo);
        const encodedContra=encodeURIComponent(contra);
        const res = await fetch(`http://10.0.2.2:8080/usuarios/${encodedCorreo}/${encodedContra}`)
        const data = await res.text()
        
        if(data != ''){
            console.log(data)
            Alert.alert('Bienvenido')
            validacion();
        }
        else{
            setCorreo('')
            setContra('')
            Alert.alert('Datos erroneos');
        }
    }

    return(
        <GradientBackground>
            <KeyboardAvoidingView
                style={{flex:1}}>
                <View style={[mainStyles.container, {padding: 50}]}>
                    <View style={loginStyles.logo}>
                        <Image source={require('@recursos/images/logoAzul.png')}
                        style={{ height:220, width:250, resizeMode: 'stretch',}}/>    
                    </View>
                <Text style = {mainStyles.titleText}>Inicio de sesión</Text>
                <TextInput style= {styles.input} placeholder='E-mail' onChangeText={correo => setCorreo(correo)} defaultValue={correo}/>
            
                <TextInput style= {styles.input} placeholder='Contraseña'onChangeText={contra => setContra(contra)} defaultValue={contra}
                secureTextEntry/>
            
                <TouchableOpacity style={TamBtn.tamanio} onPress={() => Inicio()}>  
                    <Text style={Txtformat.tamanio} >Iniciar sesión</Text>
                </TouchableOpacity>
            
                <View>
                    <TouchableOpacity onPress={() =>  navigation.navigate('RegistroScreen')}>
                        <Text style={ [{ textDecorationLine: 'underline'}]}>Crear cuenta</Text>
                    </TouchableOpacity>
                </View>
                </View>
        </KeyboardAvoidingView>
        </GradientBackground>
    )

};


export default Login;



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