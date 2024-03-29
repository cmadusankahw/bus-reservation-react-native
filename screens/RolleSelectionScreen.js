import React from 'react'
import {
    Text,
    Image,
    View,
    Button,
    StatusBar,
    StyleSheet,
    TouchableOpacity,
  } from 'react-native';
  
 export function RolleSelectionScreen({navigation}){
 
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
       <StatusBar
        backgroundColor="#2471A3"
        barStyle="light-content"
      />
    <Image  style ={styles.pic1}  source={require('../assets/Passenger.png') } />
   <TouchableOpacity  style={styles.button1} onPress={() =>navigation.navigate('SignupScreen',{roleId:'2'})}>
     <Text style={styles.txt}>Passenger</Text>
     </TouchableOpacity>
    
     <Image  style ={styles.pic2} source={require('../assets/Busowner.png') } />

   <TouchableOpacity title="Bus Owner" style={styles.button2}  onPress={() => navigation.navigate('SignupScreen',{roleId:'3'})}>
   <Text style={styles.txt}>Bus Owner</Text>
     </TouchableOpacity>

     <Image  style ={styles.pic3}  source={require('../assets/Conductor.png') } />

   <TouchableOpacity title="Conductor"  style={styles.button3}  onPress={() => navigation.navigate('ConductorSignupScreen',{roleId:'4'})}>
   <Text style={styles.txt}>Conductor</Text>
     </TouchableOpacity>
    </View>
  );
 } 
 export default RolleSelectionScreen;

 const styles= StyleSheet.create({

  button1:{
    borderRadius:25,
    padding:10,
    position:'absolute',
    top:120,
    backgroundColor: '#71D3E7',
    height:40,
    width:200

    },
    button2:{
      borderRadius:25,
      padding:10,
      position:'absolute',
      top:280,
      backgroundColor: '#71D3E7',
      height:40,
      width:200
  
      },
      button3:{
        borderRadius:25,
        padding:10,
        position:'absolute',
        top:430,
        backgroundColor: '#71D3E7',
        height:40,
        width:200
        },
     pic1:{
     position:'absolute',
     top:30,
     height:100,
     width:100,

    },

    pic3:{
     position:'absolute',
     top:340,
     height:100,
     width:100,

    },
    pic2:{
      position:'absolute',
      top:180,
      height:100,
      width:100,
 
     },
     txt:{
      textAlign:'center',
       
     }

 })