import * as React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import ProfileStackNavigator from "../Navigation/ProfileStackNavigator";
import HomeStackNavigator from "../Navigation/HomeStackNavigator";
import { Icon } from "react-native-elements";
import TimeTable from "../views/TimeTable";
import BookingStackNavigator from "./BookingStackNavigator";

const Tab = createBottomTabNavigator();

const BottomNavigator = () => {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        tabBarIcon: ({ focused, color, size }) => {
          let iconName;

          if (route.name === "Home") {
            iconName = "home";
          } else if (route.name === "Bookings") {
            iconName = "book";
          } else if (route.name === "Time Table") {
            iconName = "history";
          } else if (route.name === "Profile") {
            iconName = "face";
          }

          // You can return any component that you like here!
          return <Icon name={iconName} size={size} color={color} />;
        },
      })}
      tabBarOptions={{
        activeTintColor: "#71D3E7",
        inactiveTintColor: "gray",
      }}
    >
      <Tab.Screen name="Home" component={HomeStackNavigator} />
      <Tab.Screen name="Time Table" component={TimeTable} />
      <Tab.Screen name="Bookings" component={BookingStackNavigator} />
      <Tab.Screen name="Profile" component={ProfileStackNavigator} />
    </Tab.Navigator>
  );
};

export default BottomNavigator;
