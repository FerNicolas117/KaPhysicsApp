import { StyleSheet, Text, View, ScrollView } from 'react-native';
import SubTheme from '../components/SubThemes';

export default function CinematicaScreen({ navigation }) {

    const dataWhereVelocity = [
        'V es la velocidad.',
        'd es la distancia recorrida.',
        't es el tiempo empleado e recorrer esa distancia.',
    ];

    const dataWhereMRU = [
        'd es la distancia recorrida.',
        'v es la velocidad constante.',
        't es el tiempo transcurrido.'
    ];
    const dataWhereMRUA = [
        'd es la distancia recorrida.',
        'vi es la velocidad incial',
        'a es la aceleración.',
        't es el tiempo transcurrido'
    ];

    return (
        <ScrollView style={styles.scrollView}>
            <View style={styles.container}>
                <Text style={styles.title}>¿Qué es la Cinemática?</Text>
                <Text style={styles.label}>La cinemática es la rama de la física que estudia el movimiento de los cuerpos sin considerar las causas que lo producen, como las fuerzas.</Text>
                
                <Text style={styles.title}>Enfoque</Text>
                <Text style={styles.label}>Se enfoca en describir y analizar conceptos como la posición, la velocidad, la aceleración y el tiempo, con el fin de entender y predecir el movimiento de objetos en el espacio.</Text>

                <SubTheme title={'Velocidad'} colorButton={'#D91040'}
                    description={'La fórmula v = d / t representa la definición de velocidad como la razón del desplazamiento (d) sobre el tiempo (t) transcurrido.'}
                    mathExpression={'v = d / t'}
                    data={dataWhereVelocity}
                    onPress={() => navigation.navigate('VelocidadCalculateScreen')} >
                </SubTheme>

                <SubTheme title={'Movimiento Rectilíneo Uniforme (MRU)'} colorButton={'#D91040'}
                    description={'El movimiento rectilíneo uniforme es el movimiento de un objeto que se desplaza en línea recta a velocidad constante. Esto significa que no aumenta ni disminuye su velocidad.'}
                    mathExpression={'d = v * t'}
                    data={dataWhereMRU}
                    onPress={() => navigation.navigate('MRU')} >
                </SubTheme>

                <SubTheme title={'Movimiento Rectilíneo Uniformemente Acelerado (MRUA)'} colorButton={'#D91040'}
                    description={'El movimiento rectilíneo uniformemente acelerado es un tipo de movimiento en el cual un objeto se desplaza en línea recta y su velocidad cambia a un ritmo constante.'}
                    mathExpression={'d = v_{i} * t + \\frac{1}{2} * a * t^{2}'}
                    data={dataWhereMRUA}
                    onPress={() => navigation.navigate('MRUA')}>
                </SubTheme>
            </View>
        </ScrollView>
    );
}

const styles = StyleSheet.create ({
    scrollView: {
        backgroundColor: '#fff',
        height: '100%',
    },

    container: {
        flex: 1,
        backgroundColor: '#fff',
        height: '100%',
        paddingTop: 0,
        paddingHorizontal: 20,
        paddingBottom: 62,
    },

    title: {
        fontSize: 24,
        fontWeight: 'bold',
        marginBottom: 8,
        marginTop: 24,
    },

    label: {
        fontSize: 16,
    },
});