import { StatusBar } from "expo-status-bar";

import { HomeScreen } from "./src/screens/HomeScreen/HomeScreen";
import { RestaurantDetailsScreen } from "./src/screens/RestaurantDetailsScreen/RestaurantDetailsScreen";
import { DishDetailsScreen } from "./src/screens/DishDetailsScreen/DishDetailsScreen";
import { BasketScreen } from "./src/screens/BasketScreen/BasketScreen";
import { OrderScreen } from "./src/screens/OrderScreen/OrderScreen";

export default function App() {
  return (
    <>
      <OrderScreen />

      <StatusBar style="light" />
    </>
  );
}
