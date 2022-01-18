import React from 'react';
import { Button ,StyleSheet, Text, View, TextInput, TouchableOpacity } from 'react-native';
import axios from 'axios';
export default class Login extends React.Component {
  state={
    firstName:"",
    password:""
  }
  onChangeText = (key, val) => {
    this.setState({ [key]: val })
  }
  Login = async () => {
    const { firstName, password  } = this.state
    
    try {

        const res = await axios
        .post("http://localhost:3000/login", {
          firstName : firstName,
          password:password
        })
    //   // here place your signup logic
    //   console.log('user successfully signed up!: ')
    } catch (err) {
      console.log('error Logged in: ', err)
    }
  }
  render(){
    return (
      <View style={styles.container}>
        <Text style={styles.logo}>LOGIN</Text>
        <View style={styles.inputView}>
          <TextInput
            style={styles.inputText}
            placeholder="First Name..."
            placeholderTextColor="#fff"
            onChangeText={(text) => this.setState({ firstName: text })}
          />
        </View>
        <View style={styles.inputView}>
          <TextInput
            secureTextEntry
            style={styles.inputText}
            placeholder="Password..."
            placeholderTextColor="#fff"
            onChangeText={(text) => this.setState({ password: text })}
          />
        </View>
        <TouchableOpacity>
          <Text style={styles.forgot}>Forgot Password?</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.loginBtn}>
          <Button title="Login" onPress={this.Login} />
        </TouchableOpacity>
        <TouchableOpacity>
          <Text style={styles.loginText}>Signup</Text>
        </TouchableOpacity>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  logo: {
    fontWeight: "bold",
    fontSize: 50,
    color: "#275C76",
    marginBottom: 40,
  },
  inputView: {
    width: "80%",
    backgroundColor: "#fca500",
    borderRadius: 25,
    height: 50,
    marginBottom: 20,
    justifyContent: "center",
    padding: 20,
  },
  inputText: {
    height: 50,
    color: "white",
  },
  forgot: {
    color: "white",
    fontSize: 11,
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
  loginText: {
    color: "white",
  },
});