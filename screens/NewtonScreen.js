import { StyleSheet, Text, View, ScrollView } from 'react-native';
import SubTheme from '../components/SubThemes';

export default function NewtonScreen({ navigation }) {

    const dataWherePrimeraLey = [
        'F es la fuerza neta aplicada.',
        'm es la masa del objeto.',
        'a es su aceleración.',
    ];

    const dataWhereSegundaLey = [
        'F es la fuerza neta aplicada',
        'm es la masa del objeto.',
        'a es su aceleración.',
    ];

    const dataWhereTerceraLey = [
        'F_a es la fuerza de acción',
        'F_r es la fuerza de reacción.',
    ];

    return (
        <ScrollView style={styles.ScrollView}>
            <View style={styles.container}>
                <Text style={styles.title}>Qué son las Leyes de Newton?</Text>
                <Text style={styles.label}>Las leyes de Newton son tres principios fundamentales de la física que describen el movimiento de los objetos y las fuerzas que actúan sobre ellos.</Text>

                <SubTheme title={'Primera Ley (Ley de la inercia)'} colorButton={'#D91040'}
                    description={'Un objeto en reposo permanecerá en reposo y un objeto en movimiento continuará moviéndose a una velocidad constante en línea recta, a menos que una fuerza externa actúe sobre él.'}
                    mathExpression={'F = ma'}
                    data={dataWherePrimeraLey}
                    onPress={() => navigation.navigate('PrimeraLeyNewton')}></SubTheme>

                <SubTheme title={'Segunda Ley (Ley de la fuerza)'} colorButton={'#D91040'}
                    description={'La aceleración de un objeto es directamente proporcional a la fuerza neta aplicada sobre él e inversamente proporcional a su masa.'}
                    mathExpression={'F = ma'}
                    data={dataWhereSegundaLey}
                    onPress={() => navigation.navigate('SegundaLeyNewton')}></SubTheme>

                <SubTheme title={'Tercera Ley (Ley de acción y reacción)'} colorButton={'#D91040'}
                    description={'Por cada acción, hay una reacción igual y opuesta. Esto significa que cuando un objeto ejerce una fuerza sobre otro objeto, el segundo objeto ejerce una fuerza igual en magnitud pero en dirección opuesta sobre el primero.'}
                    mathExpression={'F_a = -F_r'}
                    data={dataWhereTerceraLey}
                    onPress={() => navigation.navigate('TerceraLeyNewton')}></SubTheme>
            </View>
        </ScrollView>
    )
}

const styles = StyleSheet.create({
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