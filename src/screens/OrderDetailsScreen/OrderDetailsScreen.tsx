import { StyleSheet, Text, View, Image } from "react-native";
import { Ionicons } from "@expo/vector-icons";

import { OrderDetailsList } from "../../components/OrderDetailsList/OrderDetailsList";

import restaurants from "../../../assets/data/restaurants.json";
import orders from "../../../assets/data/orders.json";

const order = orders[0];

export function OrderDetailsScreen() {
  return (
    <View style={styles.container}>
      <Image source={{ uri: order.restaurant.image }} style={styles.image} />

      <Ionicons
        name="arrow-back-circle"
        size={45}
        color="white"
        style={styles.backIcon}
      />

      <View style={styles.wrapper}>
        <Text style={styles.title}>{order.restaurant.name}</Text>
        <Text style={styles.subtitle}>{order.status} &#8226; 2 days ago</Text>
      </View>

      <Text style={styles.orderTitle}>Your order</Text>

      <View style={styles.list}>
        <OrderDetailsList dishes={restaurants[0].dishes} />
      </View>
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
    fontSize: 28,
    fontWeight: "bold",
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
  orderTitle: {
    marginTop: 10,
    marginHorizontal: 10,
    fontSize: 22,
    letterSpacing: 0.75,
    fontWeight: "bold",
  },
  list: {
    padding: 15,
  },
});
