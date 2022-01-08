import React from "react";
import { GradientBackground } from '../componentes/GradientBackground';
import ChatBot from 'react-native-chatbot';

const steps = [
    {
        id : '1',
        message : '¡Hola! Soy Altea, quién te acompañará en este viaje hacia tu bienestar. Me gustaría que conversemos y si es necesario ayudarte a conversar con nuestro equipo de especialistas.',
        trigger : '2'
    },
    {
        id : '2',
        message : '¿Cómo te sientes ahora?',
        trigger : '3'
    },
    {
        id : '3',
        user : true,
        trigger : '4'
    },
    {
        id : '4',
        message : '​​Gracias por compartirlo conmigo, no hay nada de malo en que te sientas así. conversando podríamos saber mejor que te pasa.',
        trigger : '6'
    },
    {
        id : '6',
        message : '¿Actualmente en qué modalidad de trabajo estás?',
        trigger : '7'
    },
    {
        id : '7',
        user : true,
        trigger : '8'
    },
    {
        id : '8',
        message : '¿En qué rango de edad te encuentras?',
        trigger : '9'
    },
    {
        id : '9',
        user : true,
        trigger : '10'
    },
    {
        id : '10',
        message : '¿Estás actualmente participando de algún tratamiento médico? o ¿Terapéutico? ',
        trigger : '11'
    },
    {
        id : '11',
        user : true,
        trigger : '12'
    },
    {
        id : '12',
        message : '¿En las últimas 4 semanas has sentido alguno de los síntomas cognitivos que te comentaré a continuación?',
        trigger : '13'
    },
    {
        id : '13',
        message : '_Dificultad para tomar decisiones\n_Confusión y desorientación\n_Falta de concentración y atención\n_Dificultad para pensar con claridad\n_Incapacidad para recordar instrucciones, situaciones, hechos, tareas, entre otros.\n_Dificultad para realizar tareas consecutivas\n_Pensamientos recurrentes\n_Siento que tengo dificultades para manejar el consumo de alcohol/drogas',
        trigger : '14'
    },
    {
        id : '14',
        user : true,
        trigger : '15'
    },
    {
        id : '15',
        message : '¿Crees que alguna de estas situaciones afecta tu estado de ánimo actual?',
        trigger : '16'
    },
    {
        id : '16',
        message : '_Problemas familiares\n_Problemas laborales \n_Duelo\n_Contexto social actual\n_Experiencia traumática\n_Otro',
        trigger : '17'
    },
    {
        id : '17',
        user : true,
        trigger : '18'
    },
    {
        id : '18',
        message: 'Muchas gracias por contarme cómo te sientes y compartir tu experiencia conmigo, con está información puedo darte algunas recomendaciones\nSi bien estoy aquí para ayudarte y darte información sobre lo que sientes, esto no reemplaza un diagnóstico médico, ni la experiencia de conversar con un especialista de la salud mental. Nuestros profesionales te orientarán desde una mirada sin juicios, brindándote un espacio seguro y confidencial.',
        trigger : '19'
    },
    {
        id : '19',
        message : 'Estos son los contactos de nuestros profesionales ......',
        trigger : '20'
    },
    {
        id : '20',
        user : true,
        trigger : '21'
    },
    {
        id : '21',
        message : 'Te quiero compartir la siguiente información:\nLa angustia o la ansiedad es un estado de inquietud, inseguridad y preocupación, sumado a sensaciones físicas desagradables que generan un estado de malestar a quien lo padece, y una percepción constante de pérdida de control. Saber cómo afrontar situaciones de estrés es clave para regular y manejar tu ansiedad, por ejemplo, conocer técnicas de relajación, meditación, o respiración te ayudarán a sentirte mejor.',
        end : true
    }
]

const Chatbot = () => {
    return (

        <ChatBot steps={steps} />
    
    )
    
};
export default Chatbot;