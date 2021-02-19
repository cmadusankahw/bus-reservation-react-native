import React, { Component } from "react";
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
  }

  const SeatBooking = () => {

    return(
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
    )

  }

  const styles = StyleSheet.create({
    statusBar: {
      height: 10,
    },
    floatingView: {
      width: Dimensions.get('window').width,  
      height: 60,   
      borderRadius: 5,            
      backgroundColor: '#71D3E7',                                    
      position: 'relative',   
      alignContent:'center',                                       
      top: 0,                                                    
      left: 0, 
    },
    icon: {
      left: -(Dimensions.get('window').width/2 - 30) ,
      top: 15,
    },
    headerText: {
      left: 55,
      fontSize: 20,
      fontWeight: "bold",
      top:-15,
      color: "#ffffff"
    },
    profileIcon: {
      resizeMode: "center",
      width: 120,
      height: 120,
      borderColor: "rgb(33,33,33)",
      borderRadius: 999,
      alignSelf: "center",
      marginTop: 25,
      marginBottom:5
    },
    button: {
      height: 40,
      width: 180,
      borderRadius: 30,
      justifyContent: "center",
      alignItems: "center",
      backgroundColor: "#71C3E7",
    },
    buttonTitle: {
      fontSize: 14,
      color: "white",
      textAlign: "center",
    }
  });

  export default SeatBooking;