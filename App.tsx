import { StyleSheet, View } from "react-native";
import { StatusBar } from "expo-status-bar";

import { RestaurantList } from "./src/components/RestaurantList/RestaurantList";

import restaurants from "./assets/data/restaurants.json";

export default function App() {
  return (
    <View style={styles.container}>
      <RestaurantList restaurants={restaurants} />

      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
    padding: 10,
  },
});
