import { createStackNavigator } from "@react-navigation/stack";

import { HomeScreen } from "../screens/HomeScreen/HomeScreen";
import { RestaurantDetailsScreen } from "../screens/RestaurantDetailsScreen/RestaurantDetailsScreen";
import { DishDetailsScreen } from "../screens/DishDetailsScreen/DishDetailsScreen";
import { BasketScreen } from "../screens/BasketScreen/BasketScreen";
import { OrderScreen } from "../screens/OrderScreen/OrderScreen";
import { OrderDetailsScreen } from "../screens/OrderDetailsScreen/OrderDetailsScreen";

const Stack = createStackNavigator();

export function RootNavigator() {
  return (
    <Stack.Navigator initialRouteName="Home">
      <Stack.Screen name="Home" component={HomeScreen} />
      <Stack.Screen
        name="Restaurant"
        component={RestaurantDetailsScreen}
        options={{ headerShown: false }}
      />
    </Stack.Navigator>
  );
}
