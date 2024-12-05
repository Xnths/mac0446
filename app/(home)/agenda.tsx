import { primaryColor } from "@/lib/colors";
import { FontAwesome } from "@expo/vector-icons";
import { Pressable, StyleSheet } from "react-native";
import { Text, View } from "react-native";

export default function Agenda () {
    return (
        <View style={styles.container}>
            <Pressable style={styles.button}>
                <FontAwesome size={16} name="plus" color="white" />
                <Text style={styles.newText}>Novo evento</Text>
            </Pressable>
            <Text style={styles.sectionTitle}>Eventos</Text>
            <View>
                <View style={styles.containerCard}>
                <View style={styles.containerDistance}>
                        <Text style={styles.title}>Futebol</Text>
                        <Text style={styles.description}>Publico Álvo: criança</Text>
                    </View>
                    <View style={styles.containerDistance}>
                        <Text style={styles.distance}>18:00</Text>
                    </View>
                </View>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 16,
        display: "flex",
        flexDirection: "column",
        gap: 16
    },
    button: {
        padding: 10,
        borderRadius: 10,
        width: 120,
        alignItems: "center",
        justifyContent: "center",
        display: "flex",
        flexDirection: "row",
        gap: 4,
        fontWeight: "bold",
        backgroundColor: primaryColor
    },
    newText: {
        color: "white",
        fontWeight: "bold"
    },
    containerCard: {
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-between",
        width: "100%",
        alignItems: "center",
        gap: 16,
        backgroundColor: "#D9D9D9",
        padding: 24,
        borderRadius: 24
    },  
    containerDistance: {
        display: "flex",
        flexDirection: "column",
        justifyContent: "flex-start",
        alignItems: "flex-start"
    },
    title: {
        fontSize: 24,
        fontWeight: "bold"
    },
    sectionTitle: {
        fontWeight: "bold",
        fontSize: 32,
    },
    distance: {
        fontSize: 32,
        fontWeight: "bold",
        color: primaryColor,
        lineHeight: 32
    },
    description: {
        fontSize: 16,
        fontWeight: "300",
        fontStyle: "italic"
    }
})