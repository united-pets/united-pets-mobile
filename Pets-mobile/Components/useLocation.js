import React, { useEffect, useState } from "react";
import * as Location from "expo-location";
import axios from 'axios'

export default useLocation = () => {
  const [location, setLocation] = useState();
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
    // handleSendLocation();
    
  }, []);
  
  handleSendLocation = async () => {

    try{ 
      const res = await axios
    .post("http://192.168.11.73:3000/useLocation", {
      latitude : location.latitude,
      longitude : location.longitude
    })
    console.log(res.data);
  }catch (err) {
    console.log('error send location: ', err)
   }
  }
  return location;
};
