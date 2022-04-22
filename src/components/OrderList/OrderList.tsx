import { FlatList } from "react-native";
import { OrderItem } from "../OrderItem/OrderItem";
import { Restaurant } from "../RestaurantList/RestaurantList";

export interface Order {
  id: string;
  userID: string;
  status: string;
  createdAt: string;
  updatedAt: string;
  orderRestaurantId: string;
  restaurant: Restaurant;
}

interface IProps {
  orders: Order[];
}

export function OrderList({ orders }: IProps) {
  return (
    <FlatList
      data={orders}
      renderItem={({ item }) => <OrderItem order={item} key={item.id} />}
    />
  );
}
