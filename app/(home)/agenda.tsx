import { primaryColor } from "@/lib/colors";
import { FontAwesome } from "@expo/vector-icons";
import { Link } from "expo-router";
import { Pressable, ScrollView, StyleSheet } from "react-native";
import { Text, View } from "react-native";

export default function Agenda () {
    const events = [
        {
            title: "Futebol",
            target: "criança",
            time: "18:00",
            date: "24/11"
        },
        {
            title: "Aula de dança",
            target: "adolescentes",
            time: "15:00",
            date: "25/11"
        },
        {
            title: "Workshop culinário",
            target: "adultos",
            time: "10:00",
            date: "26/11"
        },
        {
            title: "Palestra",
            target: "todos",
            time: "14:00",
            date: "27/11"
        },
        {
            title: "Yoga ao ar livre",
            target: "adultos",
            time: "07:00",
            date: "28/11"
        }
    ];

    return (
        <View style={styles.container}>
            <Link href="/calendar" style={styles.button}>
                <FontAwesome size={16} name="plus" color="white" />
                <Text style={styles.newText}>Novo evento</Text>
            </Link>
            <Text style={styles.sectionTitle}>Eventos</Text>
            <View style={styles.containerDistance}>
                {events.map((event, index) => (
                    <EventCard 
                        key={index} 
                        title={event.title} 
                        target={event.target} 
                        time={event.time} 
                        date={event.date} 
                    />
                ))}
            </View>
        </View>
    );
}


const EventCard = ({ title, target, time, date }: { title: string, target: string, time: string, date: string }) => {
    return (
        <View style={styles.containerCard}>
            <View style={styles.containerDistance}>
                <Text style={styles.title}>{title}</Text>
                <Text style={styles.description}>Publico Álvo: {target}</Text>
            </View>
            <View style={styles.containerDistance}>
                <Text style={styles.distance}>{date}</Text>
                <Text style={styles.distance}>{time}</Text>
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
        alignItems: "flex-start",
        gap: 4,
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