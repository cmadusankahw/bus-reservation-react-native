import * as React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import BookingDetails from "../views/BookingDetails";
import RateJourney from "../views/RateJourney";
import ProfileScreen from "../views/ProfileScreen";
import home from "../views/Home";
import { Icon } from "react-native-elements";

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
      <Tab.Screen name="Home" component={home} />
      <Tab.Screen name="Bookings" component={RateJourney} />
      <Tab.Screen name="Profile" component={ProfileScreen} />
    </Tab.Navigator>
  );
};

export default BottomNavigator;
