import { StyleSheet, Text, View, ScrollView, Button } from 'react-native';
import { useState } from 'react';
import InputNumber from '../components/InputNumber';

export default function MruCalculateScreen({}) {

    const [velocidad, setVelocidad] = useState('');
    const [distancia, setDistancia] = useState('');
    const [tiempo, setTiempo] = useState('');

    const calculate = () => {
        const distanciaValue = parseFloat(distancia);
        const tiempoValue = parseFloat(tiempo);
        const velocidadValue = parseFloat(velocidad);

        if (!isNaN(distanciaValue) && !isNaN(tiempoValue) && tiempoValue !== 0 && isNaN(velocidadValue)) {
            // Si se ingresaron distancia y tiempo pero no velocidad
            const velocidadCalc = distanciaValue / tiempoValue;
            setVelocidad(velocidadCalc.toFixed(4));
        } else if (!isNaN(velocidadValue) && !isNaN(tiempoValue) && tiempoValue !== 0 && isNaN(distanciaValue)) {
            // Si se ingresaron velocidad y tiempo pero no distancia
            const distanciaCalc = velocidadValue * tiempoValue;
            setDistancia(distanciaCalc.toFixed(4));
        } else if (!isNaN(velocidadValue) && !isNaN(distanciaValue) && distanciaValue !== 0 && isNaN(tiempoValue)) {
            // Si se ingresaron velocidad y distancia pero no tiempo
            const tiempoCalc = distanciaValue / velocidadValue;
            setTiempo(tiempoCalc.toFixed(4));
        } else {
            alert('No has rellenado los campos de manera correcta.');
        }
    };

    const clearInputs = () => {
        setVelocidad('');
        setDistancia('');
        setTiempo('');
    };

    return (
        <ScrollView style={styles.scrollView}>
            <View style={styles.container}>
                <Text style={styles.title}>Ingresa los datos que conoces y presiona en Calcular...</Text>
                <InputNumber
                    label={'Distancia en metros'}
                    placeholder={'Distancia en metros'}
                    value={distancia}
                    onChangeText={text => setDistancia(text)}></InputNumber>

                <InputNumber
                    label={'Velocidad en mts/seg'}
                    placeholder={'Velocidad en mts/seg'}
                    value={velocidad} onChangeText={text => setVelocidad(text)}></InputNumber>

                <InputNumber
                    label={'Tiempo en segundos'}
                    placeholder={'Tiempo en segundos'}
                    value={tiempo}
                    onChangeText={text => setTiempo(text)}></InputNumber>

                <Button style={styles.button} title="Calcular" color={'#D91040'} onPress={calculate} />
                <Button style={styles.button} title="Limpiar" color={'#000'} onPress={clearInputs} />
            </View>
        </ScrollView>
    );
}

const styles = StyleSheet.create({
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
        marginBottom: 24,
    },
});