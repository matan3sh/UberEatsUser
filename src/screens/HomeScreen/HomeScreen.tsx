import { RestaurantList } from "../../components/RestaurantList/RestaurantList";

import restaurants from "../../../assets/data/restaurants.json";

export function HomeScreen() {
  return <RestaurantList restaurants={restaurants} />;
}
