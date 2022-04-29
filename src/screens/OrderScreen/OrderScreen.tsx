import { StyleSheet, View } from "react-native";
import { OrderList } from "../../components/OrderList/OrderList";

import orders from "../../../assets/data/orders.json";

export function OrderScreen() {
  return (
    <View style={styles.container}>
      <OrderList orders={orders} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: "100%",
    paddingVertical: 5,
    padding: 10,
  },
});
