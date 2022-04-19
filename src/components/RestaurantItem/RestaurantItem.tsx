import { StyleSheet, Text, View, Image } from "react-native";
import { Restaurant } from "../RestaurantList/RestaurantList";

interface IProps {
  restaurant: Restaurant;
}

export function RestaurantItem({ restaurant }: IProps) {
  return (
    <View style={styles.restaurantContainer}>
      <Image source={{ uri: restaurant.image }} style={styles.image} />
      <Text style={styles.title}>{restaurant.name}</Text>
      <Text style={styles.subtitle}>
        ${restaurant.deliveryFee} • {restaurant.minDeliveryTime}-
        {restaurant.maxDeliveryTime} min
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  restaurantContainer: {
    width: "100%",
    marginVertical: 10,
  },
  image: {
    width: "100%",
    aspectRatio: 5 / 3,
    marginBottom: 5,
  },
  title: {
    fontSize: 16,
    fontWeight: "500",
    marginVertical: 5,
  },
  subtitle: {
    color: "gray",
  },
});
