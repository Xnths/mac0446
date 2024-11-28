import { Card } from "@/components/card";
import { Text, View } from "react-native";

export default function Parques () {
    const parques = [
        {
            name: "Villa Lobos",
            favorite: false,
            distance: 8
        }
    ]

    return (
        <View>
            {parques.map(parque => (
                <Card name={parque.name} favorite={parque.favorite} distance={parque.distance} />
            ))}
        </View>
    )
}