import { primaryColor } from "@/lib/colors";
import { FontAwesome } from "@expo/vector-icons";
import { Link } from "expo-router";
import { useState } from "react";
import { Pressable, StyleSheet, Text, View } from "react-native";
import MapView, { Marker } from "react-native-maps";

const soccerImage = require("@/assets/images/soccer.png");
const basketImage = require("@/assets/images/basket.png");

const soccerMarkers = [
  {
    id: 1,
    coordinate: { latitude: -23.5458649, longitude: -46.7287297 },
    title: "Quadra do auditório",
    description: "Quadra poliesportiva."
  },
  {
    id: 3,
    coordinate: { latitude: -23.5462345, longitude: -46.7271344 },
    title: "Quadra Powerade",
    description: "Campo de futebol aberto."
  }
];

const basketMarkers = [
  {
    id: 2,
    coordinate: { latitude: -23.545312, longitude: -46.727184 },
    title: "Quadra esporte e lazer",
    description: "Meia quadra."
  },
  {
    id: 4,
    coordinate: { latitude: -23.5462338, longitude: -46.7271339 },
    title: "Quadra infantil",
    description: "Quadra reduzida para prática de esporte infantil."
  }
];

export default function Index() {
  const [showSoccer, setShowSoccer] = useState(true);
  const [showBasket, setShowBasket] = useState(true);

  return (
    <View style={styles.container}>
      <MapView
        style={styles.map}
        initialRegion={{
          latitude: -23.5458649,
          longitude: -46.7287297,
          latitudeDelta: 0.01,
          longitudeDelta: 0.01
        }}
        showsPointsOfInterest={false}
        customMapStyle={[
          {
            featureType: "poi",
            stylers: [
              {
                visibility: "off"
              }
            ]
          }
        ]}
      >
        {showSoccer && soccerMarkers.map((marker) => (
          <Marker
            key={marker.id}
            coordinate={marker.coordinate}
            icon={soccerImage}
            title={marker.title}
            description={marker.description}
          />
        ))}
        
        {showBasket && basketMarkers.map((marker) => (
          <Marker
            key={marker.id}
            coordinate={marker.coordinate}
            icon={basketImage}
            title={marker.title}
            description={marker.description}
          />
        ))}
      </MapView>
      
      <View style={styles.bottomOptions}>
        <View style={{ display: "flex", flexDirection: "row", gap: 4, alignItems: "center" }}>
          <Pressable
            onPress={() => setShowBasket(!showBasket)}
            style={[styles.button, showBasket ? styles.activeFilter : styles.disabledFilter]}
          >
            {showBasket && <FontAwesome size={16} name="remove" color="white" />}
            <Text style={styles.buttonText}>Futebol</Text>
          </Pressable>
          <Pressable
            onPress={() => setShowSoccer(!showSoccer)}
            style={[styles.button, showSoccer ? styles.activeFilter : styles.disabledFilter]}
          >
            {showSoccer && <FontAwesome size={16} name="remove" color="white" />}
            <Text style={styles.buttonText}>Basquete</Text>
          </Pressable>
        </View>
        <Link href="/ar" style={styles.arButton}>
          <FontAwesome size={32} name="camera" />
        </Link>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  map: {
    width: "100%",
    height: "100%"
  },
  bottomOptions: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    width: "90%",
    position: "absolute",
    bottom: 20,
    left: 20,
  },
  arButton: {
    backgroundColor: primaryColor,
    padding: 10,
    borderRadius: 20,
    color: "white",
    textAlign: "center"
  },
  button: {
    padding: 10,
    borderRadius: 20,
    width: 120,
    alignItems: "center",
    justifyContent: "center",
    display: "flex",
    flexDirection: "row",
    gap: 4,
    fontWeight: "bold"
  },
  activeFilter: {
    backgroundColor: primaryColor,
  },
  disabledFilter: {
    backgroundColor: "#171717",
  },
  buttonText: {
    color: "white",
    fontSize: 16,
    fontWeight: "bold"
  }
});
