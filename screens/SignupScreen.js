import React from 'react'
import {
  View,
  TextInput,
  StyleSheet,
  Text,
  StatusBar,
  TouchableOpacity,
  Alert,
} from 'react-native'

export default class SignupScreen extends React.Component {

  constructor(props) {
    super(props)
    this.state = {
      firstName: '', lastName: '', nic: '', phoneNo: '', email: '', password: '', roleId: '',error:''
    }
  }

  signUp = async () => {
    const { firstName } = this.state;
    const { lastName } = this.state;
    const { password } = this.state;
    const { email } = this.state;
    const { phoneNo } = this.state;
    const { nic } = this.state;
    const { roleId } = this.state;
    const {error} =this.state;

    this.setState({ text: "signup" })
    

    fetch('http://localhost:8012/basic/web/index.php?r=user/update&id', {
      method: 'POST',
      mode: "cors",


      headers: {

        'Accept': 'application/json',
        'Content-Type': 'application/json',
        'Access-Control-Allow-Origin': 'ORIGIN'
      },

      body: JSON.stringify({

        firstName: firstName,
        lastName: lastName,
        email: email,
        phoneNo: phoneNo,
        nic: nic,
        password: password,
        roleId: roleId,
        error:error,


      })
    }).then(res => res.json())
    .then((response) => {
      console.log(response);
      this.setState((current)=>({
        ...current,
        success: response.success,
        error: response.error
      }))
    })

  }

  componentDidMount = () => {
    console.log( this.props.route.params.roleId)
    this.setState((current) => ({...current, roleId: this.props.route.params.roleId}))
    
  }

  render() {

    return (
      <View style={styles.container}>

        <StatusBar
          backgroundColor="#1C7689"
          barStyle="light-content"
        />

        <Text style={{ fontSize: 30, position: 'absolute', top: 30, color: '#22AFD1' }}> Create Your Account </Text>


        <TextInput
          style={styles.input}
          placeholder='First Name'
          autoCapitalize="none"
          placeholderTextColor='#BFC9CA'
          onChangeText={firstName => this.setState({ firstName })}
        />
        <TextInput
          style={styles.input}
          placeholder='Last Name'
          autoCapitalize="none"
          placeholderTextColor='#BFC9CA'
          onChangeText={lastName => this.setState({ lastName })}
        />
        <TextInput
          style={styles.input}
          placeholder='NIC'
          autoCapitalize="none"
          placeholderTextColor='#BFC9CA'
          onChangeText={nic => this.setState({ nic })}
        />
        <TextInput
          style={styles.input}
          placeholder='Phone Number'
          autoCapitalize="none"
          placeholderTextColor='#BFC9CA'
          onChangeText={phoneNo => this.setState({ phoneNo })}
        />


        <TextInput
          style={styles.input}
          placeholder='Email'
          autoCapitalize="none"
          placeholderTextColor='#BFC9CA'
          onChangeText={email => this.setState({ email })}
        />
        <TextInput
          style={styles.input}
          placeholder='Password'
          secureTextEntry={true}
          autoCapitalize="none"
          placeholderTextColor='#BFC9CA'
          onChangeText={password => this.setState({ password })}
        />


        <TextInput
          style={styles.input}
          placeholder='Confirm Password'
          secureTextEntry={true}
          autoCapitalize="none"
          placeholderTextColor='#BFC9CA'
          onChangeText={ConfirmPassword => this.setState({ ConfirmPassword })}
        />
        { <Text style={styles.errtxt}>{this.state.error}</Text> }

        <TouchableOpacity style={styles.button} onPress={this.signUp}
       onPress={() => { this.signUp() , this.props.navigation.navigate('verificationScreen') }}>
          <Text> Sign Up
     </Text>
        </TouchableOpacity>
      </View>
    )

  }
}

const styles = StyleSheet.create({

  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'white'
  },


  input: {
    width: 300,
    height: 45,
    backgroundColor: '#F1F7F8',
    margin: 5,
    padding: 15,

    borderRadius: 5,
    fontSize: 15,

  },
  button: {
    color: "white",
    textAlign: "center",
    backgroundColor: "#22AFD1",
    marginBottom: 100,
    position: 'absolute',
    bottom: -50,
    alignItems: 'center',
    justifyContent: 'center',
    width: 300,
    height: 35,
    borderRadius: 30

  },

errtxt:{
  color:'red',
  fontSize:10,
  position: 'absolute',
    bottom: 80,

  }

})
