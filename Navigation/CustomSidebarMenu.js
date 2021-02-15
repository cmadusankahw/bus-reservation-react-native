// Custom Navigation Drawer / Sidebar with Image and Icon in Menu Options
// https://aboutreact.com/custom-navigation-drawer-sidebar-with-image-and-icon-in-menu-options/

import React from "react";
import {
  SafeAreaView,
  View,
  StyleSheet,
  Image,
  Text,
  Linking,
} from "react-native";

import {
  DrawerContentScrollView,
  DrawerItemList,
  DrawerItem,
} from "@react-navigation/drawer";

const CustomSidebarMenu = (props) => {
  const starImagePath =
    "https://raw.githubusercontent.com/AboutReact/sampleresource/master/star_filled.png";

  const proifleImagePath =
    "https://avatars.githubusercontent.com/u/44913467?s=460&u=2c1f1087edeaddc815c86576213e04e793aaf2a2&v=4";

  const rateURL = "";
  const aboutURL = "";

  return (
    <SafeAreaView style={{ flex: 1 }}>
      {/*Top Large Image */}
      <Image
        source={{ uri: proifleImagePath }}
        style={styles.sideMenuProfileIcon}
      />
      <DrawerContentScrollView {...props}>
        <DrawerItemList {...props} />
        <DrawerItem
          label="About BuzzBus"
          onPress={() => Linking.openURL(aboutURL)}
        />
        <View style={styles.customItem}>
          <Text
            onPress={() => {
              Linking.openURL(rateURL);
            }}
          >
            Rate BuzzBus
          </Text>
          <Image source={{ uri: starImagePath }} style={styles.iconStyle} />
        </View>
      </DrawerContentScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  sideMenuProfileIcon: {
    resizeMode: "center",
    width: 100,
    height: 100,
    borderColor: "rgb(33,33,33)",
    borderRadius: 999,
    alignSelf: "center",
    marginVertical: 25,
  },
  iconStyle: {
    width: 15,
    height: 15,
    marginHorizontal: 8,
  },
  customItem: {
    padding: 16,
    flexDirection: "row",
    alignItems: "center",
  },
});

export default CustomSidebarMenu;
