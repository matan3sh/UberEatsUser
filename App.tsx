import { StatusBar } from "expo-status-bar";

import { HomeScreen } from "./src/screens/HomeScreen/HomeScreen";
import { RestaurantDetailsScreen } from "./src/screens/RestaurantDetailsScreen/RestaurantDetailsScreen";

export default function App() {
  return (
    <>
      <RestaurantDetailsScreen />

      <StatusBar style="light" />
    </>
  );
}
