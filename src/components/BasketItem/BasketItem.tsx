import { StyleSheet, Text, View } from "react-native";
import { Dish } from "../RestaurantList/RestaurantList";

interface IProps {
  dish: Dish;
}

export function BasketItem({ dish }: IProps) {
  return (
    <View style={styles.container}>
      <View style={styles.quantityContainer}>
        <Text>1</Text>
      </View>
      <Text style={styles.itemName}>{dish.name}</Text>
      <Text style={styles.price}>${dish.price}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    alignItems: "center",
    marginVertical: 10,
  },
  itemName: {
    fontWeight: "600",
  },
  price: {
    marginLeft: "auto",
  },
  quantityContainer: {
    backgroundColor: "lightgray",
    paddingHorizontal: 5,
    marginRight: 10,
    paddingVertical: 2,
    borderRadius: 3,
  },
});
