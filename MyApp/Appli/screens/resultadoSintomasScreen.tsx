import { StackScreenProps } from '@react-navigation/stack';
import React from 'react'
import { Image, ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { Colors } from 'react-native/Libraries/NewAppScreen';
import { GradientBackground } from '../componentes/GradientBackground';


interface RouterParams{
    contador: number;
}

interface Props extends StackScreenProps<any,any>{};


const resultadoSintomasScreen = ({route}: Props) => {

    const params = route.params as RouterParams;
    
    const text1 = 'Me siento mal emocionalmente: ¿qué puedo hacer? mediante tres consejos basados en la psicología positiva\:\nRealiza actividades agradables. El que comiences a realizar actividades agradables sin duda te va a ayudar a aumentar de manera significativa tu estado de ánimo. Puedes por ejemplo salir y practicar el deporte que más te gusta, ir a dar un paseo, ir al cine, salir con tus amigos, tener relaciones sexuales, vestir con ropa que te gusta, darte un baño caliente y relajante, etc\.\nEjercicio físico. El ejercicio sin duda es excelente para aumentar nuestro estado de ánimo ya que no sólo nos activa físicamente sino también de manera emocional. También nos ayuda a que dejemos de prestar atención en aquellas cosas desagradables en las que estamos pensando y nos permite centrarnos en el momento presente\.\nMeditación. Cuando nos sentimos mal emocionalmente es porque estamos demasiado preocupados por lo que va a pasar (nos centramos en el futuro) o estamos angustiados por aquello que hicimos en el pasado. La meditación nos ayuda a serenar nuestra mente y a que prestemos atención a lo que realmente importa que es el aquí y ahora\.\nEste artículo es meramente informativo, en Psicología-Online no tenemos facultad para hacer un diagnóstico ni recomendar un tratamiento. Te invitamos a acudir a un psicólogo para que trate tu caso en particular.';
    const text2 = 'Todos hemos tenido ese día. Sí, ese día en el que sientes desmotivación. Ese día en el que, incluso, las cosas simples se vuelven más difíciles. Y, aunque cueste, lo que corresponde es afrontar. Por ello, aquí te presentamos 3 actividades que, sin dudas, te motivarán.\n\n1. Bailar: pocas cosas se comparan con cerrar la puerta del cuarto o salir de la ducha y bailar. Al hacerlo, generamos una conexión mente-cuerpo que nos pone felices. Porque es en ese espacio de intimidad en el que somos espontáneos, nosotros mismos, sin prejuicios. ¡Ser es un gran motivo para hacer!\n2. Abrazar: permítete un abrazo de aliento, un abrazo unificador, un abrazo de impulso. Un abrazo que calme e indique que todo saldrá o estará bien. Si sientes que necesitas uno, búscalo. Este tipo de contacto físico alimenta el alma: “ya pasó, sigamos”. \n3. Lista: tú te conoces y sabes lo que vales. Por eso, crear una lista personalizada con virtudes, te hará reconocer todas aquellas fuentes positivas. Pero, sobre todo, serás consciente de que dentro de ti existen herramientas para seguir adelante. ¡Ve por ese top! \n¡Motívate y devuélvele una sonrisa a tu rostro! ';
    const text3 = 'Estás teniendo un buen día: \n\nLa mañana, cuando sale el sol y nos despertamos, resulta sin duda el momento más mágico del día, aunque muchas veces sea el molesto despertador el que nos saque del sueño. El instante en que nos despertamos es mágico porque supone un nuevo inicio en el que podremos hacer cosas maravillosas, o simplemente, porque podremos vivir un día más. Las posibilidades están todas ahí, a nuestro alcance, y por eso se suele honrar a la mañana y celebrarla en poemas y canciones, por todo lo positivo que representa.\n\nDe hecho, cuando enviamos un mensaje de buenos días, lo hacemos para estar junto a la persona precisamente en ese momento especial en que el día comienza, con todo su esplendor. Lo hacemos también porque es uno de los momentos más íntimos y hermosos que podemos compartir con él o con ella, y por eso, enviar un mensaje de buenos días junto con ramos de flores, significa queremos hacer llegar nuestros mejores deseos a alguien importante para nosotros.';
    const text4 = 'Emocionalmente estable:\n\n “Si estamos creciendo, siempre vamos a estar fuera de nuestra zona de confort.”\nLo que te hace sentir incómodo es tu mayor oportunidad de crecimiento\nEl crecimiento personal no es una cuestión de aprender nueva información, sino de desaprender los viejos límites\n¡Estás haciendo un muy buen trabajo!';
    
    let text = '';

    const image1 =require('@recursos/images/mal.png');
    const image2 =require('@recursos/images/masomenos.png');
    const image3 =require('@recursos/images/bien.png');
    const image4 =require('@recursos/images/muyBien.png');

    let image = '';

    if(params.contador <= -10){
        text = text1;
        image = image1;
    }
    else if(params.contador > -10 && params.contador <=-1){
        text = text2;
        image = image2;
    }
    else if(params.contador > -1 && params.contador <= 5){
        text = text3;
        image = image3;
    }
    else{
        text = text4;
        image = image4;
    }

    return (
        <GradientBackground>
            <Text style={stylesTwo.formulario}> Resultado monitoreo emocional</Text>
            <ScrollView >
                <Text style={{marginHorizontal:20, marginTop:5}}>
                {text}
                </Text>

                <View style={loginStyles.logo}>
                    
                <Image source={image}
                    style={{ height:150, width:300, resizeMode: 'stretch', borderRadius:3}}/> 
                </View>
            </ScrollView>
        </GradientBackground>
    )
    
};
export default resultadoSintomasScreen;

const stylesTwo = StyleSheet.create({
 
    formulario: {
      color: '#4F4F4F',
      fontSize: 25,
      marginTop: 20,
      fontWeight: '600',
      padding: 4,
      paddingRight: 12,
      textAlign: 'center',
    }
   
});

const loginStyles = StyleSheet.create({

    logo: {
        paddingTop: 50,
        alignItems: 'center',
        marginBottom: 15,
        
    },
})