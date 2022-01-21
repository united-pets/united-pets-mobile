import React, { useState } from 'react';
import { StyleSheet, Text, View,SafeAreaView } from 'react-native';
import { NavigationContainer } from "@react-navigation/native";

import Navigator from './route/navigation'

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
