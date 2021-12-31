import React,{useEffect, useState} from "react";
import {View, Button, Text, StyleSheet, FlatList, TouchableOpacity, Alert} from "react-native";

const Prueba = () => {
    const [patoloigas, setPatologias] = useState([])
    const loadTasks = async () => {
        const res = await fetch('http://10.0.2.2:8080/empresas')
        const data = await res.json()
        setPatologias(data)
    }

    return (
        <View>
            <FlatList
                data = {patoloigas}
                renderItem={({item}) => {
                    console.log(item);
                    return <Text>{item.id} {item.nombre} {item.contrasenia} {item.correo}</Text>
                }}
            />
            <TouchableOpacity
                onPress={() => loadTasks()}
                style={{ backgroundColor: 'blue' }}>
                <Text style={{ fontSize: 20, color: '#fff' }}>Pick a photo</Text>
            </TouchableOpacity>

            <Button
                title="Press me"
                color="#f194ff"
                onPress={() => Alert.alert('Button with adjusted color pressed')}
            />
        </View>
    )
    
};
const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center',
    },
    logo: {
      width: 305,
      height: 159,
      marginBottom: 20,
    },
    instructions: {
      color: '#888',
      fontSize: 18,
      marginHorizontal: 15,
      marginBottom: 10,
    },
});
export default Prueba;