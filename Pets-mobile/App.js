import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View,SafeAreaView } from 'react-native';
import { NavigationContainer } from "@react-navigation/native";
// import { ReactDOM } from 'react-dom';
// import { BrowserRouter, Route, Switch } from "react-router-dom";
import GetIteml from './Components/GetIteml'
import Login from './Components/login';
import SignUp from './Components/signup';
import FoundPet from './Components/FoundPet'




export default function App() {
  return (
    <NavigationContainer>
      <View style={styles.container}>
        <FoundPet />
        {/* <HomePage/> */}
        <GetIteml/>
        {/* <Cameracomp /> */}
        {/* <SignUp /> */}
        {/* <Login /> */}
        <StatusBar style="auto" />
      </View>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // backgroundColor: '#fff',
    // alignItems: 'center',
    justifyContent: 'center',
    
  },
      
});
