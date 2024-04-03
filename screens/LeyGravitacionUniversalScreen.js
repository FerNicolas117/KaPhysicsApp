import { Text, StyleSheet, View, ScrollView } from "react-native";
import SubTheme from "../components/SubThemes";

export default function LeyGravitacionUniversal ({  }) {

    const dataWhereFuerzaGravitatoria = [
        'F es la fuerza.',
        'G es la constante gravitatoria universal.',
        'm1 y m2 son las masas de los objetos.',
        'r es la distancia entre los centros de masa de los objetos.'
    ];

    const dataWherePeso = [
        'W es el peso.',
        'g representa la gravedad.',
        'm es la masa.',
    ];

    const dataWhereCaidaLibre = [
        'h es la altura.',
        'g es la aceeración debido a la gravedad.',
        't es el tiempo',
        'v_0 es la velocidad inicial.',
    ];

    return (
        <ScrollView style={styles.ScrollView}>
            <View style={styles.container}>
                <Text style={styles.title}>¿Qué es la Ley de Gravitación Universal?</Text>
                <Text style={styles.label}>La Ley de Gravitación Universal establece la atracción mutua entre dos objetos debido a su masa. La fuerza gravitatoria es la fuerza con la que dos objetos se atraen entre sí debido a su masa.</Text>
                <Text style={styles.title}>¿Qué es el peso?</Text>
                <Text style={styles.label}>El peso de un objeto es la fuerza gravitatoria que actúa sobre él debido a la atracción gravitatoria de la Tierra.</Text>
                <Text style={styles.title}>¿Qué es la caída libre?</Text>
                <Text style={styles.label}>La caída libre es el movimiento de un objeto bajo la influencia exclusiva de la gravedad, sin considerar la resistencia del aire u otras fuerzas externas.</Text>

                <SubTheme title={'Fuerza Gravitatoria (F)'} colorButton={'#D91040'}
                    description={'La fuerza gravitatoria entre dos objetos se calcula utilizando la Ley de Gravitación Universal.'}
                    mathExpression={'F = G * \\frac{m_1 * m_2}{r^2}'}
                    data={dataWhereFuerzaGravitatoria}></SubTheme>

                <SubTheme title={'Peso (W)'} colorButton={'#D91040'}
                    description={'El peso de un objeto se calcula utilizando la aceleración debido a la gravedad y la masa del objeto.'}
                    mathExpression={'W = m * g'}
                    data={dataWherePeso}></SubTheme>

                <SubTheme title={'Caída Libre'} colorButton={'#D91040'}
                    description={'El movimiento de un objeto en caída libre se describe con la ecuación de la cinemática para la posición vertical.'}
                    mathExpression={'h = v_0t + \\frac{1}{2} gt^2'}
                    data={dataWhereCaidaLibre}></SubTheme>
            </View>
        </ScrollView>
    );
}

const styles = StyleSheet.create ({
    ScrollView: {
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
    }
})