import { StatusBar } from "expo-status-bar";

import { HomeScreen } from "./src/screens/HomeScreen/HomeScreen";
import { RestaurantDetailsScreen } from "./src/screens/RestaurantDetailsScreen/RestaurantDetailsScreen";
import { DishDetailsScreen } from "./src/screens/DishDetailsScreen/DishDetailsScreen";

export default function App() {
  return (
    <>
      <DishDetailsScreen />

      <StatusBar style="light" />
    </>
  );
}
