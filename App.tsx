import { StatusBar } from "expo-status-bar";

import { HomeScreen } from "./src/screens/HomeScreen/HomeScreen";
import { RestaurantDetailsScreen } from "./src/screens/RestaurantDetailsScreen/RestaurantDetailsScreen";
import { DishDetailsScreen } from "./src/screens/DishDetailsScreen/DishDetailsScreen";
import { BasketScreen } from "./src/screens/BasketScreen/BasketScreen";

export default function App() {
  return (
    <>
      <BasketScreen />

      <StatusBar style="light" />
    </>
  );
}
