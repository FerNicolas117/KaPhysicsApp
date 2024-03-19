import { StyleSheet, Text, View, ScrollView, Button, KeyboardAvoidingView, Platform } from 'react-native';
import { useState } from 'react';
import InputNumber from '../components/InputNumber';

export default function MruaCalculateScreen({}) {

    const [velocidadInicial, setVelocidadInicial] = useState('');
    const [distancia, setDistancia] = useState('');
    const [tiempo, setTiempo] = useState('');
    const [aceleracion, setAceleracion] = useState('');

    const calculate = () => {
        const velocidadInicialValue = parseFloat(velocidadInicial);
        const distanciaValue = parseFloat(distancia);
        const tiempoValue = parseFloat(tiempo);
        const aceleracionValue = parseFloat(aceleracion);

        if (!isNaN(velocidadInicialValue) && !isNaN(tiempoValue) && tiempoValue !== 0 && !isNaN(aceleracionValue)) {
            // Calcular distancia si se tienen velocidad inicial, tiempo y aceleración
            const distanciaCalc = velocidadInicialValue * tiempoValue + 0.5 * aceleracionValue * Math.pow(tiempoValue, 2);
            setDistancia(distanciaCalc.toFixed(4));
        } else if (!isNaN(velocidadInicialValue) && !isNaN(distanciaValue) && distanciaValue !== 0 && !isNaN(aceleracionValue)) {
            // Calcular tiempo si se tienen velocidad inicial, distancia y aceleración
            const tiempoCalc = (Math.sqrt(Math.pow(velocidadInicialValue, 2) + 2 * aceleracionValue * distanciaValue) - velocidadInicialValue) / aceleracionValue;
            setTiempo(tiempoCalc.toFixed(4));
        } else if (!isNaN(velocidadInicialValue) && !isNaN(distanciaValue) && distanciaValue !== 0 && !isNaN(tiempoValue)) {
            // Calcular aceleración si se tienen velocidad inicial, distancia y tiempo
            const aceleracionCalc = 2 * (distanciaValue - velocidadInicialValue * tiempoValue) / Math.pow(tiempoValue, 2);
            setAceleracion(aceleracionCalc.toFixed(4));
        } else {
            alert('No has rellenado los campos de manera correcta.');
        }
    };

    const clearInputs = () => {
        setVelocidadInicial('');
        setDistancia('');
        setTiempo('');
        setAceleracion('');
    };

    return (
        <KeyboardAvoidingView style={styles.container}
            behavior={Platform.OS === 'ios' ? 'padding' : 'height'}>
            <ScrollView contentContainerStyle={styles.scrollView}>
                <View>
                    <Text style={styles.title}>Ingresa los datos que conoces y presiona en Calcular MRUA...</Text>
                    <InputNumber
                        label={'Distancia en metros'}
                        placeholder={'Distancia en metros'}
                        value={distancia}
                        onChangeText={text => setDistancia(text)}></InputNumber>
                        
                    <InputNumber
                        label={'Velocidad inicial en mts/seg'}
                        placeholder={'Velocidad inicial en mts/seg'}
                        value={velocidadInicial}
                        onChangeText={text => setVelocidadInicial(text)}></InputNumber>

                    <InputNumber
                        label={'Tiempo en segundos'}
                        placeholder={'Tiempo en segundos'}
                        value={tiempo}
                        onChangeText={text => setTiempo(text)}></InputNumber>

                    <InputNumber
                        label={'Aceleración en mts/seg²'}
                        placeholder={'Aceleración en mts/seg²'}
                        value={aceleracion}
                        onChangeText={text => setAceleracion(text)}></InputNumber>

                    <Button style={styles.button} title="Calcular" color={'#D91040'} onPress={calculate} />
                    <Button style={styles.button} title="Limpiar" color={'#000'} onPress={clearInputs} />
                </View>
            </ScrollView>
        </KeyboardAvoidingView>
    );
}

const styles = StyleSheet.create({
    scrollView: {
        flexGrow: 1,
        backgroundColor: '#fff',
        paddingHorizontal: 20,
        paddingBottom: 110,
    },

    container: {
        flex: 1,
        backgroundColor: '#fff',
        justifyContent: 'center',
    },

    title: {
        fontSize: 24,
        fontWeight: 'bold',
        marginBottom: 8,
        marginTop: 24,
        marginBottom: 24,
    },
});
