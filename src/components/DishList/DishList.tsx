import { StyleSheet, Text, View, FlatList } from "react-native";

import { DishItem } from "../DishItem/DishItem";
import { Dish } from "../RestaurantList/RestaurantList";

interface IProps {
  dishes: Dish[];
}

export function DishList({ dishes }: IProps) {
  return (
    <FlatList
      data={dishes}
      renderItem={({ item }) => <DishItem key={item.name} dish={item} />}
    />
  );
}

const styles = StyleSheet.create({});
