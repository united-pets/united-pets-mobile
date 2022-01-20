import React from 'react'
import axios from 'axios'
import {
  View,
  Button,
  TextInput,
  StyleSheet,
  TouchableOpacity
} from 'react-native'

export default class SignUp extends React.Component {
  state = {
    firstName: '', lastName: '', email: '', phoneNumber: '' , 
    password: '', adress: '', imageUrl: ''
  }
  onChangeText = (key, val) => {
    this.setState({ [key]: val })
  }
  SignUp = async () => {
    const { firstName, lastName, email, phoneNumber , password ,adress , imageUrl } = this.state
    
    try {

        const res = await axios
        .post("http://192.168.11.126:3000/signupM",{
          firstName : firstName,
          lastName:lastName,
          email:email,
          phoneNumber:phoneNumber,
          password:password ,
          adress:adress,
          imageUrl:imageUrl
        })
    } catch (err) {
      console.log('error signing up: ', err)
    }
  }
  render() {
    return (
      <View style={styles.container}>
        <TextInput
          style={styles.input}
          placeholder="first Name"
          autoCapitalize="none"
          placeholderTextColor="white"
          onChangeText={(val) => this.onChangeText("firstName", val)}
        />
        <TextInput
          style={styles.input}
          placeholder="last Name"
          autoCapitalize="none"
          placeholderTextColor="white"
          onChangeText={(val) => this.onChangeText("lastName", val)}
        />
        <TextInput
          style={styles.input}
          placeholder="email"
          autoCapitalize="none"
          placeholderTextColor="white"
          onChangeText={(val) => this.onChangeText("email", val)}
        />
        <TextInput
          style={styles.input}
          placeholder="phone Number"
          autoCapitalize="none"
          placeholderTextColor="white"
          onChangeText={(val) => this.onChangeText("phoneNumber", val)}
        />
        <TextInput
          style={styles.input}
          placeholder="Adress"
          autoCapitalize="none"
          placeholderTextColor="white"
          onChangeText={(val) => this.onChangeText("adress", val)}
        />
        <TextInput
          style={styles.input}
          placeholder="Password"
          secureTextEntry={true}
          autoCapitalize="none"
          placeholderTextColor="white"
          onChangeText={(val) => this.onChangeText("password", val)}
        />
        <TouchableOpacity style={styles.loginBtn}>
          <Button title="Sign Up" onPress={this.SignUp} />
        </TouchableOpacity>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  input: {
    width: 300,
    height: 55,
    backgroundColor: "#fca500",
    margin: 10,
    padding: 8,
    color: "white",
    borderRadius: 25,
    fontSize: 18,
    fontWeight: "500",
  },
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  loginBtn: {
    width: "60%",
    backgroundColor: "#275C76",
    borderRadius: 25,
    height: 50,
    alignItems: "center",
    justifyContent: "center",
    marginTop: 40,
    marginBottom: 10,
  },
});