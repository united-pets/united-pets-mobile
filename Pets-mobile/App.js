import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View,SafeAreaView } from 'react-native';
import Cameracomp from './Components/Cameracomp';
// import { NavigationContainer } from "@react-navigation/native";
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
import PetService from './Components/PetService';
import PetsSetting from './Components/PetsSetting';
import Grooming from './Components/Grooming'
import LostPetForm from './Components/LostPetForm';


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
  return (
    // <NavigationContainer>
    <View style={styles.container}>
      {/* <FoundPet /> */}
      {/* <HomePage/> */}
      {/* <GetIteml/> */}
      {/* <Cameracomp /> */}
      {/* <Gallery/> */}
      {/* <SignUp /> */}
      {/* <Posts/> */}
      <PetService/>
      {/* <Login /> */}
      {/* <Cam/> */}
      {/* <Grooming/> */}
      {/* <PetsSetting/> */}
      {/* <LostPetForm/> */}
    
      <StatusBar style="auto" />
    </View>
    // </NavigationContainer>

    // <NavigationContainer>
    //   <MyStack />
    // </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // backgroundColor: '#fff',
    // alignItems: 'center',
    // justifyContent: 'center',
    
  },
      
});
