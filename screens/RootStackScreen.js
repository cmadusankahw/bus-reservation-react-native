import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import FirstScreen from "./FirstScreen";
import LoginScreen from "./LoginScreen";
import SignupScreen from "./SignupScreen";
import RolleSelectionScreen from "./RolleSelectionScreen";
import verificationScreen from "./verificationScreen";
import ConductorSignupScreen from "./ConductorSignupScreen";
import DrawerScreen from "../Navigation/DrawerHandling";
import SeatBookingScreen from "./SeatBookingScreen";
import BookingDetails from "../views/BookingDetails";
import BottomNavigator from "../Navigation/BottomTabNavigator";

const RootStack = createStackNavigator();
const RootStackScreen = ({ navigation }) => (
  <RootStack.Navigator headerMode="none">
    <RootStack.Screen name="FirstScreen" component={FirstScreen} />
    <RootStack.Screen name="LoginScreen" component={LoginScreen} />
    <RootStack.Screen
      name="RolleSelectionScreen"
      component={RolleSelectionScreen}
    />
    <RootStack.Screen name="SignupScreen" component={SignupScreen} />
    <RootStack.Screen
      name="ConductorSignupScreen"
      component={ConductorSignupScreen}
    />
    <RootStack.Screen
      name="verificationScreen"
      component={verificationScreen}
    />
    <RootStack.Screen name="home" component={DrawerScreen} />
    <RootStack.Screen name="BottomNavigation" component={BottomNavigator} />
    <RootStack.Screen name="SeatBookingScreen" component={SeatBookingScreen} />
    <RootStack.Screen name="BookingDetails" component={BookingDetails} />
  </RootStack.Navigator>
);

export default RootStackScreen;
