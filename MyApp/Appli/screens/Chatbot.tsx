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
        options: [
            { value: 1, label: 'Bien', trigger: '4' },
            { value: 2, label: 'Más o menos', trigger: '5' },
            { value: 3, label: 'Mal', trigger: '8' },
            { value: 4, label: 'No lo sé', trigger: '11' },
            { value: 5, label: 'Prefiero no contestar', trigger: '11' },
          ],
    },
    {
        id : '4',
        message : '¿Sabías que las personas con las que vivimos influyen directamente en cómo nos sentimos? Es por esa razón que me gustaría saber con quién vives.',
        trigger : '13'

    },
    {
        id : '5',
        message : '​​Gracias por compartirlo conmigo, no hay nada de malo en que te sientas así. conversando podríamos saber mejor que te pasa.',
        trigger : '6'
    },
    {
        id : '6',
        message : '¿Te gustaría tomar una sesión con un miembro de nuestro equipo?',
        trigger :   '7'
    },
    {
        id : '7',
        options: [
            { value: 1, label: 'Sí', trigger: '12' },
            { value: 2, label: 'No', trigger: '4' },
          ],
    },
    {
        id : '8',
        message : 'Lamento que te sientas así, conversando podríamos saber mejor que te pasa',
        trigger: '9'
    },
    {
        id : '9',
        message : '¿Te gustaría tomar una sesión con un miembro de nuestro equipo?',
        trigger : '10'
    },
    {
        id : '10',
        options: [
            { value: 1, label: 'Sí', trigger: '12' },
            { value: 2, label: 'no', trigger: '4' },
          ],
    },
    {
        id : '11',
        message: 'No hay problema, la idea es conocerte para que puedas confiar en mí.',
        trigger : '4'
    },
    {
        id : '12',
        message: 'Sus contactos son los siguientes:\ncorreo1.cl\ncorreo2.cl',
        trigger : '4'
    },
    {
        id : '13',
        options: [
            { value: 1, label: 'Sólo conmigo', trigger: '14' },
            { value: 2, label: 'Con miembros de mi familia (mamá, papá, hermanos, abuelos, tíos, primos)', trigger: '14' },
            { value: 3, label: 'Con amigos', trigger: '14' },
            { value: 4, label: 'Con mi pareja', trigger: '14' },
            { value: 5, label: 'Con mis hijos y mi pareja', trigger: '14' },
          ],
    },
    {
        id : '14',
        message: '¿Actualmente en qué modalidad de trabajo estás?',
        trigger: '15'
    },
    {
        id : '15',
        options: [
            { value: 1, label: 'Presencial', trigger: '16' },
            { value: 2, label: 'Teletrabajo', trigger: '16' },
            { value: 3, label: 'Híbrido', trigger: '16' },
          ],
    },
    {
        id : '16',
        message: '¿En qué rango de edad te encuentras?',
        trigger: '17'
    },
    {
        id : '17',
        options: [
            { value: 1, label: 'Entre 20 y 25 años', trigger: '18' },
            { value: 2, label: 'Entre 26 y 35', trigger: '18' },
            { value: 3, label: 'Entre 36 y 45', trigger: '18' },
            { value: 4, label: 'Entre 46 y 55', trigger: '18' },
            { value: 5, label: 'Entre 56 y 65', trigger: '18' },
            { value: 6, label: 'Más de 65 años', trigger: '18' },
          ],
    },
    {
        id : '18',
        message : '¡Excelente!Las preguntas que te estoy haciendo son para conocer tu salud. ¿Estás actualmente participando de algún tratamiento médico? o ¿Terapéutico?',
        trigger: '19'
    },
    {
        id : '19',
        options: [
            { value: 1, label: 'Sí', trigger: '20' },
            { value: 2, label: 'No', trigger: '20' },
          ],
    },
    {
        id : '20',
        message : 'Gracias por compartir esto conmigo',
        trigger: '21'
    },
    {
        id : '21',
        message : 'Ahora que nos conocemos un poco mejor, y para poder orientarte de una mejor manera me podrías comentar si en las últimas 4 semanas has sentido alguno de los síntomas cognitivos que te comentaré a continuación:\n\n_Dificultad para tomar decisiones\n_Confusión y desorientación\n_Falta de concentración y atención\n_Dificultad para pensar con claridad\n_Incapacidad para recordar instrucciones, situaciones, hechos, tareas, entre otros.\n_Dificultad para realizar tareas consecutivas\n_Pensamientos recurrentes\n_Siento que tengo dificultades para manejar el consumo de alcohol/drogas',
        trigger: '22'
    },
    {
        id : '22',
        options: [
            { value: 1, label: 'Sí', trigger: '23' },
            { value: 2, label: 'Niguno', trigger: '25' },
          ],
    },
    {
        id : '23',
        message : 'Quisiera preguntarte si en las últimas 4 semanas has sentido alguno de los síntomas físicos que te comentaré a continuación:\n\n_Sudor excesivo\n_Temblores musculares\n_Dolores de cabeza\n_Mareos\n_Falta de coordinación motora\n_Náuseas\n_Dolor de estómago\n_Dolor de pecho\n_Hiperventilación\n_ Aceleración del corazón',
        trigger : '24'
    },
    {
        id :'24',
        options: [
            { value: 1, label: 'Sí', trigger: '27' },
            { value: 2, label: 'Niguno', trigger: '26' },
          ],
    },
    {
        id : '25',
        message : 'Me alegro que no hayas notado ninguno, sin embargo a veces nuestro cuerpo si puede sentirlos.',
        trigger :'23'
    },
    {
        id: '26',
        message : 'Me alegro que no hayas notado ninguno, sin embargo nuestras emociones a veces nos hablan de diferentes formas',
        trigger : '27'
    },
    {
        id : '27',
        message : 'Muchas gracias por contarme cómo te sientes y compartir tu experiencia conmigo, con está información puedo darte algunas recomendaciones.\nSi bien estoy aquí para ayudarte y darte información sobre lo que sientes, esto no reemplaza un diagnóstico médico, ni la experiencia de conversar con un especialista de la salud mental. Nuestros profesionales te orientarán desde una mirada sin juicios, brindándote un espacio seguro y confidencial.',
        trigger : '28'
    },
    {
        id : '28',
        message : '¿Quieres consultar?',
        trigger : '29'
    },
    {
        id : '29',
        options: [
            { value: 1, label: 'Sí', trigger: '30' },
            { value: 2, label: 'No', trigger: '31' },
          ],
    },
    {
        id : '30',
        message :'Sus contactos son los siguientes:\ncorreo1.cl\ncorreo2.cl',
        trigger : '31'
    },
    {
        id : '31',
        message : '¿Hay algún término que no entiendas?',
        trigger : '32'
    },
    {
        id : '32',
        options: [
            { value: 1, label: 'La angustia o la ansiedad', trigger: '33' },
            { value: 2, label: 'La depresión', trigger: '34' },
            { value: 3, label: 'Los problemas de la conduct', trigger: '35' },
            { value: 4, label: 'El duelo', trigger: '36' },
          ],
    },
    {
        id : '33',
        message : 'La angustia o la ansiedad es un estado de inquietud, inseguridad y preocupación, sumado a sensaciones físicas desagradables que generan un estado de malestar a quien lo padece, y una percepción constante de pérdida de control. Saber cómo afrontar situaciones de estrés es clave para regular y manejar tu ansiedad, por ejemplo, conocer técnicas de relajación, meditación, o respiración te ayudarán a sentirte mejor.',
        trigger : '37'
    },
    {
        id : '34',
        message: 'La depresión puede venir acompañada con falta de motivación, dificultad para encontrar sentido a la vida, una profunda tristeza, sentimientos de ira e incluso frustración. No siempre las personas que se sienten deprimidas lo demuestran y muchas veces lo viven sólo para sí mismas. Es importante que si te sientes así puedas comunicarlo a alguien de tu confianza o a un especialista de la salud mental. Ellos te acompañarán a encontrar una salida a tu estado.',
        trigger :'37'
    },
    {
        id :'35',
        message: 'Los problemas de la conducta, vienen asociados a la experimentación de dificultades significativas en cómo te logras relacionar contigo mismo y con los otros, o si tienes problemas para afrontar el día a día, es de mucha utilidad hablar sobre las causas y de cómo puedes identificar y manejar estas situaciones, lo más recomendable en estos casos es asistir a psicoterapia con un psicólogo quien te orientará y entregará herramientas para afrontar las diversas situaciones que se presenten. (Estrés, dificultades para dormir, preocupación por el futuro, sensación de que los otros no me entienden).',
        trigger :'37'
    },
    {
        id: '36',
        message: 'El duelo es un proceso de adaptación emocional ante una pérdida significativa. Este proceso de adaptación aplica para todo tipo de pérdidas. No tiene un tiempo determinado, algunas personas lo pueden vivir en tres meses, cómo otras en un año. Cada vivencia de pérdida es única. Cada persona significa ese acontecimiento de acuerdo a sus creencias, valores, cultura, en otras palabras, a través de su propia realidad subjetiva. No obstante, se recomienda consultar cuando no logramos superar el dolor emocional que genera la pérdida, lo cuál se podría traducir en que después de un determinado tiempo, la persona no logra reincorporarse a su vida normal, experimenta llantos frecuentes, se encuentra ida y no con sus pies y cabeza en el presente.',
        trigger: '37'
    },
    {
        id : '37',
        message: '¡Muchas gracias por tu interacción!',
        trigger: '38'
    },
    {
        id: '38',
        options: [
            { value: 1, label: 'Volver a interactuar', trigger: '1' },
            { value: 2, label: 'Terminar interacción', trigger: '39' },
          ],
    },
    {
        id: '39',
        message : '!Que tengas un buen día, adíos!',
        end : true
    }
]

const Chatbot = () => {
    return (

        <ChatBot steps={steps} />
    
    )
    
};
export default Chatbot;