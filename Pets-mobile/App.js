import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View,SafeAreaView, TouchableOpacity } from 'react-native';
import { NavigationContainer } from "@react-navigation/native";
import Map from './Components/Map';
import { Button } from 'react-native-paper';





export default function App() {
  return (
    <NavigationContainer>
      <View style={styles.container}>
        
      <View style={{
          flex: 1,
          width: 300,
          height: 100,
          flexGrow: 1,
        }} >
        <Map/>
        </View>
        
        
        <View style={{
          flex: 1,
          width: 300,
          height: 100,
        }} >
          <TouchableOpacity style={styles.loginBtn}>
          <Button title="Send Location"  />
        </TouchableOpacity>
      </View>
        
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
    // justifyContent: 'center',
    
  },
      
});
