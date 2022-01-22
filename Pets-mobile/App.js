import React, { useState } from 'react';
import { StyleSheet, Text, View,SafeAreaView } from 'react-native';
import { NavigationContainer } from "@react-navigation/native";
import PetsSetting from './Components/PetsSetting';
import Navigator from './route/navigation'
import PetsWalker from './Components/PetsWalker';

export default function App() {
  return (
     <NavigationContainer>
     <Navigator/>
    </NavigationContainer>
  
  );
}
  

const styles = StyleSheet.create({
  container: {
    flex: 1,  
  },
});
