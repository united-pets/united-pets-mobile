import React , { useState } from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View,SafeAreaView } from 'react-native';
import Cameracomp from './Components/Cameracomp';
import { NavigationContainer } from "@react-navigation/native";
import AppLoading from 'expo-app-loading';
import AsyncStorage from '@react-native-async-storage/async-storage';
// import { CredentialsContext } from './components/Authentification/CredentialsContext.js';
// import { createNativeStackNavigator } from "@react-navigation/native-stack";
// import { ReactDOM } from 'react-dom';
// import { BrowserRouter, Route, Switch } from "react-router-dom";
// import GetIteml from './Components/GetIteml'
import Login from './Components/Login';
import SignUp from "./Components/signup";
import  HomePage  from './Components/HomePage';
import FoundPet from './Components/FoundPet';
import Posts from './Components/Posts'
import Gallery from './Components/Gallery';
import Navigation from "./route/navigation"
import { render } from 'react-dom';
// const Stack = createNativeStackNavigator();

// function MyStack() {
//   return (
//     <Stack.Navigator>
//       <Stack.Screen name="foundPet" component={foundPet} />
//     </Stack.Navigator>
//   );
// }
export default function App() {
  const [appReady, setAppReady]= useState(false);
const [storedCredentials, setStoredCredentials]= useState("")
const checkLoginCredentials = ()=>{
  AsyncStorage
   .getItem('domicareCredentials')
   .then((result)=>{
     if(result !== null){
       setStoredCredentials(JSON.parse(result));
     } else {
       setStoredCredentials(null);
     }
   })
   .catch(err => console.log(err));
}
// if(!appReady){
//   return (
//     <AppLoading
//     startAsync={checkLoginCredentials}
//     onFinish={()=> setAppReady(true)}
//     onError={console.warn}
//     />

//   )
// }
  return (
    <NavigationContainer>
          <Navigation />
          {/* <Gallery/> */}
       {/* <Cameracomp/> */}
{/* <Posts /> */}
          {/* <MyTabs /> */}
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
