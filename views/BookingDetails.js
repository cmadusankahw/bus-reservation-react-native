import React from 'react';
import {
  View,
  TextInput,
  StyleSheet,
  Text,
  StatusBar,
  Image,
  navigation,
  Button,
  TouchableOpacity,
 AppRegistry,
  Alert,
TouchableHighlight
}
from 'react-native';




export default class BookingDetails extends React.Component {
   
      
    
 
render()
{
  
   return (

      <View style={styles.container}>
     
       <StatusBar
      backgroundColor="#1C7689"
      barStyle="light-content"
    />
   
     <Text style={styles.text}>Start Your Journey</Text>
     
       <TextInput
          style={styles.input}
          placeholder='From'
          autoCapitalize="none"
          placeholderTextColor='#BFC9CA'
          onChangeText={from=> this.setState({ from })}
        />
      <TextInput
          style={styles.input}
          placeholder='To'
          autoCapitalize="none"
          placeholderTextColor='#BFC9CA'
          onChangeText={to => this.setState({ to })}
        />
         <TextInput
          style={styles.input}
          placeholder='Journey Date'
          
          autoCapitalize="none"
          placeholderTextColor='#BFC9CA'
          onChangeText={date => this.setState({ date })}
        />
          
     <TextInput
          style={styles.input}
          placeholder='Time'
          autoCapitalize="none"
          placeholderTextColor='#BFC9CA'
          onChangeText={time => this.setState({ time})}
    />
     <TextInput
          style={styles.input}
          placeholder='Number of Passengers'
          autoCapitalize="none"
          placeholderTextColor='#BFC9CA'
          onChangeText={noOfPassenger => this.setState({ noOfPassenger })}
    />
   
     <TextInput
          style={styles.input}
          placeholder='Luggage Weight(Kg)'
          autoCapitalize="none"
          placeholderTextColor='#BFC9CA'
          onChangeText={luggageWeight => this.setState({ luggageWeight })}
    />
     
         
<TouchableHighlight  onPress={()=>{this.props.navigation.navigate('SeatBookingScreen') }}>
<Image  style={styles.next} source={require('../assets/right.png') } />
</TouchableHighlight>

         
      </View>
   
   
    )
  }

}



const styles = StyleSheet.create({
    input: {
        width: 300,
        height: 45,
        backgroundColor: '#F1F7F8',
        margin: 5,
        padding: 15,
        borderRadius: 5,
        fontSize: 15,
    
      },
  container: {
    flex:1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor:'white',
   
   
  },

  text:{
  fontSize:30,
  color:'#22AFD1',
 
  },
  txt:{
     fontSize:20,
   
     color:'#01579B'
  },
 buttonT:{
  borderRadius:25,
  padding:10,
  position:'absolute',
  bottom:6,
  right:20,
  backgroundColor: '#71D3E7',

 },
 next:{
  width: 50,
  height: 50,
  borderRadius: 100,
  position:'absolute',
  right:-150,
  bottom:20,

 },
 

 
})
