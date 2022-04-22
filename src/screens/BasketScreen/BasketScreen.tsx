import { StyleSheet, Text, View } from "react-native";
import { BasketItemsList } from "../../components/BasketItemsList/BasketItemsList";

import restaurants from "../../../assets/data/restaurants.json";

const restaurant = restaurants[0];

export function BasketScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>{restaurant.name}</Text>
      <Text style={styles.yourItems}>Your Items</Text>

      <BasketItemsList dishes={restaurant.dishes} />

      <View style={styles.separator} />

      <View style={styles.button}>
        <Text style={styles.buttonText}>Create order</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: "100%",
    paddingVertical: 40,
    padding: 10,
  },
  title: {
    fontSize: 24,
    fontWeight: "600",
    marginVertical: 10,
  },
  yourItems: {
    fontSize: 19,
    fontWeight: "600",
    marginVertical: 10,
  },
  separator: {
    height: 1,
    backgroundColor: "lightgray",
    marginVertical: 10,
  },
  button: {
    backgroundColor: "black",
    marginTop: "auto",
    padding: 20,
    alignItems: "center",
  },
  buttonText: {
    color: "white",
    fontWeight: "600",
    fontSize: 18,
  },
});
