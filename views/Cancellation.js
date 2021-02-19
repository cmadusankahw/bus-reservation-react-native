import React, { Component } from "react";
import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  Image,
  ScrollView,
  Dimensions,
  TouchableOpacity,
} from "react-native";
import { Button, Icon } from "react-native-elements";

import FocusAwareStatusBar from "../Navigation/FocusAwareStatusBar";

const Cancellation = ({navigation}) => {

     // fetched
  const loyalityPoints = {
    userId: 'Chiran',
    loyalityPoints: 23,
    amount: 1123,
    }

  const SCREEN_WIDTH = Dimensions.get("window").width;


    return (
        <SafeAreaView style={{ flex: 1 }}>
    
        {/* header */}
        <View style={styles.floatingView} >   
        <TouchableOpacity style={styles.icon} onPress={() => navigation.openDrawer()} >                                
            <Icon                              
              name='menu'
              size={30}      
              color='#ffffff'                                      
             
            />    
       </TouchableOpacity>   
       <Text style={styles.headerText}> Cancel a Booking </Text>                                                              
         </View>
    
            <View style={{ flex: 1 }}>
            <FocusAwareStatusBar barStyle="light-content" hidden={false} />

                <Text> cancellation works! </Text>

            </View>

        </SafeAreaView>
    );
};

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


export default Cancellation;