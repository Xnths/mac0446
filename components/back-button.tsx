import { FontAwesome } from "@expo/vector-icons"
import { useNavigation } from "expo-router"
import { Pressable, StyleSheet, Text } from "react-native"

export const BackButton = () => {
    const navigation = useNavigation()

    return (
        <Pressable onPress={() => navigation.goBack()} style={styles.button}>
            <FontAwesome size={16} name="arrow-left" color="white" />
            <Text style={styles.buttonText}>Voltar</Text>
        </Pressable>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    button: {
        zIndex: 10,
        top: 16,
        left: 16,
        position: "absolute",
        padding: 10,
        borderRadius: 20,
        width: "auto",
        alignItems: "center",
        justifyContent: "center",
        flexDirection: "row",
        gap: 4,
        backgroundColor: "#171717"
    },
    buttonText: {
        color: "white",
        fontWeight: "bold",
        textAlign: "center",
    },
    camera: {
        flex: 1,
    },
    permissionContainer: {
        flex: 1,
        alignItems: "center",
        justifyContent: "center",
    },
    permissionText: {
        marginBottom: 16,
        fontSize: 16,
        textAlign: "center",
    },
});
