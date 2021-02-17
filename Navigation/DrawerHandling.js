import * as React from "react";
import { createDrawerNavigator } from "@react-navigation/drawer";
import { Icon } from "react-native-elements";

import BookingDetails from "../views/BookingDetails";
import ProfileScreen from "../views/Profile";
import CustomSidebarMenu from "./CustomSidebarMenu";
import BottomNavigator from "./BottomTabNavigator";

const Drawer = createDrawerNavigator();

const DrawerScreen = ({ navigation }) => (
  <>
    <Drawer.Navigator
      initialRouteName="Home"
      drawerContentOptions={{
        activeTintColor: "#71D3E7",
        itemStyle: { marginVertical: 5 },
      }}
      drawerContent={(props) => <CustomSidebarMenu {...props} />}
    >
      <Drawer.Screen
        name="Home"
        component={BottomNavigator}
        options={{
          drawerIcon: ({ focused, size }) => <Icon name="home" />,
        }}
      />
        <Drawer.Screen
        name="Time Table"
        component={BookingDetails}
        options={{
          drawerIcon: ({ focused, size }) => <Icon name="history" />,
        }}
      />

        <Drawer.Screen
        name="Booking"
        component={BookingDetails}
        options={{
          drawerIcon: ({ focused, size }) => <Icon name="book" />,
        }}
      />

      <Drawer.Screen
        name="Cancellation"
        component={BookingDetails}
        options={{
          drawerIcon: ({ focused, size }) => <Icon name="clear" />,
        }}
      />

      <Drawer.Screen
        name="Loyality Points"
        component={BookingDetails}
        options={{
          drawerIcon: ({ focused, size }) => <Icon name="code" />,
        }}
      />


      <Drawer.Screen
        name="Profile"
        component={ProfileScreen}
        options={{
          drawerIcon: ({ focused, size }) => <Icon name="face" />,
        }}
      />
    
    </Drawer.Navigator>
  </>
);

export default DrawerScreen;
