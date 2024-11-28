import { primaryColor } from "@/lib/colors"
import { FontAwesome } from "@expo/vector-icons"
import { Text, View } from "react-native"

interface CardProps {
    name: string,
    favorite: boolean,
    distance: number
}

export const Card = ({name, favorite, distance}: CardProps) => {
    return (
        <View>
            <Text>{name}</Text>
            <FontAwesome size={28} name="heart" color={favorite ? primaryColor : "#FFFFFF"} />
            <Text>{distance} KM</Text>
        </View>
    )
}