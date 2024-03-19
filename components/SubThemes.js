import { Pressable, StyleSheet, Text, View, ScrollView } from 'react-native';
import MathView, { MathText } from 'react-native-math-view';
import FontAwesome from "@expo/vector-icons/FontAwesome";

import Button from './Button';

export default function SubTheme({ icon, title, mathExpression, onPress, colorButton, data, description }) {
    return (
        <View style={styles.container}>
            <View style={styles.containerTitle}>
                <Text style={styles.title}>{ title }</Text>
                <FontAwesome style={styles.buttonIcon} name={icon} size={16}  />
            </View>

            <View style={styles.containerDescription}>
                <Text style={styles.description}>{ description }</Text>
            </View>
            
            <MathText style={styles.mathExpression} math={ mathExpression }></MathText>
            <Text style={styles.where}>Donde:</Text>

            <ScrollView style={styles.containerListItem}>
                {data.map((item, index) => (
                    <Text key={index} style={styles.listItem}>{'\u2022'} { item }</Text>
                ))}
            </ScrollView>

            <Button label={'Calcular'} color={colorButton} onPress={onPress} icon={'calculator'} />
        </View>
    );
}

const styles = StyleSheet.create ({
    container: {
        top: 42,
        backgroundColor: '#fff',
        borderWidth: 1,
        borderRadius: 16,
        borderColor: '#CECECE',
        padding: 12,
        minHeight: 100,
        marginBottom: 28,
    },

    containerTitle: {
        alignItems: 'center',
        flexDirection: 'row',
        marginBottom: 12,
    },

    title: {
        fontSize: 20,
        fontWeight: 'bold',
    },

    buttonIcon: {
        marginLeft: 12,
        color: '#D91040'
    },

    mathExpression: {
        fontSize: 18,
        marginBottom: 12,
    },

    where: {
        marginTop: 0,
        marginBottom: 12,
        fontSize: 16,
        fontWeight: 'bold',
        color: '#D91040',
    },

    containerListItem: {
        marginBottom: 16,
    },

    listItem: {
        fontSize: 16,
    },

    description: {
        fontSize: 16,
        marginBottom: 12,
    }
})