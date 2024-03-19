import { StyleSheet, Text, View, ScrollView } from 'react-native';
import { useState } from 'react';

import ButtonCalc from '../components/ButtonCalc';
import ModalCalculate from '../components/ModalCalculate';

export default function VelocidadScreen({navigation}) {

    const [isModalCalculateVisible, setIsModalCalculateVisible] = useState(false);
    const [modalText, setModalText] = useState('');
    const [distance, setDistance] = useState('');
    const [time, setTime] = useState('');
    const [velocity, setVelocity] = useState('');

    const showModalCalculate = (text) => {
        setIsModalCalculateVisible(true);
        setModalText(text);
        if (text === 'Velocidad') {
            setDistance('');
            setTime('');
            setVelocity('');
            console.log('Velocidad');
        } else if (text === 'Distancia') {
            setDistance('');
            setTime('');
            console.log('Distancia');
        }
    }

    const onModalCalculateClose = () => {
        setIsModalCalculateVisible(false);
        console.log('Closed');
        setDistance('');
        setVelocity('');
    }

    let modalFields = [];
    if (modalText === "Velocidad") {
        modalFields = [
            { name: "distance", placeholder: "Distancia en metros", keyboardType: "numeric", value: distance },
            { name: "time", placeholder: "Tiempo en segundos", keyboardType: "numeric", value: time }
        ];
    } else if (modalText === "Distancia") {
        modalFields = [
            { name: "time", placeholder: "Tiempo en segundos", keyboardType: "numeric", value: time },
            { name: "velocity", placeholder: "Velocidad en m/s", keyboardType: "numeric", value: velocity }
        ];
    }

    return (
        <ScrollView style={styles.scrollView}>
            <View style={styles.container}>
                <Text style={styles.title}>Selecciona lo que deseas calcular...</Text>
                <View style={styles.containerOptions}>
                    <ButtonCalc label={"Velocidad"} color={'#000'} onPress={() => navigation.navigate('CalcVelocidadScreen')} />
                    <ButtonCalc label={"Distancia"} color={'#000'} onPress={() => navigation.navigate('CalcDistanciaScreen')} />
                    <ButtonCalc label={"Tiempo"} color={'#000'} onPress={() => showModalCalculate('Tiempo')} />

                    <ModalCalculate
                        isVisible={isModalCalculateVisible}
                        onClose={onModalCalculateClose}
                        label={modalText}
                        fields={modalFields} />
                </View>
            </View>
        </ScrollView>
    );
}

const styles = StyleSheet.create ({
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
    },

    title: {
        fontSize: 24,
        fontWeight: 'bold',
        marginBottom: 8,
        marginTop: 24,
    },

    containerOptions: {
        flex: 1,
        backgroundColor: '#fff', // Contenedor de los bootones con Flex
        paddingTop: 32,
        padding: 12,
        marginBottom: 24,
        height: '100%',
        width: '100%',
    }
});