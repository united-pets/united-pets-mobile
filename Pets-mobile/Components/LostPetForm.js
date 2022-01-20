import React from 'react';
import { Button ,StyleSheet, Text, View, TextInput, TouchableOpacity } from 'react-native';
import axios from 'axios';
import { useState } from 'react/cjs/react.development';
import Cameracomp from './Cameracomp';
import useLocation from './useLocation';

export default function LostPetForm (){
    const [animalImage, setAnimalImage] =  useState();
    const [animalName , setAnimalName] = useState();
    const [animalDescription, setAnimalDescription] = useState();
    const [latitude , setLatitude] = useState();
    const [longitude , setLongitude] = useState();
    const location = useLocation();
    
    const handleSendLostPet = () => {
        axios.post("http://192.168.11.58:3000/lostPetForm", {
        AnimalImage:animalImage , 
        AnimalName:animalName,
        AnimalDescription:animalDescription,
        latitude : location.latitude,
        longitude : location.longitude
      })
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
         setLatitude(location.latitude);
         setLongitude(location.longitude);
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