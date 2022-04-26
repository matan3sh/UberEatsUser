import { StyleSheet, Text, View, Image, TouchableOpacity } from "react-native";

import { useNavigation } from "@react-navigation/native";
import { NavigationProp, ParamListBase } from "@react-navigation/native";

import { Restaurant } from "../RestaurantList/RestaurantList";

interface IProps {
  restaurant: Restaurant;
}

export function RestaurantItem({ restaurant }: IProps) {
  const navigation: NavigationProp<ParamListBase> = useNavigation();

  return (
    <TouchableOpacity
      style={styles.restaurantContainer}
      onPress={() => navigation.navigate("Restaurant", { id: restaurant.id })}>
      <Image source={{ uri: restaurant.image }} style={styles.image} />

      <View style={styles.row}>
        <View>
          <Text style={styles.title}>{restaurant.name}</Text>
          <Text style={styles.subtitle}>
            ${restaurant.deliveryFee} &#8226; {restaurant.minDeliveryTime}-
            {restaurant.maxDeliveryTime} min
          </Text>
        </View>

        <View style={styles.rating}>
          <Text>{restaurant.rating}</Text>
        </View>
      </View>
    </TouchableOpacity>
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
  row: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  rating: {
    backgroundColor: "lightgray",
    width: 30,
    height: 30,
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 20,
  },
});
