import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View,SafeAreaView } from 'react-native';
import Cameracomp from './Components/Cameracomp';
import { NavigationContainer } from "@react-navigation/native";
// import { ReactDOM } from 'react-dom';
// import { BrowserRouter, Route, Switch } from "react-router-dom";
import GetIteml from './GetIteml'
import Login from './login';
import SignUp from './signup';
import  HomePage  from './Components/HomePage';
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
