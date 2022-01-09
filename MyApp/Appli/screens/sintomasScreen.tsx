import React, { useState } from "react";
import { Text, StyleSheet, View, StatusBar, ScrollView, TouchableOpacity } from "react-native";
 
import {
    Header,
    LearnMoreLinks,
    Colors,
    DebugInstructions,
    ReloadInstructions,
  } from 'react-native/Libraries/NewAppScreen'; 

import BouncyCheckbox from "react-native-bouncy-checkbox";
import { GradientBackground } from '../componentes/GradientBackground';
import { StackScreenProps } from "@react-navigation/stack";


interface Props extends StackScreenProps<any,any>{};


const sintomasScreen = ({navigation}: Props) => {
    

  const [contador,setContador] = useState(0);
  console.log(contador)

    return (
        <GradientBackground>
          
 
          <Text style={stylesTwo.formulario}> ¿Cómo te sientes hoy? </Text>
          <Text style={{fontSize:15, marginLeft:15, marginTop:5}}> Por favor indicanos tus sintomas. </Text>
        <ScrollView style={stylesScroll.scrollView}>
        <View style={{marginLeft:15}}>
          <BouncyCheckbox
         size={25}
         style={{ marginTop: 16 }}
        fillColor="#B400FE"
        unfillColor="#FFFFFF"
        text="Calmado/a"
        iconStyle={{ borderColor: "#B400FE" }}
        textStyle={{ fontFamily: "JosefinSans-Regular" }}
        onPress={(isChecked: boolean) => {isChecked === true ?
          setContador( contador + 1) :
          setContador( contador - 1)}}
        
        
        />

        <BouncyCheckbox
         size={25}
         style={{ marginTop: 16 }}
        fillColor="#B400FE"
        unfillColor="#FFFFFF"
        text="Cansado/a"
        iconStyle={{ borderColor: "#B400FE" }}
        textStyle={{ fontFamily: "JosefinSans-Regular" }}
        onPress={(isChecked: boolean) => {isChecked === true ?
          setContador( contador - 2) :
          setContador( contador + 2)}}
        />

        <BouncyCheckbox
         size={25}
         style={{ marginTop: 16 }}
        fillColor="#B400FE"
        unfillColor="#FFFFFF"
        text="Feliz"
        iconStyle={{ borderColor: "#B400FE" }}
        textStyle={{ fontFamily: "JosefinSans-Regular" }}
        onPress={(isChecked: boolean) => {isChecked === true ?
          setContador( contador + 4) :
          setContador( contador - 4)}}
        />

        <BouncyCheckbox
         size={25}
         style={{ marginTop: 16 }}
        fillColor="#B400FE"
        unfillColor="#FFFFFF"
        text="Con energía"
        iconStyle={{ borderColor: "#B400FE" }}
        textStyle={{ fontFamily: "JosefinSans-Regular" }}
        onPress={(isChecked: boolean) => {isChecked === true ?
          setContador( contador + 2) :
          setContador( contador - 2)}}
        />

        <BouncyCheckbox
         size={25}
         style={{ marginTop: 16 }}
        fillColor="#B400FE"
        unfillColor="#FFFFFF"
        text="Optimista"
        iconStyle={{ borderColor: "#B400FE" }}
        textStyle={{ fontFamily: "JosefinSans-Regular" }}
        onPress={(isChecked: boolean) => {isChecked === true ?
          setContador( contador + 3) :
          setContador( contador - 3)}}
        />

        <BouncyCheckbox
         size={25}
         style={{ marginTop: 16 }}
        fillColor="#B400FE"
        unfillColor="#FFFFFF"
        text="Pesimista"
        iconStyle={{ borderColor: "#B400FE" }}
        textStyle={{ fontFamily: "JosefinSans-Regular" }}
        onPress={(isChecked: boolean) => {isChecked === true ?
          setContador( contador - 3) :
          setContador( contador + 3)}}
        />

        <BouncyCheckbox
         size={25}
         style={{ marginTop: 16 }}
        fillColor="#B400FE"
        unfillColor="#FFFFFF"
        text="Activo/a"
        iconStyle={{ borderColor: "#B400FE" }}
        textStyle={{ fontFamily: "JosefinSans-Regular" }}
        onPress={(isChecked: boolean) => {isChecked === true ?
          setContador( contador + 1) :
          setContador( contador - 1)}}
        />

        <BouncyCheckbox
         size={25}
         style={{ marginTop: 16 }}
        fillColor="#B400FE"
        unfillColor="#FFFFFF"
        text="Cambios de humor"
        iconStyle={{ borderColor: "#B400FE" }}
        textStyle={{ fontFamily: "JosefinSans-Regular" }}
        onPress={(isChecked: boolean) => {isChecked === true ?
          setContador( contador - 1) :
          setContador( contador + 1)}}
        />

        <BouncyCheckbox
         size={25}
         style={{ marginTop: 16 }}
        fillColor="#B400FE"
        unfillColor="#FFFFFF"
        text="Irritado/a"
        iconStyle={{ borderColor: "#B400FE" }}
        textStyle={{ fontFamily: "JosefinSans-Regular" }}
        onPress={(isChecked: boolean) => {isChecked === true ?
          setContador( contador - 2) :
          setContador( contador + 2)}}
        />

        <BouncyCheckbox
         size={25}
         style={{ marginTop: 16 }}
        fillColor="#B400FE"
        unfillColor="#FFFFFF"
        text="Triste"
        iconStyle={{ borderColor: "#B400FE" }}
        textStyle={{ fontFamily: "JosefinSans-Regular" }}
        onPress={(isChecked: boolean) => {isChecked === true ?
          setContador( contador - 4) :
          setContador( contador + 4)}}
        />

        <BouncyCheckbox
         size={25}
         style={{ marginTop: 16 }}
        fillColor="#B400FE"
        unfillColor="#FFFFFF"
        text="Ansioso/a"
        iconStyle={{ borderColor: "#B400FE" }}
        textStyle={{ fontFamily: "JosefinSans-Regular" }}
        onPress={(isChecked: boolean) => {isChecked === true ?
          setContador( contador - 1) :
          setContador( contador + 1)}}
        />

        <BouncyCheckbox
         size={25}
         style={{ marginTop: 16 }}
        fillColor="#B400FE"
        unfillColor="#FFFFFF"
        text="Deprimido/a"
        iconStyle={{ borderColor: "#B400FE" }}
        textStyle={{ fontFamily: "JosefinSans-Regular" }}
        onPress={(isChecked: boolean) => {isChecked === true ?
          setContador( contador - 3) :
          setContador( contador + 3)}}
        />

        <BouncyCheckbox
         size={25}
         style={{ marginTop: 16 }}
        fillColor="#B400FE"
        unfillColor="#FFFFFF"
        text="Pensamientos obsesivos"
        iconStyle={{ borderColor: "#B400FE" }}
        textStyle={{ fontFamily: "JosefinSans-Regular" }}
        onPress={(isChecked: boolean) => {isChecked === true ?
          setContador( contador - 2) :
          setContador( contador + 2)}}
        />

        <BouncyCheckbox
         size={25}
         style={{ marginTop: 16 }}
        fillColor="#B400FE"
        unfillColor="#FFFFFF"
        text="Apatía"
        iconStyle={{ borderColor: "#B400FE" }}
        textStyle={{ fontFamily: "JosefinSans-Regular" }}
        onPress={(isChecked: boolean) => {isChecked === true ?
          setContador( contador - 1) :
          setContador( contador + 1)}}
        />

        <BouncyCheckbox
         size={25}
         style={{ marginTop: 16 }}
        fillColor="#B400FE"
        unfillColor="#FFFFFF"
        text="Confusión"
        iconStyle={{ borderColor: "#B400FE" }}
        textStyle={{ fontFamily: "JosefinSans-Regular" }}
        onPress={(isChecked: boolean) => {}}
        />

        <BouncyCheckbox
         size={25}
         style={{ marginTop: 16 }}
        fillColor="#B400FE"
        unfillColor="#FFFFFF"
        text="Autocrítica"
        iconStyle={{ borderColor: "#B400FE" }}
        textStyle={{ fontFamily: "JosefinSans-Regular" }}
        onPress={(isChecked: boolean) => {isChecked === true ?
          setContador( contador + 1) :
          setContador( contador - 1)}}
        />


        </View>

        <TouchableOpacity
                  style={styles.colorBtn} activeOpacity={0.5} onPress={ () => navigation.navigate('resultadoSintomasScreen',{
                    contador: contador
                  })}
                >
            <Text style={styles.colorTxtBtn}>Enviar sintomas</Text>
        </TouchableOpacity>

        </ScrollView>
        </GradientBackground>
    )
    
};
export default sintomasScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  checkboxContainer: {
    flexDirection: "row",
    marginBottom: 20,
  },
  checkbox: {
    alignSelf: "center",
  },
  label: {
    margin: 8,
  },
  colorBtn: {
    borderWidth: 1,
    borderColor: '#ADE6E6',
    backgroundColor: '#D56FFF',
    padding: 15,
    marginLeft: 20,
    marginRight: 20,
    borderRadius: 10,
    marginTop:30,
    marginBottom:40
  },
  colorTxtBtn: {
    color: '#FFFFFF',
    fontSize: 20,
    textAlign: 'center'
  },
});


const stylesTwo = StyleSheet.create({
 
    formulario: {
      color: Colors.black,
      fontSize: 18,
      marginTop: 20,
      fontWeight: '600',
      padding: 4,
      paddingRight: 12,
      textAlign: 'center',
    },
    colorBtn: {
      borderWidth: 1,
      borderColor: '#007BFF',
      backgroundColor: '#007BFF',
      padding: 15,
      marginLeft: 20,
      marginRight: 20,
      borderRadius: 7,
    },
   
    colorTxtBtn: {
      color: '#FFFFFF',
      fontSize: 20,
      textAlign: 'center'
    },

    errorText: {
        fontSize: 14,
        color: '#B400FE',
        marginBottom: 20,
        marginLeft: 20
      }
   
  });

  const stylesScroll = StyleSheet.create({
    container: {
      flex: 1,
      paddingTop: StatusBar.currentHeight,
    },
    scrollView: {
      backgroundColor: 'rgba(0,0,0,0.02)',
      marginHorizontal: 20,
    },
    text: {
      fontSize: 22,
    },
  });