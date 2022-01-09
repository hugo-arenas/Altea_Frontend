import React,{useEffect, useState} from "react";
import { Image, ScrollView, StatusBar, StyleSheet, Text, TouchableOpacity, View,FlatList } from 'react-native';
import { GradientBackground } from '../componentes/GradientBackground';
import { StackScreenProps } from "@react-navigation/stack";


interface Props extends StackScreenProps<any,any>{};

const listadoClientesScreen = ({navigation,route}: Props) => {
    const [empresa, setEmpresa] = useState([])
    const loadEmpresa = async () => {
        const res = await fetch('http://10.0.2.2:8080/empresas')
        const data = await res.json()
        setEmpresa(data)
    }

    useEffect(() => {
        loadEmpresa()
    },[])

    return (
        <GradientBackground>
            <Text style = {mainStyles.titleText}>Clientes</Text>
            <FlatList
                data = {empresa}
                renderItem={({item}) => {
                    return <View style={mainStyles.cont}>
                        <View style={mainStyles.containerCenter}>
                    <Text style={Txtformat.tamanioInfo}><Image source={require('@recursos/images/clientesLogo.png')}
                    style={{ height:30, width:30}}/>{item.nombre} <TouchableOpacity style={{marginRight: 0, marginTop: 5}} onPress={ () => navigation.navigate('EstadisticasScreen')}>
                    <Image source={require('@recursos/images/estadisticasLogo.png')}
                        style={{ height:30, width:30}}/>
                </TouchableOpacity></Text>
                    </View>

                    </View>
                }}
            />
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

    cont: {
        alignItems: 'center'
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
        textAlign: 'center',
        marginTop: 2

    }
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