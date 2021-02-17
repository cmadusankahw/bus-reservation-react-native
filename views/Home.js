import React from "react";
import { View, Text,  StyleSheet, TouchableOpacity, Image, SafeAreaView, Dimensions } from "react-native";
import { Icon } from "react-native-elements";

import FocusAwareStatusBar from "../Navigation/FocusAwareStatusBar";

const Home = ({ navigation }) => {

  const logoPath = "https://www.pngitem.com/pimgs/m/94-947302_png-bus-ticket-traveling-bus-logo-transparent-png.png";

  return (
    <>

    {/* header */}
    <View style={styles.floatingView} >   
    <TouchableOpacity style={styles.icon} onPress={() => navigation.openDrawer()} >                                
        <Icon                              
          name='menu'
          size={30}      
          color='#ffffff'                                      
         
        />    
   </TouchableOpacity>   
   <Text style={styles.headerText}> BuzzBus </Text>                                                              
     </View>


    <View style={{ flex: 1, alignItems:"center" }}>
      <FocusAwareStatusBar barStyle="light-content" hidden={false} />
      <Text  style={styles.titleText} >Welcome to BuzzBus!</Text>
      </View>
      <SafeAreaView style={{ flex: 2, alignItems:"center" }}>
      <Image
        source={{ uri: logoPath }}
        style={styles.logoImage}
      />
       </SafeAreaView>
      <View style={{ flex: 3, alignItems:"center" }}>
      <TouchableOpacity  style={styles.button} onPress={() => alert("Button Clicked!")} >
       <Text  style={styles.text}>
       Start your Journey
         </Text> 
      </TouchableOpacity>
      </View>

      <View style={{ flex: 4, alignItems:"center" }}>
      <TouchableOpacity  style={styles.button} onPress={() => alert("Button Clicked!")} >
       <Text  style={styles.text}>
       Check time table
         </Text> 
      </TouchableOpacity>
      </View>

      <View style={{ flex: 20, alignItems:"center" }}>
      <TouchableOpacity  style={styles.buttonRed} onPress={() => alert("Button Clicked!")} >
       <Text  style={styles.text}>
       Cancel a Booking
         </Text> 
      </TouchableOpacity>
      </View>
    </>
  );
};

export default Home;

const styles = StyleSheet.create({
  floatingView: {
    width: Dimensions.get('window').width,  
    height: 60,   
    borderRadius: 5,            
    backgroundColor: '#71D3E7',                                    
    position: 'absolute',   
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
  container: {
    alignItems: "center",
  },
  logoImage: {
    marginTop:120,
    width:220,
    height: 160
  },
  titleText: {
    textAlign: "center",
    justifyContent: "center",
    fontSize:22,
    fontWeight:"bold",
    marginTop: 100,
    marginBottom: 15
  },
  button: {
    borderRadius: 25,
    padding: 10,
    position: "absolute",
    top: 320,
    backgroundColor: "#71D3E7",
    height: 40,
    width: 300,
  },
  buttonRed: {
    borderRadius: 25,
    padding: 10,
    position: "absolute",
    top: 320,
    backgroundColor: "#ff6666",
    height: 40,
    width: 300,
  },
  text: {
    fontSize: 15,
    textAlign: "center",
  },
});
