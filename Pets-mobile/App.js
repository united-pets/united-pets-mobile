import React, { useState } from 'react';
import { StyleSheet, Text, View,SafeAreaView } from 'react-native';
import { NavigationContainer } from "@react-navigation/native";

import Navigator from './route/navigation'
import PetsWalker from './Components/PetsWalker';
import PetsSetting from './Components/PetsSetting';
import PetServices from './Components/PetService';
import Grooming from './Components/Grooming';
export default function App() {
  return (
    //  <NavigationContainer>
    //  <Navigator/>
    // </NavigationContainer>
    <Grooming />
  );
}
  

const styles = StyleSheet.create({
  container: {
    flex: 1,  
  },
});
