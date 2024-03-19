import { StyleSheet, Text, View, ScrollView, TextInput } from 'react-native';

export default function InputNumber({ placeholder, value, onChangeText, label }) {
    return (
        <View style={styles.container}>
            <Text style={styles.label}>{ label }</Text>
            <TextInput
                style={styles.input}
                placeholder={placeholder}
                placeholderTextColor="#7C7C7C"
                keyboardType={'numeric'}
                value={value}
                onChangeText={onChangeText}>
            </TextInput>
        </View>
    )
}

const styles = StyleSheet.create ({
    container: {
        backgroundColor: '#fff',
        padding: 8,
    },

    label: {
        fontSize: 16,
        marginBottom: 8,
        marginTop: 8,
    },

    input: {
        minHeight: 48,
        backgroundColor: '#EEEEEE',
        borderColor: '#000',
        borderRadius: 12,
        paddingHorizontal: 10,
        color: '#000',
        fontSize: 16,
    },
})