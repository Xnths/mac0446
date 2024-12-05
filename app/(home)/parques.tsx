import { Card } from "@/components/card";
import { StyleSheet, Text, View } from "react-native";

export default function Parques () {
    const parques = [
        {
            name: "Villa Lobos",
            favorite: false,
            distance: 8
        },
        {
            name: "Ibirapuera",
            favorite: true,
            distance: 24
        }
    ]

    return (
        <View style={styles.container}>
            {parques.map(parque => (
                <Card key={parque.name} name={parque.name} favorite={parque.favorite} distance={parque.distance} />
            ))}
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        display: "flex",
        flexDirection: "column",
        gap: 16,
        padding: 16
    }
})