import { StyleSheet, Text, View, ScrollView, Button } from 'react-native';
import React, { useState } from 'react';

import InputNumber from '../components/InputNumber';

export default function CalcDistanciaScreen({}) {

    const [distancia, setDistancia] = useState(null);
    const [tiempo, setTiempo] = useState('');
    const [velocidad, setVelocidad] = useState('');

    const calculateDistancia = () => {
        const tiempoValue = parseFloat(tiempo);
        const velocidadValue = parseFloat(velocidad);

        if (!isNaN(velocidadValue) && !isNaN(tiempoValue) && tiempoValue !== 0) {
            const distanciaValue = velocidadValue * tiempoValue;
            setDistancia(distanciaValue.toFixed(6));
        } else {
            alert('No has rellenado todos los campos.');
            setDistancia(null);
        }
    };

    return (
        <ScrollView style={styles.scrollView}>
            <View style={styles.container}>
                <Text style={styles.title}>Ingresa la siguiente información:</Text>
                <InputNumber placeholder={'Velocidad en m/s'} value={velocidad} onChangeText={text => setVelocidad(text)}></InputNumber>
                <InputNumber placeholder={'Tiempo en segundos'} value={tiempo} onChangeText={text => setTiempo(text)}></InputNumber>
                <Button title="Calcular" color={'#D91040'} onPress={calculateDistancia} />
                {distancia !== null && (
                    <Text style={styles.result}>La distancia es: {distancia} m</Text>
                )}
            </View>
        </ScrollView>
    )
}

const styles = StyleSheet.create ({
    scrollView: {
        height: '100%',
        backgroundColor: '#fff',
    },

    container: {
        flex: 1,
        backgroundColor: '#fff',
        height: '100%',
        paddingTop: 0,
        paddingHorizontal: 20,
    },

    title: {
        fontSize: 24,
        fontWeight: 'bold',
        marginBottom: 8,
        marginTop: 24,
        marginBottom: 24,
    },

    result: {
        marginTop: 20,
        fontSize: 18,
        fontWeight: 'bold',
        textAlign: 'center',
    },
})