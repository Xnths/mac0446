import { primaryColor } from "@/lib/colors";
import { FontAwesome } from "@expo/vector-icons";
import { Tabs } from "expo-router";

export default function RootLayout() {

  const iconSize = 24;

  return <Tabs screenOptions={{headerShown: false, tabBarActiveTintColor: primaryColor}}>
    <Tabs.Screen
      name="index"
      options={{
        title: "Mapa",
        tabBarIcon: ({color}) => <FontAwesome size={iconSize} name="map" color={color} />
      }}
    />
    <Tabs.Screen
      name="parques"
      options={{
        title: "Parques",
        tabBarIcon: ({color}) => <FontAwesome size={iconSize} name="tree" color={color} />
      }}
    />
    <Tabs.Screen
      name="agenda"
      options={{
        title: "Agenda",
        tabBarIcon: ({color}) => <FontAwesome size={iconSize} name="calendar" color={color} />
      }}
    />
    <Tabs.Screen
      name="chat"
      options={{
        title: "Chat",
        tabBarIcon: ({color}) => <FontAwesome size={iconSize} name="comment" color={color} />
      }}
    />
    <Tabs.Screen
      name="favoritos"
      options={{
        title: "Favoritos",
        tabBarIcon: ({color}) => <FontAwesome size={iconSize} name="heart" color={color} />
      }}
    />
  </Tabs>
}
