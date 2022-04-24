import { FlatList } from "react-native";
import { OrderDetailsItem } from "../OrderDetailsItem/OrderDetailsItem";
import { Dish } from "../RestaurantList/RestaurantList";

interface IProps {
  dishes: Dish[];
}

export function OrderDetailsList({ dishes }: IProps) {
  return (
    <FlatList
      data={dishes}
      renderItem={({ item }) => <OrderDetailsItem dish={item} />}
      keyExtractor={(item) => item.name}
    />
  );
}
