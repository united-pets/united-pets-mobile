import React , { useState } from 'react';
import { Button ,StyleSheet, Text, View, TextInput, TouchableOpacity ,ScrollView } from 'react-native';
import axios from 'axios';
export default function addLostPet (){
    return(
        <View style={styles.container}>
        <ScrollView  >
             <View style={styles.inputView}>
         <TextInput
            style={styles.inputText} 
            placeholder="First Name..."
            placeholderTextColor="#fff"
            placeholderTextColor="#fff"
          />
          </View>
          <View style={styles.inputView}>
         <TextInput
            style={styles.inputText} 
            placeholder="First Name..."
            placeholderTextColor="#fff"
            placeholderTextColor="#fff"
          />
          </View>
          <View style={styles.inputView}>
         <TextInput
            style={styles.inputText} 
            placeholder="First Name..."
            placeholderTextColor="#fff"
            placeholderTextColor="#fff"
          />
          </View>
          <View style={styles.inputView}>
         <TextInput
            style={styles.inputText} 
            placeholder="First Name..."
            placeholderTextColor="#fff"
            placeholderTextColor="#fff"
          />
          </View>
                   
        </ScrollView>
        </View>
    )
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