import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import RootStackScreen from "./screens/RootStackScreen";
import DrawerScreen from "./Navigation/DrawerHandling";
import BottomNavigator from "./Navigation/BottomTabNavigator";
import { LogBox } from "react-native";
LogBox.ignoreAllLogs();

const App = () => {
  <DrawerScreen />;
  return (
    <>
      <NavigationContainer>
        <RootStackScreen />
      </NavigationContainer>
    </>
  );
};

export default App;
