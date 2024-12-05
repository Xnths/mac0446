import { primaryColor } from "@/lib/colors";
import { FontAwesome } from "@expo/vector-icons";
import { Link } from "expo-router";
import { StyleSheet, View, Image } from "react-native";
import MapView, { Marker } from "react-native-maps";

const soccerImage = require("@/assets/images/soccer.png")
const basketImage = require("@/assets/images/basket.png")

export default function Index() {
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
        <Marker
          coordinate={{
            latitude: -23.5458649,
            longitude: -46.7287297,
          }}
          icon={soccerImage}
          title="Av. Prof. Fonseca Rodrigues, 2001"
          description="Alto de Pinheiros, São Paulo - SP, 05461-010"
        />
        <Marker
          coordinate={{
            latitude: -23.545312,
            longitude: -46.727184,
          }}
          icon={basketImage}
          title="Av. Prof. Fonseca Rodrigues, 2001"
          description="Alto de Pinheiros, São Paulo - SP, 05461-010"
        />
        <Marker
          coordinate={{
            latitude: -23.5462345,
            longitude: -46.7271344,
          }}
          icon={soccerImage}
          title="Av. Prof. Fonseca Rodrigues, 2001"
          description="Alto de Pinheiros, São Paulo - SP, 05461-010"
        />
        <Marker
          coordinate={{
            latitude: -23.5462338,
            longitude: -46.7271339,
          }}
          icon={basketImage}
          title="Av. Prof. Fonseca Rodrigues, 2001"
          description="Alto de Pinheiros, São Paulo - SP, 05461-010"
        />
      </MapView>
      <Link href="/ar" style={styles.arButton}>
        <FontAwesome size={32} name="camera" />
      </Link>
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
  arButton: {
    position: "absolute",
    bottom: 20,
    right: 20,
    backgroundColor: primaryColor,
    padding: 10,
    borderRadius: 20,
    color: "white",
    textAlign: "center"
  }
});
