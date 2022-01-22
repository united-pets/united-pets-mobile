import React from 'react';
import { Button ,StyleSheet, Text, View, TextInput, TouchableOpacity , AsyncStorage } from 'react-native';
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

    const getid = async (key)=>{
      const id = await JSON.parse(AsyncStorage.getItem(key))
      console.log(key);
      console.log('hahaha');
      // JSON.parse(localStorage.getItem("session"))
      return id
    }
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
    useEffect(async () => {
      getLocation();
      // handleSendLocation();
      // console.log(location);
      const y =  await AsyncStorage.getItem("session")
      // console.log('get',y);
    }, []);
    
    const handleSendLostPet = async () => {
      
   try{
    const y =  await AsyncStorage.getItem("session")
    console.log('getttt', JSON.parse(y)[0].iduser);
     const data={
       user_iduser:JSON.parse(y)[0].iduser,
       AnimalImage:props.imageUri, 
       AnimalName:animalName,
       AnimalDescription:animalDescription,
       latitude : location.latitude,
       longitude : location.longitude
     }
     console.log(data)
    axios.post("http://192.168.11.139:3000/add", data)
    //  .then(({data})=>
      
    //    console.log(data)
       // console.log('hihihihihihih')
      //  )
    //  .catch(err => console.log(err))
   }
   catch(err){
     console.log(err);
   }
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
    
       handleSendLostPet()
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