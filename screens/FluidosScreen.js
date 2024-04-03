import { Text, StyleSheet, View, ScrollView } from "react-native";
import SubTheme from "../components/SubThemes";

export default function FluidosScreen({  }) {

    const ro = '\u03F1';

    const dataWherePresion = [
        'P es la presión.',
        'F es la fuerza aplicada.',
        'A es el área sobre la cual se aplica la fuerza.',
    ];

    const dataWhereDensidad = [
        `${ro} es la densidad.`,
        'm es la masa del fluido.',
        'V es su volumen.',
    ];

    const dataWherePascal = [
        'P_1 y P_2 son las presiones en dos puntos diferentes de un fluido confinado.',
    ];

    const dataWhereArquimedes = [
        'F_Arquimedes es la fuerza de Arquimes.',
        `${ro} es la densidad del fluido.`,
        'g es la aceleración debido a la gravedad.',
        'V_desplazado es el volumen desplazado por el objeto sumergido.',
    ];

    return (
        <ScrollView style={styles.ScrollView}>
            <View style={styles.container}>
                <Text style={styles.title}>Fluidos</Text>
                <Text style={styles.label}>Los fluidos son sustancias que pueden fluir y adaptarse a la forma de su contenedor. En física, se estudian propiedades como la presión, la densidad, el principio de Pascal (relacionado con la transmisión de presión en fluidos) y el principio de Arquímedes (que explica el empuje hacia arriba experimentado por un objeto sumergido en un fluido).</Text>

                <SubTheme title={'Presión (P)'} colorButton={'#D91040'}
                    description={'La presión es la fuerza que ejerce un objeto sobre una superficie. Por ejemplo, cuando te sientas en una silla, ejerces presión sobre ella.'}
                    mathExpression={'P = F/A'}
                    data={dataWherePresion}></SubTheme>

                <SubTheme title={'Densidad'} colorButton={'#D91040'}
                    description={'La presión es la fuerza que ejerce un objeto sobre una superficie. Por ejemplo, cuando te sientas en una silla, ejerces presión sobre ella.'}
                    mathExpression={ro + ' = m/V'}
                    data={dataWhereDensidad}></SubTheme>

                <SubTheme title={'Principio de Pascal'} colorButton={'#D91040'}
                    description={'Este principio dice que si presionas un fluido (como el agua) en un punto, esa presión se transmite a todas partes del fluido. Es como apretar una bolsa de agua: si aprietas en un lado, el agua se mueve en todos los demás lados.'}
                    mathExpression={'P_1 = P_2'}
                    data={dataWherePascal}></SubTheme>

                <SubTheme title={'Principio de Arquímedes'} colorButton={'#D91040'}
                    description={'Este principio dice que un objeto sumergido en un fluido (como una pelota en agua) recibe un empuje hacia arriba igual al peso del fluido que desplaza. Por eso los objetos flotan en el agua.'}
                    mathExpression={'F_{Arquimedes} = ' + ro + '_{fluido} * g * V_{desplazado}'}
                    data={dataWhereArquimedes}></SubTheme>
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