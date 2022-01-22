import React from 'react';
import { Button ,StyleSheet, Text, View, TextInput, TouchableOpacity } from 'react-native';
import axios from 'axios';
import { useState , useEffect } from 'react/cjs/react.development';
import * as Location from "expo-location";
import Cameracomp from './Cameracomp';
// import useLocation from './useLocation';

export default function LostPetForm (props){
    const [animalImage, setAnimalImage] =  useState();
    const [animalName , setAnimalName] = useState();
    const [animalDescription, setAnimalDescription] = useState();
    const [location, setLocation] = useState();
    const getLocation = async () => {
      try {
        const { granted } = await Location.requestForegroundPermissionsAsync();
        if (!granted) return;
        // console.log('hoo');
        const {
          coords: { latitude, longitude },  
        } = await Location.getCurrentPositionAsync();
        // console.log(coords);
        setLocation({ latitude, longitude });
      } catch (error) {
        console.log(error);
      }
    };
    useEffect(() => {
      getLocation();
      // handleSendLocation();
      // console.log(location);
    }, []);
    
    const handleSendLostPet = () => {
      const data={
        AnimalImage:props.imageUri , 
        AnimalName:animalName,
        AnimalDescription:animalDescription,
        latitude : location.latitude,
        longitude : location.longitude
      }
      console.log(data)
     axios.post("http://192.168.11.10:3000/lostPetForm", data )
      .then(response=>console.log(response.data))
      .catch(err => console.log(err))
    }

    return(
    <View style={styles.container}>
    <View >
    <TouchableOpacity 
    style={styles.inputText} >
    <Button
    title="Animal-Image"  />
  </TouchableOpacity>
  </View>

  <View style={styles.inputView}>
    <TextInput 
    style={styles.inputText}
    placeholder="Animal-Name..."
    placeholderTextColor="#fff"
    onSubmitEditing = {({nativeEvent}) =>{
        setAnimalName(nativeEvent.text)
      }}
  />
    </View>

    <View style={styles.inputView} >
    <TextInput
    style={styles.inputText}
    placeholder="Animal-Description..."
    placeholderTextColor="#fff"
    onSubmitEditing = {({nativeEvent}) =>{
        setAnimalDescription(nativeEvent.text)
      }}
  />
  </View>

  <View > 
<TouchableOpacity
style={styles.inputText} >
    <Button 
    title="Localisation "
     onPress={()=>{
        
         alert('Location up : ' +location.latitude +','+location.longitude)
     }}
    />
  </TouchableOpacity>
  </View>

  <View > 
<TouchableOpacity
style={styles.inputText} >
    <Button 
    title="Send Request "
     onPress={()=>{
       handleSendLostPet();
     }}
    />
  </TouchableOpacity>
  </View>

  </View>)
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: "#fff",
      alignItems: "center",
      justifyContent: "center",
    },
    inputView: {
        width: "80%",
        backgroundColor: "#fca500",
        borderRadius: 25,
        height: 50,
        marginBottom: 20,
        justifyContent: "center",
        padding: 20,
      },
      inputText: {
        height: 50,
        color: "white",
      }
  });