import { StyleSheet, Text, View, Image } from "react-native";
import { Dish } from "../RestaurantList/RestaurantList";

interface IProps {
  dish: Dish;
}

export function DishItem({ dish }: IProps) {
  return (
    <View style={styles.container}>
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
    </View>
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
