import { FlatList } from "react-native";

import { DishItem } from "../DishItem/DishItem";
import { Dish } from "../RestaurantList/RestaurantList";

interface IProps {
  dishes: Dish[];
}

export function DishList({ dishes }: IProps) {
  return (
    <FlatList
      data={dishes}
      renderItem={({ item }) => <DishItem dish={item} />}
      keyExtractor={(item) => item.description}
    />
  );
}
