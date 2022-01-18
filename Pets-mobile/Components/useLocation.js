import React, { useEffect, useState } from "react";
import * as Location from "expo-location";
import axios from 'axios'

export default useLocation = () => {
  const [location, setLocation] = useState();
 console.log(location)
  const getLocation = async () => {
    try {
      const { granted } = await Location.requestForegroundPermissionsAsync();
      if (!granted) return;
      const {
        coords: { latitude, longitude },  
      } = await Location.getCurrentPositionAsync();
      setLocation({ latitude, longitude });
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    getLocation();
  }, []);
  
  handleSendLocation = async () => {
    const POINT = {
      location : location
    }
    try{ 
      const res = await axios
    .post("http://192.168.11.73/useLocation",POINT)
    console.log('location send :', location)
  }
    catch (err) {
    console.log('error sending location: ', err)
  }
}
  
  return location;


};


