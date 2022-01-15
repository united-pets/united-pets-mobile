import * as React from 'react';
import MapView, {PROVIDER_GOOGLE } from 'react-native-maps';
import { StyleSheet, Text, View, Dimensions } from 'react-native';
import useLocation from './useLocation';


export default function Map() {
  const location = useLocation();
  
  return (
    <View style={styles.container}>
       <MapView style={styles.map}
         initialRegion={{
           latitude: location?.latitude,
           longitude : location?.longitude,
           latitudeDelta: 0.0922,
           longitudeDelta: 0.0421,
         }}>
               <MapView.Circle
        center={{ latitude: location?.latitude, longitude: location?.longitude }}
        radius={1500}
        fillColor="rgba(255,0,0,0.3)"
        strokeWidth={0.5}
       />
       </MapView>    
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
  map: {
    width: Dimensions.get('window').width,
    height: Dimensions.get('window').height,
  },
});  