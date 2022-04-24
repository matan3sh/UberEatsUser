import { StatusBar } from "expo-status-bar";

import { HomeScreen } from "./src/screens/HomeScreen/HomeScreen";
import { RestaurantDetailsScreen } from "./src/screens/RestaurantDetailsScreen/RestaurantDetailsScreen";
import { DishDetailsScreen } from "./src/screens/DishDetailsScreen/DishDetailsScreen";
import { BasketScreen } from "./src/screens/BasketScreen/BasketScreen";
import { OrderScreen } from "./src/screens/OrderScreen/OrderScreen";
import { OrderDetailsScreen } from "./src/screens/OrderDetailsScreen/OrderDetailsScreen";

export default function App() {
  return (
    <>
      <OrderDetailsScreen />

      <StatusBar style="light" />
    </>
  );
}
