import React, {FC} from "react";
import {Dimensions, View, Text, StyleSheet} from "react-native";
import {TextInput} from 'react-native';

const {height, width} = Dimensions.get('screen');

interface Props {
    placeholder: string;
    onChangeText: (text: string) => void;
    secureTextEntry?: boolean;
}

const Input:FC<Props> = (props) => {
    return (
        <View style={styles.container}>
            <TextInput style={styles.input} placeholder={props.placeholder} secureTextEntry={props.secureTextEntry || false} onChangeText={props.onChangeText}/>
        </View>
    )
}

export default Input;

const styles = StyleSheet.create({
    container: {
        width: width / 1.1,
        alignSelf: 'center',
        backgroundColor: '#FFAE7F',
        borderRadius: 5
    },
    input: {
        padding: 15
    }
})