import { StyleSheet, Text, View } from "react-native";
import { AntDesign } from "@expo/vector-icons";

import restaurants from "../../../assets/data/restaurants.json";

const dish = restaurants[0].dishes[0];

export function DishDetailsScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>{dish.name}</Text>
      <Text style={styles.subtitle}>{dish.description}</Text>
      <View style={styles.separator} />

      <View style={styles.row}>
        <AntDesign name="minuscircleo" size={60} color={"black"} />
        <Text style={styles.quantity}>1</Text>
        <AntDesign name="pluscircleo" size={60} color={"black"} />
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
    fontSize: 30,
    fontWeight: "600",
    marginVertical: 10,
  },
  subtitle: {
    color: "#696969",
  },
  separator: {
    height: 1,
    backgroundColor: "lightgray",
    marginVertical: 10,
  },
  row: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    marginTop: 50,
  },
  quantity: {
    fontSize: 25,
    fontWeight: "600",
    marginHorizontal: 20,
  },
});
