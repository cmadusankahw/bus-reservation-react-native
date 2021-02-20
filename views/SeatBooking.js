import React, { Component, useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  Image,
  ScrollView,
  Dimensions,
  StatusBar,
} from "react-native";
import { Button } from "react-native-elements";

import FocusAwareStatusBar from "../Navigation/FocusAwareStatusBar";

const SCREEN_WIDTH = Dimensions.get("window").width;

// sample booking : for POST update + localStorage
const booking = {
  bookingId: "B1",
  dateTime: "2021-02-21T08:30:00.000Z",
  from: "Colombo",
  to: "Matara",
  routeNo: "R1",
  ticketPrice: 0,
  noOfPassengers: 0,
  luggageWeight: 0,
  noOfSeats: 0,
  seatNumbersBooked: [],
};

const CustomButton = () => {
  const [selected, setSelected] = useState(false);

  return (
    <Button
      title={title}
      titleStyle={{ fontSize: 15, color: "white" }}
      buttonStyle={
        selected
          ? {
              backgroundColor: "rgba(213, 100, 140, 1)",
              borderRadius: 100,
              width: 127,
            }
          : {
              borderWidth: 1,
              borderColor: "white",
              borderRadius: 30,
              width: 127,
              backgroundColor: "transparent",
            }
      }
      containerStyle={{ marginRight: 10 }}
      onPress={setSelected(!selected)}
    />
  );
};

const SeatBooking = ({ navigation }) => {
  return (
    <View style={{ flex: 1, marginTop: 30 }}>
      <Text
        style={{
          flex: 1,
          fontSize: 15,
          color: "rgba(216, 121, 112, 1)",
          fontFamily: "regular",
          marginLeft: 40,
        }}
      >
        INTERESTS
      </Text>
      <View style={{ flex: 1, width: SCREEN_WIDTH, marginTop: 20 }}>
        <ScrollView
          style={{ flex: 1 }}
          horizontal
          showsHorizontalScrollIndicator={false}
        >
          <View
            style={{
              flex: 1,
              flexDirection: "column",
              height: 170,
              marginLeft: 40,
              marginRight: 10,
            }}
          >
            <View style={{ flex: 1, flexDirection: "row" }}>
              <CustomButton title="Philosophy" selected={true} />
              <CustomButton title="Sport" />
              <CustomButton title="Swimming" selected={true} />
              <CustomButton title="Religion" />
            </View>
            <View style={{ flex: 1, flexDirection: "row" }}>
              <CustomButton title="Music" />
              <CustomButton title="Soccer" selected={true} />
              <CustomButton title="Radiohead" selected={true} />
              <CustomButton title="Micheal Jackson" />
            </View>
            <View style={{ flex: 1, flexDirection: "row" }}>
              <CustomButton title="Travelling" selected={true} />
              <CustomButton title="Rock'n'Roll" />
              <CustomButton title="Dogs" selected={true} />
              <CustomButton title="France" selected={true} />
            </View>
          </View>
        </ScrollView>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  statusBar: {
    height: 10,
  },
  floatingView: {
    width: Dimensions.get("window").width,
    height: 60,
    borderRadius: 5,
    backgroundColor: "#71D3E7",
    position: "relative",
    alignContent: "center",
    top: 0,
    left: 0,
  },
  icon: {
    left: -(Dimensions.get("window").width / 2 - 30),
    top: 15,
  },
  headerText: {
    left: 55,
    fontSize: 20,
    fontWeight: "bold",
    top: -15,
    color: "#ffffff",
  },
  txtNum: {
    backgroundColor: "#007acc",
    borderRadius: 999,
    paddingVertical: 3,
    paddingHorizontal: 10,
    marginBottom: 10,
    marginTop: 20,
    marginRight: 7,
    color: "#ffffff",
    fontWeight: "bold",
    fontSize: 22,
  },
  titleText: {
    fontSize: 22,
    color: "#007acc",
    fontWeight: "bold",
    marginBottom: 10,
    marginTop: 20,
  },
  loyalIcon: {
    resizeMode: "center",
    width: 130,
    height: 130,
    borderColor: "rgb(33,33,33)",
    borderRadius: 999,
    alignSelf: "center",
    marginTop: 30,
    marginBottom: 5,
  },
  buttonBack: {
    height: 40,
    width: 90,
    borderRadius: 20,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "gray",
  },
  buttonNext: {
    height: 40,
    width: 90,
    borderRadius: 20,
    marginLeft: 15,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#71C3E7",
  },
  buttonPoints: {
    height: 40,
    width: 120,
    borderRadius: 20,
    marginLeft: 15,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#ff6666",
  },
  buttonTitle: {
    fontSize: 14,
    color: "white",
    textAlign: "center",
  },
  infoTypeLabel: {
    fontSize: 17,
    textAlign: "right",
    color: "rgba(126,123,138,1)",
    paddingBottom: 10,
  },
  infoTypeLabel2: {
    fontSize: 17,
    textAlign: "right",
    color: "rgba(126,123,138,1)",
    paddingBottom: 10,
    fontWeight: "bold",
    color: "#007acc",
  },
  infoAnswerLabel: {
    fontSize: 17,
    color: "#007acc",
    paddingBottom: 10,
    marginLeft: 20,
  },
});

export default SeatBooking;
