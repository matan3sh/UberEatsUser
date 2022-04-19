import { StyleSheet, View } from "react-native";
import { RestaurantItem } from "../RestaurantItem/RestaurantItem";

interface Dish {
  name: string;
  description: string;
  price: number;
  image?: string;
}

export interface Restaurant {
  id: string;
  name: string;
  deliveryFee: number;
  minDeliveryTime: number;
  maxDeliveryTime: number;
  rating: number;
  image: string;
  dishes: Dish[];
}

interface IProps {
  restaurants: Restaurant[];
}

export function RestaurantList({ restaurants }: IProps) {
  return (
    <View>
      {restaurants.map((restaurant) => (
        <RestaurantItem key={restaurant.id} restaurant={restaurant} />
      ))}
    </View>
  );
}

const styles = StyleSheet.create({});
