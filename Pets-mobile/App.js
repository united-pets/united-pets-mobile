import { Camera } from 'expo-camera';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
// import  Cameracomp  from './Components/Cameracomp';
//import  HomePage  from './Components/HomePage';
import FoundPet from './Components/FoundPet'
export default function App() {
  return (
    <View style={styles.container}>
       <FoundPet/>
      {/* <HomePage/> */}
      {/* <Cameracomp/> */}
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
