import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View,SafeAreaView } from 'react-native';
import Cameracomp from './Components/Cameracomp';
import { ReactDOM } from 'react-dom';
import { BrowserRouter, Route, Switch } from "react-router-dom";
//import  HomePage  from './Components/HomePage';
import FoundPet from './Components/FoundPet'
export default function App() {
  return (
    <View style={styles.container}>
      <FoundPet/>
      {/* <HomePage/> */}
     
        {/* <Cameracomp /> */}
    
      <StatusBar style="auto" />
    </View>
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
