import { StyleSheet, Text, View } from "react-native";
import { OrderList } from "../../components/OrderList/OrderList";

import orders from "../../../assets/data/orders.json";

export function OrderScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Your orders</Text>
      <OrderList orders={orders} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: "100%",
    paddingVertical: 50,
    padding: 10,
  },
  title: {
    fontSize: 24,
    textAlign: "center",
    fontWeight: "bold",
  },
});
