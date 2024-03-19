import { Pressable, StyleSheet, Text, View } from 'react-native';
import FontAwesome from "@expo/vector-icons/FontAwesome";

import Button from './Button';

export default function PhysicTheme({ icon, title, label, onPress, colorButton }) {
    return (
        <View style={styles.container}>
            <View style={styles.containerTitle}>
                <Text style={styles.title}>{ title }</Text>
                <FontAwesome style={styles.buttonIcon} name={icon} size={16}  />
            </View>
            <Text style={styles.description}>{ label }</Text>
            <Button label={'Acceder'} color={colorButton} onPress={onPress} icon={'angle-right'} />
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
        marginBottom: 26,
        minHeight: 100,
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

    description: {
        fontSize: 16,
        marginBottom: 12,
    }
})