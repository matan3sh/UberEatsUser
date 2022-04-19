import { StyleSheet, Text, View, Image, FlatList } from "react-native";
import { Ionicons } from "@expo/vector-icons";

import restaurants from "../../../assets/data/restaurants.json";
import { DishList } from "../../components/DishList/DishList";

const restaurant = restaurants[0];

export function RestaurantDetailsScreen() {
  return (
    <View style={styles.container}>
      <Image source={{ uri: restaurant.image }} style={styles.image} />

      <Ionicons
        name="arrow-back-circle"
        size={45}
        color="white"
        style={styles.backIcon}
      />

      <View style={styles.wrapper}>
        <Text style={styles.title}>{restaurant.name}</Text>
        <Text style={styles.subtitle}>
          ${restaurant.deliveryFee} &#8226; {restaurant.minDeliveryTime}-
          {restaurant.maxDeliveryTime} min
        </Text>
      </View>

      <DishList dishes={restaurant.dishes} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  wrapper: {
    margin: 10,
  },
  image: {
    width: "100%",
    aspectRatio: 5 / 3,
  },
  title: {
    fontSize: 35,
    fontWeight: "600",
    marginVertical: 10,
  },
  subtitle: {
    fontSize: 15,
    color: "#525252",
  },
  backIcon: {
    position: "absolute",
    top: 40,
    left: 10,
  },
});
