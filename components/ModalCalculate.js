import { Modal, View, Text, Pressable, StyleSheet, TextInput, Button } from 'react-native';
import MaterialIcons from '@expo/vector-icons/MaterialIcons';
import { useState } from 'react';
import React from 'react';

export default function ModalCalculate({ isVisible, children, onClose, label, fields }) {
    const [inputValues, setInputValues] = React.useState({});
    const [result, setResult] = useState(null);
    const [resulText, setResultText] = useState(null);

    const handleInputChange = (fieldName, value) => {
        setInputValues({ ...inputValues, [fieldName]: value });
    };

    const handleCalculate = () => {
        if (label === 'Velocidad') {
            // Calcula la velocidad si el modal es para velocidad
            const calculatedVelocity = parseFloat(inputValues.distance) / parseFloat(inputValues.time);
            setInputValues({ ...inputValues, velocity: calculatedVelocity.toFixed(4) });
            setResult(calculatedVelocity.toFixed(4));
            setResultText(calculatedVelocity.toFixed(4) + " m/s");
            if (isNaN(calculatedVelocity)) {
                alert("No has rellenado todos los campos.")
            }
            console.log(calculatedVelocity);
        } else if (label === 'Distancia') {
            setResultText("Distanceeeeee");
        } else if (label === 'Tiempo') {
            // Calcula el tiempo si el modal es para tiempo
            // Aquí puedes implementar la lógica para calcular el tiempo
        }
    };

    return (
        <Modal animationType="slide" transparent={true} visible={isVisible}>
            <View style={styles.modalContent}>
                <View style={styles.titleContainer}>
                    <Text style={styles.title}>{label}</Text>
                    <Pressable onPress={onClose}>
                        <MaterialIcons name="close" color={'#fff'} size={22} />
                    </Pressable>
                </View>
                <View style={styles.formContainer}>
                    {fields.map(field => (
                        <TextInput
                            key={field.name}
                            style={styles.input}
                            placeholder={field.placeholder}
                            placeholderTextColor="#7C7C7C"
                            onChangeText={text => handleInputChange(field.name, text)}
                            value={inputValues[field.name] || ''}
                            keyboardType={field.keyboardType || 'default'}
                        />
                    ))}
                    <Button title="Calcular" color={'#D91040'} onPress={handleCalculate} />
                    {result !== null && !isNaN(result) ? (
                        <Text style={styles.result}>{ resulText }</Text>
                    ) : (
                        <Text style={styles.resultNot}>Ingresa todos los valores</Text>
                    )}
                </View>
            </View>
        </Modal>
    );
}

const styles = StyleSheet.create({
    modalContent: {
        height: '80%',
        width: '100%',
        backgroundColor: '#fff',
        borderTopRightRadius: 18,
        borderTopLeftRadius: 18,
        position: 'absolute',
        bottom: 0,
    },

    titleContainer: {
        height: '8%',
        backgroundColor: '#000',
        borderTopRightRadius: 10,
        borderTopLeftRadius: 10,
        paddingHorizontal: 20,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
    },
    title: {
        color: '#fff',
        fontSize: 18,
        fontWeight: 'bold',
    },

    formContainer: {
        paddingHorizontal: 20,
        paddingTop: 20,
    },
    
    input: {
        minHeight: 48,
        backgroundColor: '#E9E9E9',
        borderColor: '#000',
        borderRadius: 12,
        marginBottom: 20,
        paddingHorizontal: 10,
        color: '#000',
        fontSize: 16,
    },

    result: {
        marginTop: 10,
        color: '#000',
        fontWeight: 'bold',
        textAlign: 'center',
        fontSize: 22,
    },

    resultNot: {
        marginTop: 10,
        fontSize: 18,
        textAlign: 'center'
    }
});