import { createStackNavigator } from "@react-navigation/stack";
import { createMaterialBottomTabNavigator } from "@react-navigation/material-bottom-tabs";

import { Foundation, FontAwesome5, MaterialIcons } from "@expo/vector-icons";

import { HomeScreen } from "../screens/HomeScreen/HomeScreen";
import { RestaurantDetailsScreen } from "../screens/RestaurantDetailsScreen/RestaurantDetailsScreen";
import { DishDetailsScreen } from "../screens/DishDetailsScreen/DishDetailsScreen";
import { BasketScreen } from "../screens/BasketScreen/BasketScreen";
import { OrderScreen } from "../screens/OrderScreen/OrderScreen";
import { OrderDetailsScreen } from "../screens/OrderDetailsScreen/OrderDetailsScreen";

const Stack = createStackNavigator();

export function RootNavigator() {
  return (
    <Stack.Navigator
      initialRouteName="HomeTabs"
      screenOptions={{ headerShown: false }}>
      <Stack.Screen name="HomeTabs" component={HomeTabs} />
    </Stack.Navigator>
  );
}

const Tab = createMaterialBottomTabNavigator();

function HomeTabs() {
  return (
    <Tab.Navigator barStyle={{ backgroundColor: "#fff" }}>
      <Tab.Screen
        name="Home"
        component={HomeStackNavigator}
        options={{
          tabBarIcon: ({ color }) => (
            <Foundation name="home" size={24} color={color} />
          ),
        }}
      />
      <Tab.Screen
        name="Orders"
        component={OrdersStackNavigator}
        options={{
          tabBarIcon: ({ color }) => (
            <MaterialIcons name="list-alt" size={24} color={color} />
          ),
        }}
      />
      <Tab.Screen
        name="Profile"
        component={OrderDetailsScreen}
        options={{
          tabBarIcon: ({ color }) => (
            <FontAwesome5 name="user-alt" size={24} color={color} />
          ),
        }}
      />
    </Tab.Navigator>
  );
}

const HomeStack = createStackNavigator();

function HomeStackNavigator() {
  return (
    <HomeStack.Navigator>
      <HomeStack.Screen name="Restaurants" component={HomeScreen} />
      <HomeStack.Screen
        name="Restaurant"
        component={RestaurantDetailsScreen}
        options={{ headerShown: false }}
      />
      <HomeStack.Screen name="Dish" component={DishDetailsScreen} />
      <HomeStack.Screen name="Basket" component={BasketScreen} />
    </HomeStack.Navigator>
  );
}

const OrdersStack = createStackNavigator();

function OrdersStackNavigator() {
  return (
    <OrdersStack.Navigator>
      <OrdersStack.Screen name="Your Orders" component={OrderScreen} />
      <OrdersStack.Screen
        name="Order"
        component={OrderDetailsScreen}
        options={{ headerShown: false }}
      />
    </OrdersStack.Navigator>
  );
}
