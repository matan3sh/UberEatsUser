import { StyleSheet, View, FlatList } from "react-native";
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
      <FlatList
        data={restaurants}
        renderItem={({ item }) => <RestaurantItem restaurant={item} />}
        showsVerticalScrollIndicator={false}
      />
    </View>
  );
}

const styles = StyleSheet.create({});
