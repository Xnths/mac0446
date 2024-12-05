import { primaryColor } from "@/lib/colors";
import { FontAwesome } from "@expo/vector-icons";
import { Link } from "expo-router";
import { useState } from "react";
import { Button, StyleSheet, View } from "react-native";
import MapView, { Marker } from "react-native-maps";

const soccerImage = require("@/assets/images/soccer.png");
const basketImage = require("@/assets/images/basket.png");

const soccerMarkers = [
  {
    id: 1,
    coordinate: { latitude: -23.5458649, longitude: -46.7287297 },
    title: "Av. Prof. Fonseca Rodrigues, 2001",
    description: "Alto de Pinheiros, São Paulo - SP, 05461-010"
  },
  {
    id: 3,
    coordinate: { latitude: -23.5462345, longitude: -46.7271344 },
    title: "Av. Prof. Fonseca Rodrigues, 2001",
    description: "Alto de Pinheiros, São Paulo - SP, 05461-010"
  }
];

const basketMarkers = [
  {
    id: 2,
    coordinate: { latitude: -23.545312, longitude: -46.727184 },
    title: "Av. Prof. Fonseca Rodrigues, 2001",
    description: "Alto de Pinheiros, São Paulo - SP, 05461-010"
  },
  {
    id: 4,
    coordinate: { latitude: -23.5462338, longitude: -46.7271339 },
    title: "Av. Prof. Fonseca Rodrigues, 2001",
    description: "Alto de Pinheiros, São Paulo - SP, 05461-010"
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
        <View style={{display: "flex", flexDirection: "row", gap: 4, alignItems: "center"}}>
          <Button onPress={() => setShowBasket(!showBasket)} title="Futebol" />
          <Button onPress={() => setShowSoccer(!showSoccer)} title="Basquete" />
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
  }
});
