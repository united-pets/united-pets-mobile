import React , { useState } from 'react';
import { Button ,StyleSheet, Text, View, TextInput, TouchableOpacity } from 'react-native';
import axios from 'axios';
import AsyncStorage from "@react-native-async-storage/async-storage";
import { CredentialsContext } from "./CredentialsContext.js";
// import SyncStorage from 'sync-storage'
// import AsyncStorage from 'react-native';r
export default function Login ({navigation}) {
const NavigateToFoundPet = ()=>{
  navigation.navigate('buttomTab')
}
  const navigateTosignUp = ()=> {
    navigation.navigate('signUp')
  }
  const [firstName,setFirstName]=useState('')
  const [password,setPassword]=useState('')
  const { storedCredentials, setStoredCredentials } =
  React.useContext(CredentialsContext);


const persistLogin = (credentials) => {
  AsyncStorage.setItem("domicareCredentials", JSON.stringify(credentials))
      .then(() => {
          setStoredCredentials(credentials);
      })
      .catch((err) => {
          console.log(err);
      });
};
  const login = ()=>{
    let data=  { firstName, password }
    axios.post("http://192.168.11.142:3000/login", data).then(
      // res=>{
      // console.log(res)
      // const data=res.data
      // persistLogin({ userData: data });
      navigation.navigate('buttomTab')
      // if(localStorage.length!==0){
      // }
      // NavigateToFoundPet()
    // }
    ).catch(err=>{
      console.log(err);
    })
  }
 
    return (
      <View style={styles.container}>
        <Text style={styles.logo}>LOGIN</Text>
        <View style={styles.inputView}>
          <TextInput
            style={styles.inputText}
            placeholder="First Name..."
            placeholderTextColor="#fff"
            onChangeText={(text) => setFirstName( text )}
          />
        </View>
        <View style={styles.inputView}>
          <TextInput
            secureTextEntry
            style={styles.inputText}
            placeholder="Password..."
            placeholderTextColor="#fff"
            onChangeText={(text) => setPassword( text )}
            
          />
        </View>
        <TouchableOpacity>
          <Text style={styles.forgot}>Forgot Password?</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.loginBtn}>
          <Button title="Login" onPress={login} />
          {/* onPress={this.login} */}
        </TouchableOpacity>
        <Text  onPress={navigateTosignUp}>or sign in </Text>
      </View>
    );
  
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