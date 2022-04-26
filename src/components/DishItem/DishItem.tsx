import { StyleSheet, Text, View, Image, Pressable } from "react-native";

import { useNavigation } from "@react-navigation/native";
import { NavigationProp, ParamListBase } from "@react-navigation/native";

import { Dish } from "../RestaurantList/RestaurantList";

interface IProps {
  dish: Dish;
}

export function DishItem({ dish }: IProps) {
  const navigation: NavigationProp<ParamListBase> = useNavigation();

  return (
    <Pressable
      style={styles.container}
      onPress={() => navigation.navigate("Dish", { id: dish.id })}>
      <View style={styles.details}>
        <Text style={styles.name}>{dish.name}</Text>
        <Text style={styles.description} numberOfLines={2}>
          {dish.description}
        </Text>
        <Text style={styles.price}>$ {dish.price}</Text>
      </View>

      {dish.image && (
        <Image source={{ uri: dish.image }} style={styles.image} />
      )}
    </Pressable>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    paddingVertical: 10,
    marginVertical: 10,
    marginHorizontal: 20,
    borderBottomColor: "lightgray",
    borderBottomWidth: 1,
  },
  details: {
    flex: 1,
  },
  name: {
    fontWeight: "600",
    fontSize: 16,
    letterSpacing: 0.5,
  },
  description: {
    color: "gray",
    marginVertical: 5,
  },
  price: {
    fontSize: 16,
    fontWeight: "600",
  },
  image: {
    height: 100,
    aspectRatio: 1,
    marginLeft: 5,
  },
});
