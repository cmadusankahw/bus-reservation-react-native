import React from "react";
import { View, Text, Button, StyleSheet } from "react-native";

import FocusAwareStatusBar from "../Navigation/FocusAwareStatusBar";

const Home = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <FocusAwareStatusBar barStyle="light-content" hidden={false} />
      <Text>Profile Screen</Text>
      <Button title="home" onPress={() => alert("Button Clicked!")} />
    </View>
  );
};

export default Home;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
});
