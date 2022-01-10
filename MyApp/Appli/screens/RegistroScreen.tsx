import React, { useState, useContext} from 'react'
import { Text, View, Button, TouchableOpacity, StyleSheet, Image, TextInput, Alert } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import { GradientBackground } from '../componentes/GradientBackground';
import { StackScreenProps } from '@react-navigation/stack';

interface Props extends StackScreenProps<any,any>{};

export default function RegistroScreen({navigation}: Props) {
    const [nombre,setNombre]=useState('');
    const [apellido,setApellido]=useState('');
    const [edad,setEdad]=useState('');
    const [correo,setCorreo]=useState('');
    const [contra,setContra]=useState('');
    const [confirmar,setConfirmar]=useState('');

    function validacion(){
        navigation.navigate('Login')
    }

    const CargarDatos = async () => {
        const res = await fetch('http://10.0.2.2:8080/usuarios', {
                method: 'POST',
                headers: {
                  Accept: 'application/json',
                  'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    "nombre": nombre,
                    "contrasenia": contra,
                    "correo": correo,
                    "apellido": apellido,
                    "edad": edad
                })
              });
        const data = await res.text();
        if(data != ''){
            console.log(data)
            Alert.alert('¡Felicitaciones! Ususario registrado, por favor iniciar sesión')
            validacion();
        }
        else{
            setNombre('')
            setApellido('')
            setEdad('')
            setCorreo('')
            setContra('')
            setConfirmar('')
            Alert.alert('Usuario ya existe')
        }
    }

    const Registro = async () => {
        if(confirmar == contra){ 
            await CargarDatos();
        }
        else{
            return Alert.alert('Confirmacion de contraseña erronea, por favor volver a intentar')
        }
    }
    
    return (
        <GradientBackground >
            <View style={[mainStyles.container, {padding: 50}]}>
                <View style={loginStyles.logo}>
                    <Image source={require('@recursos/images/logoAzul.png')}
                    style={{ height:220, width:250, resizeMode: 'stretch',}}/>    
                </View>
                <Text style = {mainStyles.titleText}>Registrarse</Text>
                <TextInput style= {styles.input}  placeholder='Nombre' onChangeText={nombre => setNombre(nombre)} defaultValue={nombre}/>
                
                <TextInput style= {styles.input} placeholder='Apellido' onChangeText={apellido => setApellido(apellido)} defaultValue={apellido}/>
                
                <TextInput style= {styles.input} placeholder='Edad' onChangeText={edad => setEdad(edad)} defaultValue={edad}/>

                <TextInput style= {styles.input} placeholder='Correo' onChangeText={correo => setCorreo(correo)} defaultValue={correo}/>

                <TextInput style= {styles.input} placeholder='Contraseña' onChangeText={contra => setContra(contra)} defaultValue={contra} secureTextEntry/>

                <TextInput style= {styles.input} placeholder='Confirmar Contraseña' onChangeText={confirmar => setConfirmar(confirmar)} defaultValue={confirmar} secureTextEntry/>

                <View>
                <TouchableOpacity style={TamBtn.tamanio} onPress={() => Registro()}>  
                    <Text style={Txtformat.tamanio} >Registrarse</Text>
                </TouchableOpacity>
                </View>
            </View>
        </GradientBackground>
        
    )
}


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
        marginBottom: 5
    },
  });