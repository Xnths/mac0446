import { CameraView, useCameraPermissions } from "expo-camera";
import { Link } from "expo-router";
import { Button, Text, View } from "react-native";

export default function Index () {
    const [permission, requestPermission] = useCameraPermissions();

    if(!permission) {
        return <View />
    }

    if(!permission.granted) {
        return (
            <View>
                <Text>Dê permissão para usar a câmera</Text>
                <Button title="Dar permissão" onPress={requestPermission} />
            </View>
        )
    }

    return (
        <View>
            <Link href="/">Voltar</Link>
            <CameraView style={{flex: 1}} facing="back" />
        </View>
    )
}