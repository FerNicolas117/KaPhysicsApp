import { StyleSheet, Text, View, ScrollView, Button, Animated } from 'react-native';
import React, { useState } from 'react';

import InputNumber from '../components/InputNumber';
import ButtonConverter from '../components/ButtonConverter';

export default function CalcVelocidadScreen({ value }) {

    const [distancia, setDistancia] = useState('');
    const [tiempo, setTiempo] = useState('');
    const [velocidad, setVelocidad] = useState(null);

    const calculateVelocidad = () => {
        const distanciaValue = parseFloat(distancia);
        const tiempoValue = parseFloat(tiempo);

        if (!isNaN(distanciaValue) && !isNaN(tiempoValue) && tiempoValue !== 0) {
            const velocidadValue = distanciaValue / tiempoValue;
            setVelocidad(velocidadValue.toFixed(4) + ' mts/seg');
        } else {
            alert('No has rellenado todos los campos.')
            setVelocidad(null);
        }
    };

    const converterVelocidadKmseg = () => {
        const velocidadValue = parseFloat(velocidad);
        if (!isNaN(velocidadValue)) {
            const velocidadKmSeg = velocidadValue / 1000;
            setVelocidad(velocidadKmSeg.toFixed(6) + ' km/s');
        }
    }

    return (
        <ScrollView style={styles.scrollView}>
            <View style={styles.container}>
                <Text style={styles.title}>Ingresa la siguiente información:</Text>
                <InputNumber placeholder={'Distancia en metros'} value={distancia} onChangeText={text => setDistancia(text)}></InputNumber>
                <InputNumber placeholder={'Tiempo en segundos'} value={tiempo} onChangeText={text => setTiempo(text)}></InputNumber>
                <Button title="Calcular" color={'#D91040'} onPress={calculateVelocidad} />
                {velocidad !== null && (
                    <Text style={styles.result}>La velocidad es: {velocidad}</Text>
                )}

                <ButtonConverter label={'Convertir a km/seg'} onPress={converterVelocidadKmseg} />
                <ButtonConverter label={'Convertir a mts/hrs'}></ButtonConverter>
                <ButtonConverter label={'Convertir a km/hrs'}></ButtonConverter>
                
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