import { BackButton } from "@/components/back-button";
import { FontAwesome } from "@expo/vector-icons";
import { CameraView, useCameraPermissions } from "expo-camera";
import { Link, useNavigation } from "expo-router";
import { Button, Pressable, StyleSheet, Text, View } from "react-native";

export default function Index() {
    const [permission, requestPermission] = useCameraPermissions();

    if (!permission) {
        return <View />;
    }

    if (!permission.granted) {
        return (
            <View style={styles.permissionContainer}>
                <Text style={styles.permissionText}>Dê permissão para usar a câmera</Text>
                <Button title="Dar permissão" onPress={requestPermission} />
            </View>
        );
    }

    return (
        <View style={styles.container}>
            <BackButton />
            <CameraView style={styles.camera} facing="back" />
        </View>
    );
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
