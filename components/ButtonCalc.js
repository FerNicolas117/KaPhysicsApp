import { View, Pressable, StyleSheet, Text } from 'react-native';
import FontAwesome from "@expo/vector-icons/FontAwesome";

export default function ButtonCalc({ label, color, onPress, icon }) {
    return (
        <View style={styles.container}>
            <Pressable style={[styles.button, {backgroundColor:color}]} onPress={onPress}>
                <Text style={styles.label}>{ label }</Text>
                <FontAwesome style={styles.buttonIcon} name={icon} size={18}  />
            </Pressable>
        </View>
    );
}

const styles = StyleSheet.create ({
    container: {
        borderWidth: 0,
        borderColor: '#ffd33d',
        borderRadius: 12,
    },

    button: {
        padding: 12,
        borderRadius: 12,
        width: '100%',
        alignItems: 'center',
        justifyContent: 'center',
        flexDirection: 'row',
        marginBottom: 12,
    },

    buttonIcon: {
        paddingLeft: 8,
        color: '#fff'
    },

    label: {
        fontSize: 18,
        color: '#fff',
        fontWeight: '500'
    }
});