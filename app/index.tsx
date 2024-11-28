import { StyleSheet, Text, View } from "react-native";
import MapView from "react-native-maps";

export default function Index() {
  return (
    <View style={styles.container}>
      <MapView
        style={styles.map}
        initialRegion={{
          latitude: -23.545447,
          longitude: -46.732054,
          latitudeDelta: 0.01,
          longitudeDelta: 0.01
        }}
      />
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
  }
});
