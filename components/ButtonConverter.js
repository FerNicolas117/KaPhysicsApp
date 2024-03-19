import { StyleSheet, Text, View, Pressable } from "react-native";

export default function ButtonConverter({ label, onPress }) {
    return (
        <View style={styles.container}>
            <Pressable onPress={onPress}>
                <Text style={styles.label}>{ label }</Text>
            </Pressable>
        </View>
    )
}

const styles = StyleSheet.create ({
    container: {
        top: 24,
    },

    label: {
        color: '#1BA6F8',
        fontSize: 18,
        textAlign: 'center',
        padding: 8,
    }
})