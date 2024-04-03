import { StyleSheet, Text, View, ScrollView, Button, KeyboardAvoidingView, Platform } from 'react-native';
import { useState } from 'react';
import InputNumber from '../components/InputNumber';

export default function SegundaLeyNewtonCalculateScren({}) {

    const [fuerza, setFuerza] = useState('');
    const [masa, setMasa] = useState('');
    const [aceleracion, setAceleracion] = useState('');

    const calculate = () => {
        const fuerzaValue = parseFloat(fuerza);
        const masaValue = parseFloat(masa);
        const aceleracionValue = parseFloat(aceleracion);

        if (isNaN(fuerzaValue) && !isNaN(masaValue) && masaValue !== 0 && !isNaN(aceleracionValue)) {
            // Si se ingresaron masa y aceleracion pero no fuerza
            const fuerzaCalc = masaValue * aceleracionValue;
            setFuerza(fuerzaCalc.toFixed(4));
        } else if (isNaN(masaValue) && !isNaN(fuerzaValue) && !isNaN(aceleracionValue)) {
            // Si se ingresaron fuerza y aceleracion pero no masa
            const masaCalc = fuerzaValue / aceleracionValue;
            setMasa(masaCalc.toFixed(4));
        } else if (isNaN(aceleracionValue) && !isNaN(fuerzaValue) && !isNaN(masaValue) && masaValue !== 0) {
            // Si se ingresaron fuerza y masa pero no aceleracion
            const aceleracionCalc = fuerzaValue / masaValue;
            setAceleracion(aceleracionCalc.toFixed(4));
        } else {
            alert('No has rellenado los campos de manera correcta.');
        }
    };

    const clearInputs = () => {
        setFuerza('');
        setMasa('');
        setAceleracion('');
    };

    return (
        <KeyboardAvoidingView style={styles.container}
            behavior={Platform.OS === 'ios' ? 'padding' : 'height'}>
            <ScrollView contentContainerStyle={styles.scrollView}>
                <View>
                    <Text style={styles.title}>Ingresa los datos que conoces y presiona en Calcular...</Text>
                    <InputNumber
                        label={'Fuerza en Newtons'}
                        placeholder={'Fuerza en Newtons'}
                        value={fuerza} onChangeText={text => setFuerza(text)}></InputNumber>

                    <InputNumber
                        label={'Masa en kilogramos'}
                        placeholder={'Masa en kilogramos'}
                        value={masa}
                        onChangeText={text => setMasa(text)}></InputNumber>

                    <InputNumber
                        label={'Aceleración en mts/seg^2'}
                        placeholder={'Aceleración en mts/seg^2'}
                        value={aceleracion}
                        onChangeText={text => setAceleracion(text)}></InputNumber>

                    <Button title={'Calcular'} color={'#D91040'} onPress={calculate}></Button>
                    <Button title={'Limpiar'} color={'#000'} onPress={clearInputs}></Button>
                </View>
            </ScrollView>
        </KeyboardAvoidingView>
    );
}

const styles = StyleSheet.create ({
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
})