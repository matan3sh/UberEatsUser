import { useEffect } from "react";
import { StyleSheet, Text, View, Image, Pressable } from "react-native";
import { Ionicons } from "@expo/vector-icons";

import { RouteProp, useNavigation, useRoute } from "@react-navigation/native";
import { NavigationProp, ParamListBase } from "@react-navigation/native";

import restaurants from "../../../assets/data/restaurants.json";
import { DishList } from "../../components/DishList/DishList";

type ParamList = {
  Detail: {
    id: string;
  };
};

const restaurant = restaurants[0];

export function RestaurantDetailsScreen() {
  const navigation: NavigationProp<ParamListBase> = useNavigation();
  const route = useRoute<RouteProp<ParamList, "Detail">>();

  useEffect(() => {
    if (route.params.id) {
      console.log(route.params.id);
    }
  }, [route.params.id]);

  return (
    <View style={styles.container}>
      <Image source={{ uri: restaurant.image }} style={styles.image} />

      <Pressable style={styles.backIcon} onPress={() => navigation.goBack()}>
        <Ionicons name="arrow-back-circle" size={45} color="white" />
      </Pressable>

      <View style={styles.wrapper}>
        <Text style={styles.title}>{restaurant.name}</Text>
        <Text style={styles.subtitle}>
          ${restaurant.deliveryFee} &#8226; {restaurant.minDeliveryTime}-
          {restaurant.maxDeliveryTime} min
        </Text>
      </View>

      <Text style={styles.menuTitle}>Menu</Text>
      <DishList dishes={restaurant.dishes} />
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
    fontSize: 35,
    fontWeight: "600",
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
  menuTitle: {
    marginTop: 20,
    marginHorizontal: 10,
    fontSize: 18,
    letterSpacing: 0.75,
  },
});
