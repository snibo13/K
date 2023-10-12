import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    card: {
        backgroundColor: '#fff',
        borderRadius: 10,
        padding: 20,
        marginVertical: 8,
        marginHorizontal: 16,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: .25,
        shadowRadius: 4,
        elevation: 5,
    },
    input: {
        borderWidth: 1,
        borderColor: '#ddd',
        padding: 10,
        fontSize: 18,
        borderRadius: 6,
        marginBottom: 10,
    },
    title: {
        fontSize: 20,
        fontWeight: 'bold',
    },
});