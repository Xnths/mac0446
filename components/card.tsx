import { primaryColor } from "@/lib/colors"
import { FontAwesome } from "@expo/vector-icons"
import { StyleSheet, Text, View } from "react-native"

interface CardProps {
    name: string,
    favorite: boolean,
    distance: number
}

export const Card = ({name, favorite, distance}: CardProps) => {
    return (
        <View style={styles.containerCard}>
            <View style={styles.containerText}>
                <Text style={styles.title}>{name}</Text>
                <FontAwesome size={28} name="heart" color={favorite ? primaryColor : "#FFFFFF"} />
            </View>
            <View style={styles.containerDistance}>
                <Text style={styles.distance}>{distance}</Text>
                <Text style={styles.distance}>KM</Text>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
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
    containerText: {
        display: "flex",
        flexDirection: "row",
        alignItems: "center",
        gap: 16
    },
    containerDistance: {
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center"
    },
    title: {
        fontSize: 24,
        fontWeight: "bold"
    },
    distance: {
        fontSize: 32,
        fontWeight: "bold",
        color: primaryColor,
        lineHeight: 32
    }
})