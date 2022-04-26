import { StyleSheet, View, FlatList } from "react-native";
import { RestaurantItem } from "../RestaurantItem/RestaurantItem";

export interface Dish {
  id: string;
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
  dishes?: Dish[];
  address?: string;
  lat?: number;
  lng?: number;
  createdAt?: string;
  updatedAt?: string;
}

interface IProps {
  restaurants: Restaurant[];
}

export function RestaurantList({ restaurants }: IProps) {
  return (
    <View style={styles.container}>
      <FlatList
        data={restaurants}
        renderItem={({ item }) => (
          <RestaurantItem key={item.id} restaurant={item} />
        )}
        showsVerticalScrollIndicator={false}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 10,
  },
});
