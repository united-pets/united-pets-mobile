import  React, { useEffect, useState } from 'react';
import MapView, {Circle} from 'react-native-maps';
import { StyleSheet, Text, View, Dimensions } from 'react-native';
import useLocation from './useLocation';
import axios from 'axios';

export default function Map() {
  const location = useLocation();
  console.log(location)
  const [geolocation,setGeoLocation] = useState();
  
  const fetchLocation=()=>{
    axios.get(" http://192.168.11.194:3000/GetALL")
    .then(response=>setGeoLocation(response.data))
    .catch(err=>console.log(err))
  }


  return (
    <View style={styles.container}>
     
       <MapView style={styles.map}
         initialRegion={{
           latitude: location?.latitude,
           longitude : location?.longitude,
           latitudeDelta: 0.0922,
           longitudeDelta: 0.0421,
           
         }}>
       <Circle
        center={ {latitude: location?.latitude, 
                  longitude:location?.longitude} }
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
    
  },
  map: {
    width: Dimensions.get('window').width,
    height: Dimensions.get('window').height,
  },
});  
