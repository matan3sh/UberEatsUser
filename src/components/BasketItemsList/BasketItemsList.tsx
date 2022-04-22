import { FlatList } from "react-native";
import { BasketItem } from "../BasketItem/BasketItem";
import { Dish } from "../RestaurantList/RestaurantList";

interface IProps {
  dishes: Dish[];
}

export function BasketItemsList({ dishes }: IProps) {
  return (
    <FlatList
      data={dishes}
      renderItem={({ item }) => <BasketItem dish={item} />}
    />
  );
}
