import * as React from "react";
import { createDrawerNavigator } from "@react-navigation/drawer";
import { Icon } from "react-native-elements";
import CustomSidebarMenu from "./CustomSidebarMenu";
import BottomNavigator from "./BottomTabNavigator";
import LoyalityPoints from "../views/LoyalityPoints";
import Bookings from "../views/Bookings";
import Cancellation from "../views/Cancellation";
import TimeTable from "../views/TimeTable";
import RateJourney from "../views/RateJourney";
import ProfileStackNavigator from "./ProfileStackNavigator";

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
        component={TimeTable}
        options={{
          drawerIcon: ({ focused, size }) => <Icon name="history" />,
        }}
      />

      <Drawer.Screen
        name="Booking"
        component={Bookings}
        options={{
          drawerIcon: ({ focused, size }) => <Icon name="book" />,
        }}
      />

      <Drawer.Screen
        name="Cancellation"
        component={Cancellation}
        options={{
          drawerIcon: ({ focused, size }) => <Icon name="clear" />,
        }}
      />

      <Drawer.Screen
        name="Loyality Points"
        component={LoyalityPoints}
        options={{
          drawerIcon: ({ focused, size }) => <Icon name="code" />,
        }}
      />

      <Drawer.Screen
        name="Profile"
        component={ProfileStackNavigator}
        options={{
          drawerIcon: ({ focused, size }) => <Icon name="face" />,
        }}
      />

      <Drawer.Screen
        name="Rate BuzzBus"
        component={RateJourney}
        options={{
          drawerIcon: ({ focused, size }) => <Icon name="star" />,
        }}
      />
    </Drawer.Navigator>
  </>
);

export default DrawerScreen;
