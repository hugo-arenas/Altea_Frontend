import React from "react";
import { GradientBackground } from '../componentes/GradientBackground';
import ChatBot from 'react-native-chatbot';

const steps = [
    {
        id : '1',
        message : 'Hola, como estas?',
        trigger : '2'
    },
    {
        id : '2',
        user : true,
        trigger : '3'
    },
    {
        id : '3',
        message : 'nos vimos',
        end : true
    }
]

const Chatbot = () => {
    return (
        <ChatBot steps={steps} />
    )
    
};
export default Chatbot;