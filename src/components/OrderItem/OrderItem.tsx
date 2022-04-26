import { StyleSheet, Image, View, Text, Pressable } from "react-native";

import { useNavigation } from "@react-navigation/native";
import { NavigationProp, ParamListBase } from "@react-navigation/native";

import { Order } from "../OrderList/OrderList";

interface IProps {
  order: Order;
}

export function OrderItem({ order }: IProps) {
  const navigation: NavigationProp<ParamListBase> = useNavigation();

  return (
    <Pressable
      style={styles.container}
      onPress={() => navigation.navigate("Order", { id: order.id })}>
      <Image source={{ uri: order.restaurant.image }} style={styles.image} />

      <View>
        <Text style={styles.name}>{order.restaurant.name}</Text>
        <Text style={styles.content}>3 items &#8226; $38.45</Text>
        <Text>2 days ago &#8226; {order.status}</Text>
      </View>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    margin: 10,
    alignItems: "center",
    borderBottomColor: "lightgray",
    borderBottomWidth: 1,
    paddingBottom: 15,
  },
  image: {
    width: 75,
    height: 75,
    marginRight: 5,
  },
  name: {
    fontWeight: "600",
    fontSize: 16,
  },
  content: {
    marginVertical: 5,
  },
});
