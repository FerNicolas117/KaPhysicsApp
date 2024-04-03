import { Text, StyleSheet, View, ScrollView } from "react-native";
import SubTheme from "../components/SubThemes";

export default function TrabajoEnergia ({ }) {

    const dataWhereTrabajo = [
        'F es la fuerza aplicada.',
        'd es la distancia.',
        'θ es el ángulo.',
    ];

    const dataWhereEnergiaCinetica = [
        'm es la masa del objeto.',
        'v es la velocidad.',
    ];

    const dataWhereEnergiaPotencialGravitacional = [
        'h es la altura.',
        'm es la masa.',
        'g representa el valor de la gravedad.'
    ];

    return (
        <ScrollView style={styles.ScrollView}>
            <View style={styles.container}>
                <Text style={styles.title}>Trabajo y Energía</Text>
                <Text style={styles.label}>El trabajo se define como la cantidad de energía transferida cuando una fuerza actúa sobre un objeto y lo desplaza en la dirección de la fuerza. La energía, por otro lado, es la capacidad de un sistema para realizar trabajo.</Text>

                <SubTheme title={'Trabajo (W)'} colorButton={'#D91040'}
                    description={'Se calcula multiplicando la magnitud de la fuerza aplicada (F) por la distancia (d) sobre la cual se aplica la fuerza y el coseno del ángulo (θ) entre la fuerza y la dirección del desplazamiento.'}
                    mathExpression={'W = F * d * cos(θ)'}
                    data={dataWhereTrabajo}></SubTheme>

                <SubTheme title={'Energía Cinética (KE)'} colorButton={'#D91040'}
                    description={'La energía cinética de un objeto en movimiento se calcula utilizando la masa del objeto (m) y su velocidad (v).'}
                    mathExpression={'KE = \\frac{1}{2} mv^2'}
                    data={dataWhereEnergiaCinetica}></SubTheme>

                <SubTheme title={'Energía Potencial Gravitacional (PEg)'} colorButton={'#D91040'}
                    description={'La energía potencial gravitacional asociada a la altura (h) de un objeto se calcula utilizando su masa (m), la aceleración debido a la gravrdad (g), y la altura a la que se encuentra el objeto.'}
                    mathExpression={'PEg = mgh'}
                    data={dataWhereEnergiaPotencialGravitacional}></SubTheme>
            </View>
        </ScrollView>
    );
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